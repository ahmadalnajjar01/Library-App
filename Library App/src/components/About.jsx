import React from "react";
import { Book, Users, Target, Award, ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Story
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Empowering readers and learners through technology and community
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Welcome to the Library App! We are dedicated to providing a
                seamless experience for book lovers. Our mission is to make it
                easy for you to discover, explore, and manage your favorite
                books.
              </p>
              <p className="text-lg text-gray-600">
                Whether you're a fan of classic literature, modern fiction, or
                technical guides, our app has something for everyone. Join us in
                building a community of readers and learners.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-indigo-50 p-6 rounded-lg">
                <Book className="w-10 h-10 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Digital Library</h3>
                <p className="text-gray-600">
                  Access thousands of books anytime, anywhere
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <Users className="w-10 h-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-gray-600">
                  Connect with fellow book enthusiasts
                </p>
              </div>
              <div className="bg-pink-50 p-6 rounded-lg">
                <Target className="w-10 h-10 text-pink-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Personalized</h3>
                <p className="text-gray-600">
                  Tailored recommendations just for you
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <Award className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Quality</h3>
                <p className="text-gray-600">
                  Curated content and verified reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                10K+
              </div>
              <div className="text-gray-600">Active Readers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                50K+
              </div>
              <div className="text-gray-600">Digital Books</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">1M+</div>
              <div className="text-gray-600">Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">4.8</div>
              <div className="text-gray-600">User Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Accessibility</h3>
              <p className="text-gray-600">
                Making literature accessible to everyone, everywhere, at any
                time.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600">
                Continuously improving our platform with cutting-edge
                technology.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Community</h3>
              <p className="text-gray-600">
                Fostering a vibrant community of book lovers and learners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join Our Reading Community
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Start your reading journey today and discover a world of knowledge
            at your fingertips.
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors inline-flex items-center">
            Get Started
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
