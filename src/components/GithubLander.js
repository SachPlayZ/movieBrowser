import React from "react";
import Hero from "./Hero";

const GithubLander = () => {
    return (
        <>
          <Hero text="Welcome to 3Movies" />
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 my-5">
                <p className="lead">
                  This is a temporary Github Landing Fix, Please use the Search bar to discover movies.
                </p>
              </div>
    
            </div>
          </div>
        </>
      );
}
export default GithubLander;