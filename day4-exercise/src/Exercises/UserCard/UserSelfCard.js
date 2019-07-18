import React from 'react';


const UserSelfCard = ({ user }) => {
  let [width, setWidth] = React.useState(document.body.clientWidth);

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(document.body.clientWidth);
    });
  }, [document.body.clientWidth]);
  console.log(user)
  return (
    <div style={{ paddingTop: 16 }}>
      <div id={user.id} style={{ backgroundColor: 'lightcyan', width: "25%", padding: 16, borderRadius: 15, marginRight: "auto", marginLeft: "auto" }} >
        <div style={{ flexDirection: width < 700 ? 'column' : 'row', display: "flex", alignItems: 'center' }}>
          <img src={user.image} style={{ width: 75, height: 75, borderRadius: 50 }} />

          <div style={{ marginLeft: 8, textAlign: width < 700 ? 'center' : 'left' }}>
            <h4 style={{ margin: 0 }}> {user.name} </h4>
            <h4 style={{ margin: 0, marginTop: 8 }}> {user.surName} </h4>
          </div>
        </div>

        <div style={{ marginTop: 8, textAlign: width < 700 ? 'center' : 'left' }}>
          <span> {user.gender}.{user.age} </span>
        </div>
      </div>
    </div>
  );
};
export default UserSelfCard;
