import React from "react";

function TeamCardStyleOne({ datas, className }) {
  return (
    <div className={`team-member wow fadeInUp delay-0-2s ${className || ""}`}>
      <div className="image">
        <img
          src={
            require(`../../../assets/images/team/${datas.profile_photo}`)
              .default
          }
          alt="Team Member"
        />
      </div>
      <div className="member-designation">
        <h5>
          <a href="/team-single">{datas.name}</a>
        </h5>
        <span>{datas.designation}</span>
      </div>
    </div>
  );
}

export default TeamCardStyleOne;
