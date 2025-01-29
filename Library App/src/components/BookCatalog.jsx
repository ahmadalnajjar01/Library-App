import React, { useEffect, useState } from "react";
import firestore from "../api/firestore";

const BookCatalog = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: "", author: "", isbn: "" });
  const [editingBook, setEditingBook] = useState(null);

  const fetchBooks = async () => {
    try {
      const response = await firestore.get("/books");
      const booksData = response.data.documents
        .map((doc) => ({
          id: doc.name.split("/").pop(),
          ...doc.fields,
        }))
        .filter((book) => !book.deleted?.booleanValue);
      setBooks(booksData);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const addBook = async () => {
    try {
      await firestore.post("/books", {
        fields: {
          title: { stringValue: newBook.title },
          author: { stringValue: newBook.author },
          isbn: { stringValue: newBook.isbn },
          deleted: { booleanValue: false },
        },
      });
      setNewBook({ title: "", author: "", isbn: "" });
      fetchBooks();
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  const editBook = async (id, updatedBook) => {
    try {
      await firestore.patch(`/books/${id}`, {
        fields: {
          title: { stringValue: updatedBook.title },
          author: { stringValue: updatedBook.author },
          isbn: { stringValue: updatedBook.isbn },
          deleted: { booleanValue: updatedBook.deleted || false },
        },
      });
      setEditingBook(null);
      fetchBooks();
    } catch (error) {
      console.error("Error editing book:", error);
    }
  };

  const deleteBook = async (id) => {
    try {
      await firestore.patch(`/books/${id}`, {
        fields: {
          deleted: { booleanValue: true },
        },
      });
      fetchBooks();
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Book Catalog</h2>

      {/* Add Book Form */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Add a New Book</h3>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={newBook.title}
            onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Author"
            value={newBook.author}
            onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="ISBN"
            value={newBook.isbn}
            onChange={(e) => setNewBook({ ...newBook, isbn: e.target.value })}
            className="w-full p-2 border rounded"
          />
          <button
            onClick={addBook}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add Book
          </button>
        </div>
      </div>

      {/* Book List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <div key={book.id} className="bg-white p-6 rounded-lg shadow-lg">
            {editingBook?.id === book.id ? (
              <div>
                <input
                  type="text"
                  value={editingBook.title}
                  onChange={(e) =>
                    setEditingBook({ ...editingBook, title: e.target.value })
                  }
                  className="w-full p-2 mb-2 border rounded"
                />
                <input
                  type="text"
                  value={editingBook.author}
                  onChange={(e) =>
                    setEditingBook({ ...editingBook, author: e.target.value })
                  }
                  className="w-full p-2 mb-2 border rounded"
                />
                <input
                  type="text"
                  value={editingBook.isbn}
                  onChange={(e) =>
                    setEditingBook({ ...editingBook, isbn: e.target.value })
                  }
                  className="w-full p-2 mb-2 border rounded"
                />
                <button
                  onClick={() => editBook(book.id, editingBook)}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditingBook(null)}
                  className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 ml-2"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div>
                <h2 className="text-xl font-bold mb-2">
                  {book.title?.stringValue}
                </h2>
                <p className="text-gray-700">
                  Author: {book.author?.stringValue}
                </p>
                <p className="text-gray-700">ISBN: {book.isbn?.stringValue}</p>
                <button
                  onClick={() =>
                    setEditingBook({ id: book.id, ...book.fields })
                  }
                  className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 mt-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteBook(book.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 mt-2 ml-2"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCatalog;
