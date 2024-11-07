import React, { useState } from "react";


export interface User {
  id?: string;
  name: string;
  img: string;
  pizzaToppings: [];
}

export interface Topping {
  id?: string;
  name: string;
  img: string;
}

export interface PropsUser {
  users: User[];
  addTopping: (newtopping : Topping) => void


}

export const DispleyUsers = (props: PropsUser) => {
  // const [user, setuser] = useState<User>();
  // const [flag, setFlag] = useState(false);

  return (
    <div className="card-list">
      {props.users.map((user) => (
        <div key={user.id} className="card">
          <h3>UserName : {user.name} </h3>
          <img src={user.img} alt="img dog" />
          <h3 >העדפות : {user.pizzaToppings.map((t) => (
            <button onClick={() => props.addTopping(t)}>{t.name}</button>
          ))}</h3>
          
        </div>
      ))}
    </div>
  );
};
