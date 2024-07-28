import { useEffect, useState } from "react";
import "./App.css";
import Carousel from "./components/Carousel";

function App() {
  const [loading, setloading] = useState(false);
  const [images, setimages] = useState([]);
  console.log(images);
  async function fetchImages(imageLimit) {
    setloading(true);

    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_limit=${imageLimit}`
      );
      const data = await res.json();
      setimages(data);
    } catch (error) {
      console.log("Error while fetchin images", error);
    } finally {
      setloading(false);
    }
  }

  useEffect(function () {
    fetchImages(8);
  }, []);

  return (
    <div className="cacousel-container">
      <Carousel
        images={images}
        isLoading={loading}
        imgPerSlide={2}
        //customPrevButton={}
        //customNextButton={}
      />
    </div>
  );
}

export default App;
