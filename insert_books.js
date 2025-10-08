// ================================================
// insert_books.js
// ================================================
// 🎯 Purpose: Create MongoDB database `plp_bookstore`
// and insert 10 sample book documents into `books` collection.
// ------------------------------------------------

// Switch to (or create) the plp_bookstore database
use("plp_bookstore");

// Insert multiple book documents
db.books.insertMany([
  {
    title: "The River Between",
    author: "Ngũgĩ wa Thiong'o",
    genre: "Fiction",
    published_year: 1965,
    price: 1200,
    in_stock: true,
    pages: 230,
    publisher: "East African Educational Publishers"
  },
  {
    title: "A Grain of Wheat",
    author: "Ngũgĩ wa Thiong'o",
    genre: "Historical Fiction",
    published_year: 1967,
    price: 1500,
    in_stock: true,
    pages: 300,
    publisher: "Heinemann"
  },
  {
    title: "Petals of Blood",
    author: "Ngũgĩ wa Thiong'o",
    genre: "Political Fiction",
    published_year: 1977,
    price: 1700,
    in_stock: false,
    pages: 400,
    publisher: "Heinemann"
  },
  {
    title: "Coming to Birth",
    author: "Marge Piercy",
    genre: "Drama",
    published_year: 1986,
    price: 1000,
    in_stock: true,
    pages: 250,
    publisher: "Feminist Press"
  },
  {
    title: "The Perfect Nine",
    author: "Ngũgĩ wa Thiong'o",
    genre: "Epic Poetry",
    published_year: 2020,
    price: 2000,
    in_stock: true,
    pages: 250,
    publisher: "The New Press"
  },
  {
    title: "Half of a Yellow Sun",
    author: "Chimamanda Ngozi Adichie",
    genre: "Historical Fiction",
    published_year: 2006,
    price: 1800,
    in_stock: true,
    pages: 500,
    publisher: "Knopf"
  },
  {
    title: "Americanah",
    author: "Chimamanda Ngozi Adichie",
    genre: "Fiction",
    published_year: 2013,
    price: 1900,
    in_stock: true,
    pages: 588,
    publisher: "Knopf"
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Adventure",
    published_year: 1988,
    price: 1400,
    in_stock: true,
    pages: 208,
    publisher: "HarperCollins"
  },
  {
    title: "Born a Crime",
    author: "Trevor Noah",
    genre: "Biography",
    published_year: 2016,
    price: 2100,
    in_stock: true,
    pages: 304,
    publisher: "Spiegel & Grau"
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    genre: "Non-Fiction",
    published_year: 2011,
    price: 2500,
    in_stock: true,
    pages: 498,
    publisher: "Harvill Secker"
  }
]);

