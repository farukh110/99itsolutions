import React from "react";
import DateFormat from "../../../lib/DateFormat";

export default function ColumCardStyleTwo({ datas }) {
  return (
    <div className="news-item style-two wow fadeInUp delay-0-2s">
      <div className="image">
        <img
          src={
            require(`../../../assets/images/news/${datas.thumbnail}`).default
          }
          alt="News"
        />
      </div>
      <div className="news-content">
        <div className="news-author">
          <img
            src={
              require(`../../../assets/images/news/${datas.profile_photo}`)
                .default
            }
            alt="Authro"
          />
        </div>
        <ul className="post-meta-item">
          <li>
            <b>
              By <a href="#">{datas.username}</a>
            </b>
          </li>
          <li>
            <i className="fas fa-calendar-alt"></i>
            <a href="#" rel="bookmark">
              {DateFormat(datas.date)}
            </a>
          </li>
        </ul>
        <h4>
          <a href="/blog/blog-details" className="line-clamp-2">
            {datas.title}
          </a>
        </h4>
        <p className="line-clamp-2">{datas.description}</p>
      </div>
    </div>
  );
}
