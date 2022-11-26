import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import PopularAr from "./PopularAr";
import Search from "./Search";

function Home6() {
  return (
    <div className="home">
      <Navbar />
      <div className="main-content">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <Search />
            </div>
            <div className="col-4">
              <div className="search-category-tag">
                <div className="search">
                  <h2>Search</h2>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Search"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <button className="btn btn-block">Search</button>
                  </div>
                </div>
                <div className="popular-artical">
                  <div className="title">
                    <h3>Popular Article</h3>
                  </div>
                  <PopularAr />
                </div>
                <div className="flow-facebook">
                  <div className="title">
                    <h3>Following Me</h3>
                  </div>
                  <div className="image">
                    <iframe
                      title="This is a unique title"
                      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffsalmanazmirafi&tabs=timeline&width=340&height=120&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                      style={{
                        width: "340px",
                        height: "130px",
                        border: "none",
                        overflow: "hidden",
                        scrolling: "no",
                        frameborder: "0",
                        allowfullscreen: "true",
                        allow:
                          "autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share",
                      }}
                    ></iframe>
                  </div>
                </div>
                <div className="category">
                  <div className="title">
                    <h3>Category</h3>
                  </div>
                  <ul className="cate-list">
                    <div className="cate-item">
                      <li>
                        <FaChevronRight />
                        <Link to="/article/category/category">Natural</Link>
                      </li>
                      <span>(9)</span>
                    </div>
                    <div className="cate-item">
                      <li>
                        <FaChevronRight />
                        <Link to="/article/category/category">Photography</Link>
                      </li>
                      <span>(6)</span>
                    </div>
                    <div className="cate-item">
                      <li>
                        <FaChevronRight />
                        <Link to="/article/category/category">Rainbow</Link>
                      </li>
                      <span>(4)</span>
                    </div>
                    <div className="cate-item">
                      <li>
                        <FaChevronRight />
                        <Link to="/article/category/category">Skies </Link>
                      </li>
                      <span>(7)</span>
                    </div>
                  </ul>
                </div>
                <div className="tag">
                  <div className="title">
                    <h3>Tag</h3>
                  </div>
                  <ul>
                    <li>
                      <Link to="/article/tag/tag">Dayime</Link>
                    </li>
                    <li>
                      <Link to="/article/tag/tag">Flowers</Link>
                    </li>
                    <li>
                      <Link to="/article/tag/tag">Petaled</Link>{" "}
                    </li>
                    <li>
                      <Link to="/article/tag/tag">Purple</Link>{" "}
                    </li>
                    <li>
                      <Link to="/article/tag/tag">Natural</Link>
                    </li>
                    <li>
                      <Link to="/article/tag/tag">Photography</Link>{" "}
                    </li>
                    <li>
                      <Link to="/article/tag/tag">Perspective</Link>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home6;
