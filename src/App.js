// IMPORT useState
import React, { useState } from "react";
import imagesArr from "./imageData";
import "./styles.css";

export default function App() {
  const [bigImage, setBigImage] = useState(imagesArr[0].img);

  const handleClick = (image) => {
    setBigImage(image);
  };

  const images = imagesArr.map((el, idx) => {
    return (
      <img
        onClick={() => handleClick(el.img)}
        className="thumb"
        src={el.img}
        alt={el.city}
        key={idx}
        style={{
          border: bigImage === el.img ? "4px solid rgb(89, 199, 89)" : " ",
        }}
      />
    );
  });

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">{images}</div>
        <img src={bigImage} id="bigimage" alt="bigImage" />
      </div>
    </div>
  );
}
