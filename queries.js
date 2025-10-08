
// ================================================
// 🧩 TASK 2: BASIC CRUD OPERATIONS
// ================================================

// 1️⃣ Find all books in a specific genre
db.books.find({ genre: "Fiction" });

// 2️⃣ Find books published after a certain year
db.books.find({ published_year: { $gt: 2010 } });

// 3️⃣ Find books by a specific author
db.books.find({ author: "Ngũgĩ wa Thiong'o" });

// 4️⃣ Update the price of a specific book
db.books.updateOne(
  { title: "The Alchemist" },
  { $set: { price: 1600 } }
);

// 5️⃣ Delete a book by its title
db.books.deleteOne({ title: "Coming to Birth" });


// ================================================
// 🧠 TASK 3: ADVANCED QUERIES
// ================================================

// 1️⃣ Find books that are both in stock and published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } });

// 2️⃣ Projection: return only title, author, and price
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 });

// 3️⃣ Sort by price ascending
db.books.find().sort({ price: 1 });

// 4️⃣ Sort by price descending
db.books.find().sort({ price: -1 });

// 5️⃣ Pagination — 5 books per page (page 1 example)
db.books.find().limit(5);

// 6️⃣ Pagination — page 2 (skip first 5)
db.books.find().skip(5).limit(5);


// ================================================
// 📊 TASK 4: AGGREGATION PIPELINES
// ================================================

// 1️⃣ Average price of books by genre
db.books.aggregate([
  { $group: { _id: "$genre", averagePrice: { $avg: "$price" } } },
  { $sort: { averagePrice: -1 } }
]);

// 2️⃣ Author with the most books
db.books.aggregate([
  { $group: { _id: "$author", totalBooks: { $sum: 1 } } },
  { $sort: { totalBooks: -1 } },
  { $limit: 1 }
]);

// 3️⃣ Group books by publication decade and count them
db.books.aggregate([
  {
    $group: {
      _id: { $floor: { $divide: ["$published_year", 10] } },
      totalBooks: { $sum: 1 }
    }
  },
  {
    $project: {
      decade: { $multiply: ["$_id", 10] },
      totalBooks: 1,
      _id: 0
    }
  },
  { $sort: { decade: 1 } }
]);


// ================================================
// ⚡ TASK 5: INDEXING
// ================================================

// 1️⃣ Create index on title field
db.books.createIndex({ title: 1 });

// 2️⃣ Create compound index on author and published_year
db.books.createIndex({ author: 1, published_year: -1 });

// 3️⃣ Use explain() to show query performance improvement
db.books.find({ title: "The River Between" }).explain("executionStats");
