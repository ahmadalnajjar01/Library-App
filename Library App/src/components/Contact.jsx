import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-700 mb-4">
        Have questions or feedback? We'd love to hear from you! Reach out to us
        using the form below or through our contact information.
      </p>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your message"
              className="w-full p-2 border rounded"
              rows="4"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Our Contact Information</h2>
        <p className="text-gray-700 mb-2">
          <strong>Email:</strong> support@libraryapp.com
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Phone:</strong> +1 (123) 456-7890
        </p>
        <p className="text-gray-700">
          <strong>Address:</strong> 123 Library Street, Book City, BC 12345
        </p>
      </div>
    </div>
  );
};

export default Contact;
