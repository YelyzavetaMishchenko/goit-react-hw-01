import React from "react";

import Profile from "../Profile/Profile";
import userData from "../../consigs/userData.json";

import FriendList from "../FriendList/FriendList";
import friends from "../../consigs/friendList.json";

import TransactionHistory from "../TransactionHistory/TransactionHistory";
import transactions from "../../consigs/transactions.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
