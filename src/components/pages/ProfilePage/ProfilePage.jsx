import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user } = useAuth0();
  const { email } = user;

  return (
    <div>
      <h1>Profile Page</h1>
      <h2>{email}</h2>
    </div>
  );
};

export default Profile;
