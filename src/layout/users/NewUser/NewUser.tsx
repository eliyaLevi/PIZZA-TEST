import React, { useState } from "react";
import style from "../../../../public/vite.svg"

interface User {
  userName: string;
  email: string;
  age: number;
  img: string;
}

export interface PropsNewUser {
  addUser: (newUser: User) => void;
}

export const NewUser = (props: PropsNewUser) => {
  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState<number>(0);
  const [img, setImg] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    props.addUser({ userName, email, age, img });

    setuserName("");
    setEmail("");
    setAge(0);
    setImg("");
  };

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <label htmlFor="UserName">User Name</label>
        <input
          id="UserName"
          type="text"
          value={userName}
          onChange={(e) => setuserName(e.target.value)}
          placeholder="userName"
        />
        <label htmlFor="Email">Email</label>
        <input
          id="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <label htmlFor="Age">Age</label>
        <input
          id="Age"
          type="number"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
          placeholder="age"
        />
        <label htmlFor="Img">Img</label>
        <input
          id="Img"
          type="text"
          value={img}
          onChange={(e) => setImg(e.target.value)}
          placeholder="img"
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
};
