import react from "react";
const Modal = ({ show, item, onClose }) => {
  return (
    <div className="overlay">
      <div className="overlay-inner">
        <button className="close" onClick={onClose}></button>
        <div className="inner-box">
          <img src="/images/book.png" alt="book" />
          <div className="info">
            <h1>
              React by Example - Building Modern web applications with ReactJS
            </h1>
            <h3>Prathamesh Sonpatki</h3>

            <h4>
              Packt Publishing Ltd<span>2016-04-11</span>
            </h4>
            <br />
            <a href="#">
              <button>More</button>
            </a>
          </div>
        </div>
        <h4 className="description">
          Knoqqqqqqqqqqqqqqqqqqqqqqqqqqqq qqqqqqqe qqqqqs qq wwq aaaaaaaak plwp
          qlswksla lllm aaaaaa
        </h4>
      </div>
    </div>
  );
};

export default Modal;
