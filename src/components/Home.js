import React from "react";
import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero text="Welcome to 3Movies" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, impedit laudantium? Fugit sequi maxime corrupti ipsum id? Doloribus voluptates maxime, illum veniam labore corrupti debitis excepturi, sequi a nesciunt laudantium?
            </p>
          </div>

        </div>
      </div>
    </>
  );
};
export default Home;
