import React, { useEffect, useState } from "react";
import fetchImageFromAPI from "../utils.js";
import like from "../images/like.png";

function Message() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("dog");
  useEffect(() => {
    fetchImageFromAPI(query).then((res) => setData(res));
  }, []);

  function onClick() {
    fetchImageFromAPI(query).then((res) => setData(res));
  }
  return (
    <>
      <body>
        <div className="content-box">
          <div className="content-left">
            <h1 id="head1">Discover the World Through Images</h1>
            <div className="search-container">
              <div className="search-search-box">
                <input
                  className="input"
                  type="text"
                  id="search-box"
                  placeholder="Ex: Dog"
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button onClick={onClick} id="btn1">
                  Search
                </button>
              </div>

              <div className="showbtn">
                <button id="show-more">Show More</button>
              </div>
            </div>
          </div>
          <div className="content-top">
            <div className="poto">
              {data &&
                data.map((image, index) => (
                  <div key={index} className="poto-container">
                    <div className="poto-descrip">
                      <img className="img" src={image.url} alt="" />{" "}
                      <div className="poto-data">
                        <p className="data">
                          <img src={like} alt="alt" /> {image.likes}
                          <p className="descrip">{image.info}</p>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default Message;
