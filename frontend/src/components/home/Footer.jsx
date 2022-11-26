import React from "react";

const Footer = () => {
  return (
    <section id="footer">
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="title">
                <h3>Old Artical</h3>
              </div>
            </div>
            <div className="col-4">
              <div className="title-cate-tag">
                <div className="title">
                  <h3>Category</h3>
                </div>
                <div className="cate-tag">
                  <div className="cate">
                    <ul className="cate-list"></ul>
                  </div>
                  <div className="tag">
                    <div className="title">
                      <h3>Tag</h3>
                    </div>
                    <ul className="tag-list"></ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="title">
                <h3>Recent Recipse</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
