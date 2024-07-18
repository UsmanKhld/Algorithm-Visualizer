import React from "react";
import "./Carousel.css";
import { CarouselCard } from "../../Components";

export const Carousel = () => {
  return (
    <div className="banner">
      <div className="slider" style={{ "--quantity": 10 }}>
        <div className="item" style={{ "--position": 1 }}>
          <div className="card">
            <CarouselCard />
          </div>
        </div>
        <div className="item" style={{ "--position": 2 }}>
          <div className="card">
            <CarouselCard />
          </div>
        </div>
        <div className="item" style={{ "--position": 3 }}>
          <div className="card">
            <CarouselCard />
          </div>
        </div>
        <div className="item" style={{ "--position": 4 }}>
          <div className="card">
            <CarouselCard />
          </div>
        </div>
        <div className="item" style={{ "--position": 5 }}>
          <div className="card">
            <CarouselCard />
          </div>
        </div>
        <div className="item" style={{ "--position": 6 }}>
          <div className="card">
            <CarouselCard />
          </div>
        </div>
        <div className="item" style={{ "--position": 7 }}>
          <div className="card">
            <CarouselCard />
          </div>
        </div>
        <div className="item" style={{ "--position": 8 }}>
          <div className="card">
            <CarouselCard />
          </div>
        </div>
        <div className="item" style={{ "--position": 9 }}>
          <div className="card">
            <CarouselCard />
          </div>
        </div>
        <div className="item" style={{ "--position": 10 }}>
          <div className="card">
            <CarouselCard />
          </div>
        </div>
      </div>
      <div className="content text-white">
        <h1>Algorithm Visualizer</h1>
        <div className="author text-white">
          <h2>Usman Khalid</h2>
          <p>
            <b>Web Development</b>
          </p>
          <p>Visualize popular algorithms</p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
