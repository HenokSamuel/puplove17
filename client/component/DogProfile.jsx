import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';

function DogProfile({ open, sessUser, sessDog, dog }) {

  const [ friends, setFriends ] = useState('');

  const { id, dog_name, breed, weight, age, fixed, description, image, id_user } = sessDog;

  // useEffect(() => {
  //   axios.post('/dogfriends', { id })
  //   .then(response => setFriends(response.data))
  //   .then((friendList) => setFriends(friendList))
  //   .catch(() => console.error('We could not get this dog\'s friends'));
  // });

  const unfriend = () => {
    axios.post('/unfriend', { id })
    .then(() => console.log('see you later!'))
    .catch((err) => console.error(err, 'we couldn\'t get rid of this "friend"'));
  };

  return (
    <div class='profileContainer'>
      <button id='settings' onClick={open}>Menu</button>
      <h4>{`${dog_name}'s Profile`}</h4>
      <img src={image} />
      <div class='profileInfo'>{`Name: ${dog_name}`}</div>
      <div class='profileInfo'>{`Age: ${age} years`}</div>
      <div class='profileInfo'>{`Weight: ${weight} lbs`}</div>
      <div class='profileInfo'>{`Breed: ${breed}`}</div>
      <div class='profileInfo'>{`Fixed: ${fixed}`}</div>
      <div class='profileInfo'>{`Description: ${description}`}</div>
      <h3>Friends of {dog_name}</h3>
      {/* <div>{
        friends.map(({ id, image, dog_name }) => {
          return (
            <div class='profileContainer' key={id}>
              <div class='profileInfo' style={{ backgroundImage: `url('${image}')` }}>{dog_name}</div>
              <Link to={`/dogprofile/${id}`}>View Profile</Link>
              <button id='login' type='button' onClick={unfriend}>Unfriend</button>
            </div>
          );
        })
      }</div> */}
    </div>
  );
};

export default DogProfile;






// import React from 'react';
// import { Link, Route } from 'react-router-dom';
// import axios from 'axios';
// import Friend from './Friend.jsx';

// function DogProfile({ match, open, sessUser, sessDog, allDogs, friends, getFriends }) {

//   const unfriend = (friendId) => {
//     axios.post('/unfriend', { id_dog: sessDog.id, id_friend: friendId, bool_friend: 1 })
//     .then(() => console.log('see you later!'))
//     .catch((err) => console.error(err, 'we couldn\'t get rid of this "friend"'));
//   };

//   const friendList = friends.map(({ id, dog_name, image }) => {
//     return (
//       <li key={id}>
//         <div class='profileContainer'>
//           <div class='profileInfo' style={{ backgroundImage: `url('${image}')` }}>{dog_name}</div>
//           <Link to={`${match.url}/${id}`} onClick={() => getFriends(id)}>View Profile</Link>
//           <button id='login' type='button' onClick={() => unfriend(id)}>Unfriend</button>
//         </div>
//       </li>
//     );
//   });

//   return (
//     <div>
//       <div class='profileContainer'>
//         <button id='settings' onClick={open}>Menu</button>
//         <div>
//           <Route
//             path={'/dogProfile/:id'}
//             render={(props) => (<Friend data={allDogs} {...props} />)}
//           />
//         </div>
//         <h3>Friends</h3>
//         <ul>{friendList}</ul>
//       </div>
//     </div>
//   );
// };

// export default DogProfile;
