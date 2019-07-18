import React from 'react';
import families from '../../data.json';
import UserSelfCard from './UserSelfCard';

const UserCard = ({ user }) => {

  // let [width, setWidth] = React.useState(document.body.clientWidth);

  // React.useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     setWidth(document.body.clientWidth);
  //   });
  // }, [document.body.clientWidth]);
  return (
    <div>
      <UserSelfCard user={user} />

      <div style={{ backgroundColor: 'lightcyan', width: "25%", margin: 16, padding: 16, borderRadius: 15, marginRight: "auto", marginLeft: "auto" }}>
        <h4 style={{ margin: 0 }}> Married to </h4>
        <a style={{ margin: 0, marginTop: 8 }} href={user.marriedTo} >{user.marriedTo} </a>
      </div>


      <div style={{ backgroundColor: 'lightcyan', width: "25%", margin: 16, padding: 16, borderRadius: 15, marginRight: "auto", marginLeft: "auto" }}>
        <h4 style={{ margin: 0 }}> Children </h4>
        <div style={{ flexDirection: "column" , display : "flex" }}>
          {user.children.map(id => <a href={`#${id}`}> {id} </a>)}
        </div>
      </div>

    </div>
  )
};

export default UserCard;
