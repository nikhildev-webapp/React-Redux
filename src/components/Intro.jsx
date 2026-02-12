import React from "react";

const Intro = () => {
  return (
    <>
      <div className="container text-white flex flex-col justify-between min-h-screen">
        <div className="mx-8">
          <p>
            <strong>React:</strong> React is a JavaScript library used for
            building single-page applications.
          </p>
          <p>
            <strong>Components:</strong> Components are independent and reusable
            bits of code.
          </p>
          <p>
            <strong>JSX:</strong> JSX is a syntax extension that allows you to
            write HTML-like code within JavaScript.
          </p>
        </div>
      </div>
    </>
  );
};

export default Intro;
