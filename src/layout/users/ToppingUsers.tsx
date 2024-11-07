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
  return (
    <>
      <h1>רשימת המועדפים שלי</h1>
      <div className="card-list">
        {props.toppingsUsers.map((t) => (
          <div key={t.id} className="card">
            <h3>UserName : {t.name} </h3>
            <img src={t.img} alt="img dog" />
          </div>
        ))}
      </div>
    </>
  );
};
