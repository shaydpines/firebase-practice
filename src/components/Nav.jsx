import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FES from "../assets/FES.svg";

export default function Nav({ user, register, signIn, logOut }) {

  return (
    <nav>
      <FontAwesomeIcon icon="fa-bars" />
      <img src={FES} alt="" className="logo" />
      <div className="login__info">
        {JSON.stringify(user) === "{}" ? (
          <>
            <button onClick={signIn}>Sign In</button>
            <button onClick={register}>Register</button>
          </>
        ) : (
          <>
          <button className="account__icon">{user.email[0]}</button>
          <button className="account__icon">{user.email[0].toUppercase()}</button>
          <button onClick={logOut}>Sign Out</button>
          </>
        )}
      </div>
    </nav>
  );
}
