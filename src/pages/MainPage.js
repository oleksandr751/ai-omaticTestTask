import React, { useEffect, useState } from 'react';
import './MainPage.css';
const MainPage = () => {
 const [usersData, setUsersData] = useState([]);
 useEffect(() => {
  const fetchData = async () => {
   await fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {
     console.log(data);
     setUsersData(data);
    });
  };
  fetchData();
 }, []);
 return (
  <div className='backGroundDiv'>
   <h1>Main Page</h1>
   <div
    className='mainDiv'
    style={
     usersData.length >= 3
      ? { alignItems: 'flex-start' }
      : { alignItems: 'center' }
    }
   >
    {' '}
    {usersData.map((user, idx) => (
     <div key={idx} className='eachUser'>
      {' '}
      <div>
       <img
        alt='userImage'
        className='userImage'
        src={
         user.image
          ? user.image
          : 'https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg'
        }
       ></img>
      </div>
      <div className='userInfo'>
       <h3>{user.username}</h3>
       <legend>{user.name}</legend>
       <legend>{user.email}</legend>
       <legend>{user.company.catchPhrase}</legend>
      </div>
     </div>
    ))}
   </div>
  </div>
 );
};

export default MainPage;
