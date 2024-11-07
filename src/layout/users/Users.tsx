import React, { useEffect } from "react";
import { useState } from "react";
import { v4 } from "uuid";
import { DispleyUsers } from "./DispleyUsers/DispleyUsers";
import { ToppingUsers } from "./ToppingUsers";

export interface User {
  id?: string;
  name: string;
  img: string;
  pizzaToppings: Topping[];
}

export interface Topping {
  id?: string;
  name: string;
  img: string;
}

export const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [toppingsUsers, setSToppingsUsers] = useState<Topping[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((respons) => respons.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  const addTopping = (newTopping: Topping): void => {
    if (toppingsUsers.length >= 5 || toppingsUsers.find(t =>  t.name=== newTopping.name)) return
      setSToppingsUsers([...toppingsUsers, newTopping]);
  };

  return (
    <div>
      <DispleyUsers users={users} addTopping={addTopping} />
      <ToppingUsers toppingsUsers={toppingsUsers} />
    </div>
  );
};
