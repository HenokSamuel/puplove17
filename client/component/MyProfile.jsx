import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Friend from './Friend.jsx';
import axios from 'axios';

function MyProfile({ sessUser, sessDog }) {

  const { id, dog_name, breed, weight, age, fixed, description, image, id_user } = sessDog;
  const { username, cell, home_town, email } = sessUser

  const updateUserAndDogInfo = (obj) => {
    axios.post('./updateUserAndDog', obj).then((result) => {
      console.log('success')
    }).catch(() => { });
  }


  const [editUserbuttonClicked, editChange] = useState(false);
  //user edit states
  const [usernameEdit, setUsername] = useState('');
  const [cellEdit, setCell] = useState('');
  const [hometownEdit, setHometown] = useState('');
  //dog edit states
  const [dogNameEdit, setDogName] = useState('');
  const [weightEdit, setWeight] = useState('');
  const [ageEdit, setAge] = useState('');
  const [breedEdit, setBreed] = useState('');
  const [descEdit, setDesc] = useState('');
  const [imageEdit, setImage] = useState('');
  const [fixedEdit, setFixed] = useState('');

  const onEvent = (event, setFunc, val) => {
    console.log(event.target.value);
    if (event.target.value === '' || event.target.value === undefined) {
      setFunc(val);
    } else {
      setFunc(event.target.value);
    }
  }

  //Form to submit edit for User and Dog info 
  let bothDiv = <div id="sc-edprofile">
    <div>Edit User's Info</div>
    <div class="sc-container">
      <label>Username:</label><br /><input onChange={(event) => { onEvent(event, setUsername, username); }} type="text" placeholder={username} /><br />

      <label>Cell:</label><br /><input onChange={(event) => { onEvent(event, setCell, cell); }} type="text" placeholder={cell} /><br />

      <label>Hometown:</label><br /><input onChange={(event) => { onEvent(event, setHometown, home_town); }} type="text" placeholder={home_town} /><br /><br />

      <div>Edit Dog's Info</div>
      <label>Name:</label><br /><input onChange={(event) => { onEvent(event, setDogName, dog_name); }} type="text" placeholder={dog_name} /><br />

      <label>Weight:</label><br /><input onChange={(event) => { onEvent(event, setWeight, weight); }} type="text" placeholder={weight} /><br />

      <label>Age:</label><br /><input onChange={(event) => { onEvent(event, setAge, age); }} type="text" placeholder={age} /><br />

      <label>Breed:</label><br /><input onChange={(event) => { onEvent(event, setBreed, breed); }} type="text" placeholder={breed} /><br />

      <label>Description:</label><br /><input onChange={(event) => { onEvent(event, setDesc, description); }} type="text" placeholder={description} /><br />

      <label>Fixed?</label><br /><input onChange={(event) => { onEvent(event, setFixed, fixed); }} type="text" placeholder={fixed} /><br />

      <label>Image Url:</label><br /><input onChange={(event) => { onEvent(event, setImage, image); }} type="text" placeholder='Image Url' /><br />

      <Link class="favorite styled"
        to="/myprofile"
        onClick={() => {
          editChange(false);
          console.group('editinfo submit clicked')
          updateUserAndDogInfo({
            user: {
              username: usernameEdit,
              cell: cellEdit,
              hometown: hometownEdit,
            },
            dog: {
              dog_name: dogNameEdit,
              weight: weightEdit,
              breed: breedEdit,
              age: ageEdit,
              fixed: fixedEdit,
              description: descEdit,
              image: imageEdit,
            }
          });

        }}>Submit</Link>
    </div>
  </div>


  if (sessUser) {
    return (
      <div>
        <div id='divEditClicked'>
          <div class='profileContainer'>
            <div>{`${username}'s Profile Inforamtion`}</div>
            <div class='profileInfo'>{`Username: ${username}`}</div>
            <div class='profileInfo'>{`Email: ${email}`}</div>
            <div class='profileInfo'>{`Cell Phone Number: ${cell}`}</div>
            <div class='profileInfo'>{`Hometown: ${home_town}`}</div>
          </div>
          <button onClick={() => {
            console.log('button clicked!');
            editChange(!editUserbuttonClicked)
          }}>Edit Profile</button>
          {editUserbuttonClicked ? bothDiv : <div></div>}
        </div>
        <div id='dogContainer'>
          <div>{`${username}'s Dog`}</div>
          <div class='profileInfo'>{`Name: ${sessDog.dog_name}`}</div>
          <div class='profileInfo'><img src={sessDog.image} alt="1" /></div><br />
          <Link to="/dogprofile"> {`Go to ${sessDog.dog_name} Profile `}</Link>
        </div>

      </div>
    )
  } else {
    <div>User is not signed in</div>
  }


};

export default MyProfile;









// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Friend from './Friend.jsx';


// function MyProfile({ usersInfo, setDog, users, userDogs }) {
//   console.log(setDog, 6);
//   console.log(users, 7);
//   console.log(8);
//   var username = null;
//   var email = null;
//   var cell = null;
//   var homeTown = null;
//   //USER EDIT STATES
//   console.log(users);
//   console.log(111);

//   let [usernameState, usernameChange] = useState(null);
//   let [emailState, emailChange] = useState(null);
//   let [cellState, cellChange] = useState(null);
//   let [hometownState, hometownChange] = useState(null);
//   let [addDogState, addDogChange] = useState(null);


//   let [editUserbuttonClicked, editChange] = useState(false);
//   let editDiv = <div id="sc-edprofile">
//     <h1>Edit Profile</h1>
//     <div class="sc-container">
//       <input onChange={(event) => { usernameChange(event.target.value) }} type="text" placeholder="Username" />
//       <input onChange={(event) => { emailChange(event.target.value) }} type="text" placeholder="Email Address" />
//       <input onChange={(event) => { cellChange(event.target.value) }} type="text" placeholder="Cell Phone Number" />
//       <input onChange={(event) => { latitudeChange(event.target.value) }} type="text" placeholder="Hometown" />
//       <input class="favorite styled"
//         type="button"
//         value="Submit"
//         onClick={() => {
//           console.group('editinfo submit clicked')
//           postEditInfo({
//             username: usernameState,
//             email: emailState,
//             cell: cellState,
//             hometown: hometownState
//           });

//         }} />
//     </div>
//   </div>

//   //

//   let addDogDiv = <div id="sc-edprofile">
//     <h1>Add A Dog</h1>
//     <div class="sc-container">
//       <input onChange={(event) => { dogNameChange(event.target.value) }} type="text" placeholder="Name" />
//       <input onChange={(event) => { dogBreedChange(event.target.value) }} type="text" placeholder="Breed" />
//       <input onChange={(event) => { dogAgeChange(event.target.value) }} type="text" placeholder="Age" />
//       <input onChange={(event) => { dogWeightChange(event.target.value) }} type="text" placeholder="Weight" />
//       <input onChange={(event) => { dogFixedChange(event.target.value) }} type="text" placeholder="Fixed" />
//       <input onChange={(event) => { dogDescriptionChange(event.target.value) }} type="text" placeholder="Description" />
//       <input onChange={(event) => { dogImageUrlChange(event.target.value) }} type="text" placeholder="Image URL" />
//       <input class="favorite styled"
//         type="button"
//         value="Submit"
//         onClick={() => {
//           console.group('editinfo submit clicked')
//           postDogInfo({
//             username: usernameState,
//             email: emailState,
//             cell: cellState,
//             hometown: hometownState
//           });

//         }} />
//     </div>
//   </div>



//   //ADD DOG STATE
//   let [dogNameState, dogNameChange] = useState(null);
//   let [dogBreedState, dogBreedChange] = useState(null);
//   let [dogAgeState, dogAgeChange] = useState(null);
//   let [dogWeightState, dogWeightChange] = useState(null);
//   let [dogFixedState, dogFixedChange] = useState(null);
//   let [dogDecriptionState, dogDescriptionChange] = useState(null);
//   let [dogImageUrl, dogImageUrlChange] = useState(null);
//   //======================================================================================================
//   //VARIABLES
//   if (users) {
//     var user = users[0];
//     console.log(user);


//     //UsersInfo props
//     console.log(user.username, 35)
//     username = user.name;
//     email = user.email;
//     cell = user.cell;
//     homeTown = 'ATL';
//     //  const { cell, homeTownn, email } = user;
//     if (username) {
//       console.log(username, 34);

//       let homeTown = 'New Orleans'
//       console.log(usersInfo);

//       //Conditional render of edit div based if this state is toggled
//       // let [editUserbuttonClicked, editChange] = useState(false);

//       //FUNCTIONS
//       const postEditInfo = (obj) => {
//         console.log('axios request here');
//       };
//       const postDogInfo = (obj) => {
//         console.log('axios request here');
//       };

//       //Div for editing the profile
//       let editDiv = <div id="sc-edprofile">
//         <h1>Edit Profile</h1>
//         <div class="sc-container">
//           <input onChange={(event) => { usernameChange(event.target.value) }} type="text" placeholder="Username" />
//           <input onChange={(event) => { emailChange(event.target.value) }} type="text" placeholder="Email Address" />
//           <input onChange={(event) => { cellChange(event.target.value) }} type="text" placeholder="Cell Phone Number" />
//           <input onChange={(event) => { latitudeChange(event.target.value) }} type="text" placeholder="Hometown" />
//           <input class="favorite styled"
//             type="button"
//             value="Submit"
//             onClick={() => {
//               console.group('editinfo submit clicked')
//               postEditInfo({
//                 username: usernameState,
//                 email: emailState,
//                 cell: cellState,
//                 hometown: hometownState
//               });

//             }} />
//         </div>
//       </div>


//       //Div for adding dog profile

//       let addDogDiv = <div id="sc-edprofile">
//         <h1>Add A Dog</h1>
//         <div class="sc-container">
//           <input onChange={(event) => { dogNameChange(event.target.value) }} type="text" placeholder="Name" />
//           <input onChange={(event) => { dogBreedChange(event.target.value) }} type="text" placeholder="Breed" />
//           <input onChange={(event) => { dogAgeChange(event.target.value) }} type="text" placeholder="Age" />
//           <input onChange={(event) => { dogWeightChange(event.target.value) }} type="text" placeholder="Weight" />
//           <input onChange={(event) => { dogFixedChange(event.target.value) }} type="text" placeholder="Fixed" />
//           <input onChange={(event) => { dogDescriptionChange(event.target.value) }} type="text" placeholder="Description" />
//           <input onChange={(event) => { dogImageUrlChange(event.target.value) }} type="text" placeholder="Image URL" />
//           <input class="favorite styled"
//             type="button"
//             value="Submit"
//             onClick={() => {
//               console.group('editinfo submit clicked')
//               postDogInfo({
//                 username: usernameState,
//                 email: emailState,
//                 cell: cellState,
//                 hometown: hometownState
//               });

//             }} />
//         </div>
//       </div>

//     }
//   }


//   if (users === '') {
//     return (
//       <div>
//         <div>User is not signed in</div>
//         <button onClick={() => {

//         }}>Test!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</button>
//       </div>
//     )
//   } if (user) {

//     return (
//       <div id='profilePage'>


//         <div id='userEdit'>
//           <button onClick={() => {
//             console.log(userDogs);
//             editChange(!editUserbuttonClicked)
//           }}>Edit Profile</button>
//         </div>



//         <div class='profileContainer'>
//           <h1>{`${username}'s Profile Inforamtion`}</h1>
//           <div class='profileInfo'>{`Username: ${username}`}</div>
//           <div class='profileInfo'>{`Email: ${email}`}</div>
//           <div class='profileInfo'>{`Cell Phone Number: ${cell}`}</div>
//           <div class='profileInfo'>{`Hometown: ${homeTown}`}</div>

//         </div>



//         <div id='divEditClicked'>
//           {editUserbuttonClicked ? editDiv : <div></div>}
//         </div>

//         <button onClick={() => { addDogChange(!addDogState) }}>Add Dog</button>


//         <div id='divAddDogClicked'>
//           {addDogState ? addDogDiv : <div></div>}
//         </div>


//         {/* LIST OF OWNERS DOGS  */}
//         <h1>{`${username}'s dogs`}</h1>

//         <div>
//           {userDogs.map((dog) => {
//             return <Friends id={dog.id} dog_name={dog_name} breed={dog.breed} weight={dog.weight} age={dog.age} fixed={dog.fixed} description={dog.description} image={dog.image} id_user={dog.id_user} />
//           })}
//         </div>

//         {/* return <div className="userDogDiv">
//           <h2>{dog.name}</h2>
//           <img src={dog.image}></img>
//           <Link to="/dogProfile"><button onClick={() => {
//             setDog(dog);
//           }}>{`Go to ${dog.name}'s profile!!!?`}</button></Link>

//       })} */}
//       </div>
//     );





//   }

// };

// export default MyProfile;