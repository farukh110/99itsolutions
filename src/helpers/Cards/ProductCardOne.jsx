import React from "react";

export default function ProductCardOne({ datas }) {
  return (
    <div className="product-item">
      <div className="image">
        {datas.tag !== "" && <span className="sale">{datas.tag}</span>}
        <img
          src={require(`../../../assets/images/shop/${datas.picture}`).default}
          alt="Product"
        />
        <a href="/shop-details" className="theme-btn style-six">
          Add to cart
        </a>
      </div>
      <div className="title-price">
        <h5 className="line-clamp-1">
          <a href="/shop-details" className="text-capitalize">
            {datas.title}
          </a>
        </h5>
        <span className="shop-price">
          <span className="price">{datas.price}</span>
        </span>
      </div>
      <div className="rating">
        {[...Array(datas.review)].map((_, i) => (
          <i key={i} className="fas fa-star"></i>
        ))}
        {[...Array(5 - datas.review)].map((_, i) => (
          <i key={i} className="far fa-star"></i>
        ))}
      </div>
    </div>
  );
}
