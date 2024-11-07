import React, { useEffect } from "react";
import { useState } from "react";
import { v4 } from "uuid";
import { DispleyUsers } from "./DispleyUsers/DispleyUsers";
import { ToppingUsers } from "./ToppingUsers";

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

export const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [toppingsUsers, setSToppingsUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((respons) => respons.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  const addTopping = (newTopping: Topping): void => {
    if (toppingsUsers.length < 5) {
      if (toppingsUsers.find((u) => u.id === newTopping.id)) {
        console.log("קיים כבר התוספת הזאת אנה בחר משהו אחר");
      }

      setSToppingsUsers([...toppingsUsers, newTopping]);
    }
  };

  return (
    <div>
      <DispleyUsers users={users} addTopping={addTopping} />
      <ToppingUsers toppingsUsers={toppingsUsers} />
    </div>
  );
};
