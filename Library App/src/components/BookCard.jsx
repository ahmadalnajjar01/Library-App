import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-2">{book.title}</h2>
      <p className="text-gray-700">Author: {book.author}</p>
      <p className="text-gray-700">ISBN: {book.isbn}</p>
    </div>
  );
};

export default BookCard;
