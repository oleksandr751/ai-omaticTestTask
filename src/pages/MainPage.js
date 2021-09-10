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
   <div className='mainDiv'>
    {' '}
    {usersData.map((user, idx) => (
     <div key={idx} className='eachUser'>
      {' '}
      <div>
       <img alt='userImage' className='userImage' src={user.image}></img>
      </div>
      <div className='userInfo'>
       <h3>userStatus</h3>
       <h3>{user.name}</h3>
       <legend>{user.company.catchPhrase}</legend>
      </div>
     </div>
    ))}
   </div>
  </div>
 );
};

export default MainPage;
