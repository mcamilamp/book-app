import React from "react";

const Card = ({ book }) => {
  console.log(book);
  return (
    <>
      {book.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
        let title = item.volumeInfo.title;
        if (thumbnail != undefined && amount != undefined) {
          return (
            <>
              <div className="card">
                <img src={thumbnail} alt="book" />
                <div className="bottom">
                  <h3 className="title">{title}</h3>
                  <p className="amount">&#8377; {amount}</p>
                </div>
              </div>
            </>
          );
        }
      })}
    </>
  );
};

export default Card;
