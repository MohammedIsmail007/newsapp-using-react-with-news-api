import React from "react";
import Card from "./Card";
import "./App.css";
import { useState, useEffect } from "react";
function News() {
  let date = new Date();
  let [articles, setArticles] = useState([]);
  let [category, setCategory] = useState("Apple");
  let [fromDate, setFromDate] = useState(date.getDate());
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=${category}&from=${fromDate}&apiKey=2e38381707c4414483efdf553c13bf25`
    )
      .then((response) => response.json())
      .then((news) => {
        setArticles(news.articles);
        console.log(news.articles);
      })
      .catch((err) => console.log(err));
  }, [category]);

  return (
    <div>
      <input
        className="form-control me-2 border-3 flex-lg-row justify-content-center align-content-center"
        type="search"
        placeholder="Search your news"
        aria-label="Search"
        onChange={(event) => {
          if (event.target.value != "") {
            setCategory(event.target.value);
          } else {
            setCategory("India");
          }
        }}
      ></input>

      <div className="newscard">
        {articles.length != 0 ? (
          articles.map((news) => {
            return <Card key={news.title} news={news} />;
          })
        ) : (
          <h2>Result not Found</h2>
        )}

        {/* <Card />
      <Card />
      <Card /> */}
      </div>
    </div>
  );
}

export default News;
