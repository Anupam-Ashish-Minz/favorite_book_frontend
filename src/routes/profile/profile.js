import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [user, setUser] = useState(null);
  useEffect(()=>{
    fetch("/api/loginUser")
      .then(data => data.json())
      .then(data => setUser(data));
  }, [])

  return (
    <div>
      profile
      <div>user {user}</div>
      <form action="/api/logout" method="post">
      <button type="submit">logout</button>
      </form>
    </div>
  );
};

export default Profile;
