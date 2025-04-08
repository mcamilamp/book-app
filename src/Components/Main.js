import react from "react";
import Card from "./Card";
const Main = () => {
  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            A room without books is like
            <br /> a body without a soul.
          </h1>
        </div>
        <div className="row2">
          <h2>Find Your Book</h2>
          <div className="search">
            <input type="text" placeholder="Enter Your Book Name" />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
          <img src="/images/bg2.png" alt="nose" />
        </div>
      </div>
      <div className="container">
        <Card />
      </div>
    </>
  );
};

export default Main;
