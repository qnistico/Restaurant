import React, { useState, useEffect } from "react";
import pasta1 from "./img/pasta1.jpg";
import pasta2 from "./img/pasta2.jpg";
import pasta3 from "./img/pasta3.jpg";
import pasta4 from "./img/pasta4.jpg";
import pizza1 from "./img/pizza1.jpg";
import pizza2 from "./img/pizza2.jpg";
import pizza3 from "./img/pizza3.jpg";
import pizza4 from "./img/pizza4.jpg";
import fish1 from "./img/fish1.jpg";
import fish2 from "./img/fish2.jpg";
import fish3 from "./img/fish3.jpg";
import fish4 from "./img/fish4.jpg";
import wine1 from "./img/wine1.jpg";
import wine2 from "./img/wine2.jpg";
import wine3 from "./img/wine3.jpg";
import wine4 from "./img/wine4.jpg";
import coffee1 from "./img/coffee.jpg";
import coffee2 from "./img/coffee2.jpg";
import coffee3 from "./img/coffee3.jpg";
import coffee4 from "./img/coffee4.jpg";
import "./Sass/Gallery.scss";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import { Fade } from "react-reveal";
import { Helmet } from "react-helmet";


function Gallery() {
  const options = {
    settings: {
      slideAnimationType: "both",
    },
  };
  const images = [
    { id: "1", imageName: pasta1, tag: "Pasta" },
    { id: "2", imageName: pasta2, tag: "Pasta" },
    { id: "3", imageName: pasta3, tag: "Pasta" },
    { id: "4", imageName: pasta4, tag: "Pasta" },
    { id: "5", imageName: fish1, tag: "Fish" },
    { id: "6", imageName: fish2, tag: "Fish" },
    { id: "7", imageName: fish3, tag: "Fish" },
    { id: "8", imageName: fish4, tag: "Fish" },
    { id: "9", imageName: pizza1, tag: "Pizza" },
    { id: "10", imageName: pizza2, tag: "Pizza" },
    { id: "11", imageName: pizza3, tag: "Pizza" },
    { id: "12", imageName: pizza4, tag: "Pizza" },
    { id: "13", imageName: wine1, tag: "Wine" },
    { id: "14", imageName: wine2, tag: "Wine" },
    { id: "15", imageName: wine3, tag: "Wine" },
    { id: "16", imageName: wine4, tag: "Wine" },
    { id: "17", imageName: coffee1, tag: "Coffee" },
    { id: "18", imageName: coffee2, tag: "Coffee" },
    { id: "19", imageName: coffee3, tag: "Coffee" },
    { id: "20", imageName: coffee4, tag: "Coffee" },
  ];
  const [tag, setTag] = useState("All");
  const [filteredImages, setFilteredImages] = useState([]);
  useEffect(() => {
    tag === "All"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);
  return (
    <div>
      <Helmet>
        <title>Avellino's Food Gallery</title>
        <meta name="description" content="Avellino's Food Gallery" />
      </Helmet>
    <Fade duration="1210">
      <div className="gallery" handleSetTag={setTag}>
        <div className="gallery-buttons">
          <TagButton name="All" handleSetTag={setTag} />
          <TagButton name="Pasta" handleSetTag={setTag} />
          <TagButton name="Fish" handleSetTag={setTag} />
          <TagButton name="Pizza" handleSetTag={setTag} />
          <TagButton name="Wine" handleSetTag={setTag} />
          <TagButton name="Coffee" handleSetTag={setTag} />
        </div>
        <SRLWrapper options={options}>
          <div className="gallery-grid">
            {filteredImages.map((image) => (
              <div key={image.id} className="gallery-img-container">
                <a href={`${image.imageName}`}>
                  <img
                    src={`${image.imageName}`}
                    alt=""
                    className="gallery-img"
                  />
                </a>
              </div>
            ))}
          </div>
        </SRLWrapper>
      </div>
    </Fade>
    </div>
  );
}

const TagButton = ({ name, handleSetTag }) => {
  return <button onClick={() => handleSetTag(name)}>{name}</button>;
};

export default Gallery;
