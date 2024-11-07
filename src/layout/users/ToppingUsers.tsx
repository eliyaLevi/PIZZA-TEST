import React, { useState, useEffect } from "react";
import { v4 } from "uuid";
import { DispleyUsers } from "./DispleyUsers/DispleyUsers";

export interface Topping {
  id?: string;
  name: string;
  img: string;
}

export interface Props {
  toppingsUsers: Topping[];
}

export const ToppingUsers = (props: Props) => {
  const [flag, setFlag] = useState(false);
  return (
    <>
      <h3>Our order</h3>
      <div className="card-list" >
        {props.toppingsUsers.map((t) => (
          <div key={t.id} className="card" style={{backgroundColor: props.toppingsUsers.length === 5 ? "red" :  "burlywood"}}>
            <h3>UserName : {t.name} </h3>
            <img src={t.img} alt="img " />
          </div>
        ))}
      </div>
      { }
      
    </>
  );
};
