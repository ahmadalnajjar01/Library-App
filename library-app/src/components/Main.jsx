import { initState } from "../data";

const Main = () => {
  return (
    <main className="p-5">
      <div className="flex flex-wrap gap-5 justify-center">
        {initState.books.map((book) => (
          <div
            key={book.id}
            className="border border-gray-200 rounded-lg p-5 w-72 shadow-lg"
          >
            <h2 className="text-xl font-bold mb-2">{book.title}</h2>
            <p className="text-gray-700">المؤلف: {book.author}</p>
            <p className="text-gray-700">الرقم الدولي: {book.isbn}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Main;
