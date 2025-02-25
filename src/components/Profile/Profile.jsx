import React from "react";
import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profileContainer}>
      <div className={css.profileWrap}>
        <img className={css.profileAvatar} src={image} alt="User avatar" />
        <p className={css.profileName}>{name}</p>
        <p className={css.profileTag}>@{tag}</p>
        <p className={css.profileLocation}>{location}</p>
      </div>

      <ul className={css.profileList}>
        <li className={css.profileItem}>
          <span className={css.profileText}>Followers</span>
          <span className={css.profileValue}>{stats.followers}</span>
        </li>
        <li className={css.profileItem}>
          <span className={css.profileText}>Views</span>
          <span className={css.profileValue}>{stats.views}</span>
        </li>
        <li className={css.profileItem}>
          <span className={css.profileText}>Likes</span>
          <span className={css.profileValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
