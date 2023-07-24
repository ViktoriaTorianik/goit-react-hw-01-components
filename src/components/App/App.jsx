import { Profile } from "components/profile/profile";
import user from 'user.json'

import { Statistics } from "../statList/statList";
import data from 'data.json'

import { FriendList } from "components/friendList/friendList";
import friends from 'friends.json'

import { TransactionHistory } from "components/TransactionHistory/TransactionHistory";
import transactions from 'transactions.json'

export const App = () => {
  return (
    <div>
      <Profile name={user.username}
        tag={user.tag}
        location={user.location}
        src={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
