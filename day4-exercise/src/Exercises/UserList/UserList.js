import React from 'react';
import { UserSelfCard } from '../UserCard';



const UserList = ({ users }) => {
  return (
        users.map(user => (
          <UserSelfCard
          hoverable = {true}
            user = {user}
          />
        ))
  );
};

export default UserList;
