"use client";

import React from "react";
import "./notfound.scss";
import { useRouter } from "next/navigation";

export default function NotFound() {
  return (
    <>
      <div className="mars"></div>
      <img src="https://assets.codepen.io/1538474/404.svg" className="logo-404" alt="404" />
      <img src="https://assets.codepen.io/1538474/meteor.svg" className="meteor" alt="meteor" />
      <p className="title">Oh no!!</p>
      <p className="subtitle">
        {" You re either misspelling the URL "}
        <br />
        {" or requesting a page that's no longer here."}
      </p>
      <div className="w-full flex justify-center items-center">
        <BackButton />
      </div>
      <img src="https://assets.codepen.io/1538474/astronaut.svg" className="astronaut" alt="astronaut" />
      <img src="https://assets.codepen.io/1538474/spaceship.svg" className="spaceship" alt="spaceship" />
    </>
  );
}

function BackButton() {
  const route = useRouter();
  return (
    <button className="btn-back  flex justify-center items-center" type="button" onClick={() => route.back()}>
      Back to previous page
    </button>
  );
}
