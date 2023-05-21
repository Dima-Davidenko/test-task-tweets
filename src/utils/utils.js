import { FILTER } from '../constants/constants';

export const getUsersWithSubscription = users => {
  const subscriptionList = JSON.parse(localStorage.getItem('subscriptionList')) || [];
  return users.map(user => ({
    ...user,
    subscription: subscriptionList.includes(user.id),
  }));
};

export const filterUsers = (filter, users) => {
  return users.filter(user => {
    switch (filter) {
      case FILTER.FOLLOW:
        return !user.subscription;
      case FILTER.FOLLOWINGS:
        return user.subscription;
      default:
        return true;
    }
  });
};

export const saveSubscriprtionToLocalStorage = (id, subscribed) => {
  const subscriptionList = JSON.parse(localStorage.getItem('subscriptionList')) || [];

  const newSubscriptionList = subscribed
    ? subscriptionList.filter(subscribedID => subscribedID !== id)
    : [...subscriptionList, id];

  localStorage.setItem('subscriptionList', JSON.stringify(newSubscriptionList));
};

export const formatFollowersCount = followers => {
  const arr = followers.toString().split('').reverse();
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i]);
    if ((i + 1) % 3 === 0) {
      if (arr[i + 1]) {
        res.push(', ');
      }
    }
  }
  return res.reverse().join('');
};
