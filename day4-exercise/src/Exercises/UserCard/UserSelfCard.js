import React from 'react';

const UserSelfCard = ({ user }) => {
  console.log(user)
  return (
    <div style = {{paddingTop : 16}}> 
     <div style = {{backgroundColor : 'lightcyan' , width : "25%" , minWidth : 250, padding: 16, borderRadius : 15, marginRight : "auto", marginLeft : "auto" }} > 
          <div style = {{flexDirection : "row", display : "flex", alignItems:'center'}}>
              <img src = {user.image} style = {{width : 75 , height : 75, borderRadius : 50}}/>

              <div style={{marginLeft: 8}}>
                <h4 style = {{margin : 0}}> {user.name} </h4>
                <h4 style = {{margin : 0, marginTop: 8}}> {user.surName} </h4>
              </div>
          </div>

          <div style = {{marginTop: 8}}>
      <span> {user.gender}.{user.age} </span> 
          </div>
    </div>
    </div> 
  );
};
export default UserSelfCard;
