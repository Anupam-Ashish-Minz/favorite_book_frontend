import React from 'react';

const Profile = () => {
  return (
    <div>
      profile
      <form action="/api/logout" method="post">
      <button type="submit">logout</button>
      </form>
    </div>
  );
};

export default Profile;
