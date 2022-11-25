import React from "react";
import { Link } from "react-router-dom";

function PopularAr() {
  return (
    <>
      <div className="row">
        <div className="col-4">
          <Link to="/" className="image">
            <img src="http://localhost:3000/assects/sss.jpg" alt="" />
          </Link>
        </div>
        <div className="col-8">
          <div className="title-time">
            <Link to="/">sadas dasdasd</Link>
            <br />
            <span>2 jun 2022</span>
          </div>
        </div>
      </div>
      {/* row  */}

      <div className="row">
        <div className="col-4">
          <Link to="/" className="image">
            <img src="http://localhost:3000/assects/sss.jpg" alt="" />
          </Link>
        </div>
        <div className="col-8">
          <div className="title-time">
            <Link to="/">sadas dasdasd</Link>
            <br />
            <span>25 Nov 2022</span>
          </div>
        </div>
      </div>
      {/* row  */}

      <div className="row">
        <div className="col-4">
          <Link to="/" className="image">
            <img src="http://localhost:3000/assects/sss.jpg" alt="" />
          </Link>
        </div>
        <div className="col-8">
          <div className="title-time">
            <Link to="/">sadas dasdasd</Link>
            <br />
            <span>2 jun 2022</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopularAr;
