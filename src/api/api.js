import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '0990ddd9-75fe-4d8d-952b-4204bbc5e0b7',
  },
});

export const getUsersFriends = (currentPage, pageSize) => {
  return instance.get(`users?page=${currentPage}&count=${pageSize}`);
};

export const getUsersFriendsUnfollow = (u) => {
  return instance.delete(`follow/${u.id}`);
};

export const getUsersFriendsFollow = (u) => {
  return instance.post(`follow/${u.id}`);
};

export const getUsersProfile = () => {
  return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/2`);
};
