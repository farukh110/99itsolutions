import React from "react";
import DateFormat from "../../../lib/DateFormat";

function ColumCardStyleOne({ datas }) {
  return (
    <div className="news-item wow fadeInUp delay-0-2s">
      <div className="image">
        <img
          src={
            require(`../../../assets/images/news/${datas.thumbnail}`).default
          }
          alt="News"
        />
      </div>
      <div className="news-content">
        <ul className="post-meta-item">
          <li>
            <i className="fas fa-calendar-alt"></i>
            <a href="#" rel="bookmark">
              {/* 22 December 2021 */}
              {DateFormat(datas.date)}
            </a>
          </li>
          <li>
            <i className="fas fa-tag"></i>
            <a href="#">{datas.tags}</a>
          </li>
        </ul>
        <h4>
          <a href="/blog/blog-details" className="line-clamp-2">
            {datas.title}
          </a>
        </h4>
        <p className="line-clamp-2">{datas.description}</p>
      </div>
      <div className="news-author">
        <img
          src={
            require(`../../../assets/images/news/${datas.profile_photo}`)
              .default
          }
          alt="Authror"
        />
        <span className="posted-by">
          By <a href="#">{datas.username}</a>
        </span>
      </div>
    </div>
  );
}

export default ColumCardStyleOne;
