import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FES from "../assets/FES.svg";

export default function Nav({ user, loading, register, signIn, logOut }) {

  useEffect(() => {
        console.log(loading);
      }, [loading]);

  return (
    <nav>
      <div className="nav__row">
        <div className="nav__img--wrapper">
          <FontAwesomeIcon icon="fa-bars" className="nav__bars" />
          <img src={FES} alt="" className="logo" />
        </div>
        <div className="login__info">
          {loading ? (
            JSON.stringify(user) === "{}" ? (
              <>
                <button className="nav__btn btn__purple" onClick={register}>
                  Register
                </button>
                <button className="nav__btn" onClick={signIn}>
                  Log In
                </button>
              </>
            ) : (
              <>
                <button className="account__icon" onClick={logOut}>
                  {JSON.stringify(user.email[0])[1].toUpperCase()}
                </button>
              </>
            )
          ) : (
            <>
              <div className="skeleton__nav--btn">E</div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
