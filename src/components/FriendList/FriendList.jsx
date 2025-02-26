import React from "react";
import FriendListItem from "../FriendListItem/FriendListItem";
import friends from "../../consigs/friendList.json";
import css from "./FriendList.module.css";

const FriendList = () => {
  return (
    <ul className={css.friendList}>
      {" "}
      {/* ДОБАВИЛ className */}
      {friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

export default FriendList;
