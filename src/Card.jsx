import React from "react";

function Card(props) {
  //console.log(props);
  return (
    <div>
      <div className="card" style={{ width: 18 + "rem" }}>
        {props.news.urlToImage != null ? (
          <img
            src={props.news.urlToImage}
            className="img-thumbnail p-1  "
            alt="image not available"
          />
        ) : (
          <img src="https://cdn.iconscout.com/icon/free/png-256/free-no-image-1771002-1505134.png" />
        )}

        <div className="card-title m-3  fw-bold ">
          {props.news.title?.substring(0, 50)}...
        </div>
        <div className="card-body p-3">
          <p className="card-text m-3">
            {props.news.description?.substring(0, 150)}
          </p>
          <div className="authorReadmore">
            <button className="btn btn-primary rounded-3">
              <a href={props.news.url} target="_blank">
                Read More...
              </a>
            </button>
            <p>{props.news.author?.substring(0, 20)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
