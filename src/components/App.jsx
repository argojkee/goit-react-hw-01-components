import Profile from './Profile/Profile';
import userData from './user.json';
import Statistics from './Statistics/Statistics';
import dataStats from './data.json';
import FriendList from './FriendList/FriendList';
import friends from './friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        userAvatar={userData.avatar}
        userName={userData.username}
        tag={userData.tag}
        location={userData.location}
        followers={userData.stats.followers}
        views={userData.stats.views}
        likes={userData.stats.likes}
      />
      <Statistics stats={dataStats} title="Hello world" />
      <Statistics stats={dataStats} />
      <FriendList friendList={friends} />
      <TransactionHistory dataTransactions={transactions} />
    </>
  );
};
