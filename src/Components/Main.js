import react from "react";
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
          <h2>Find your book</h2>
          <div className="search">
            <input type="text" placeholder="Search for books" />
            <button>
              <i class="fas fa-search"></i>
            </button>
          </div>
          <img src="./images/bg2.png" alt="img" />
        </div>
      </div>

      <div className="container"></div>
    </>
  );
};

export default Main;
