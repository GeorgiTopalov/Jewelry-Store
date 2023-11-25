import React from "react";
import Layout from "../components/layout";
import Link from "next/link";

const HomePage = () => {
  return (
    <Layout>
      <div>
        <div section="product">
          <div className="product-images">
            <img src="/Ring-sample1.jpg" alt="nice ring" />
          </div>
          <div className="product-info">
            <h2>Super Nice Ring</h2>
            <h6>in 9k gold with a beautiful diamond 3.2mm</h6>
            <form id="product-form">
              <div className="form-section">
                <label for="quantity">Quantity</label>
                <select form="product-form">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div className="ring-size form-section">
                <label for="ringsize">Ring Size</label>
                <select form="product-form">
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                </select>
              </div>
              <button className="btn btn-shop form-section" type="submit">
                1000$<span className="add-to-bag">Add to Bag</span>
              </button>
            </form>
            <div className="info-section">
              <h3>Description and details</h3>
              <p>
                This ring is so amazing that you won't find another like it! it
                gives 4 wisdom, 5 strength and 10 constitution. Also you can
                become invisible upon activation once per day. This is random
                text that I just came up with to see how it looks. Nothing
                special it is just a template.
              </p>
            </div>
          </div>
          <div className="reviews"></div>
        </div>
        <div section="related-products"></div>
      </div>
    </Layout>
  );
};

export default HomePage;
