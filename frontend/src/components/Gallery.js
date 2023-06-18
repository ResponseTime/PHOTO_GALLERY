import React, { useState, useEffect } from "react";

export default function Landing() {
  const [img, setImg] = useState([]);
  let imge = async () => {
    let res = await fetch("https://dog.ceo/api/breeds/image/random");
    return res.json();
  };
  useEffect(() => {
    (async () => {
      let res = await imge();
      setImg(res.message);
    })(); // IIFE
  }, []);
  return (
    <>
      <h1>Gallery</h1>
      <div className="container">
        <div className="row my-5 p-5">
          <div className="col-sm text-center">
            <img
              src={img}
              style={{ height: "200px", width: "200px" }}
              alt="wdaa"
            />
          </div>
          <div className="col-sm text-center">
            <img
              src={img}
              style={{ height: "200px", width: "200px" }}
              alt="wdaa"
            />
          </div>
          <div className="col-sm text-center">
            <img
              src={img}
              style={{ height: "200px", width: "200px" }}
              alt="wdaa"
            />
          </div>
          <div className="col-sm text-center">
            <img
              src={img}
              style={{ height: "200px", width: "200px" }}
              alt="wdaa"
            />
          </div>
        </div>
        <div className="row my-5 p-5">
          <div className="col-sm text-center">
            <img
              src={img}
              style={{ height: "200px", width: "200px" }}
              alt="wdaa"
            />
          </div>
          <div className="col-sm text-center">
            <img
              src={img}
              style={{ height: "200px", width: "200px" }}
              alt="wdaa"
            />
          </div>
          <div className="col-sm text-center">
            <img
              src={img}
              style={{ height: "200px", width: "200px" }}
              alt="wdaa"
            />
          </div>
          <div className="col-sm text-center">
            <img
              src={img}
              style={{ height: "200px", width: "200px" }}
              alt="wdaa"
            />
          </div>
        </div>
        <div className="row my-5 p-5">
          <div className="col-sm text-center">
            <img
              src={img}
              style={{ height: "200px", width: "200px" }}
              alt="wdaa"
            />
          </div>
          <div className="col-sm text-center">
            <img
              src={img}
              style={{ height: "200px", width: "200px" }}
              alt="wdaa"
            />
          </div>
          <div className="col-sm text-center">
            <img
              src={img}
              style={{ height: "200px", width: "200px" }}
              alt="wdaa"
            />
          </div>
          <div className="col-sm text-center">
            <img
              src={img}
              style={{ height: "200px", width: "200px" }}
              alt="wdaa"
            />
          </div>
        </div>
      </div>
    </>
  );
}
