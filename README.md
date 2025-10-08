PLP Bookstore — MongoDB Week 1 Project
🎯 Objective

This project demonstrates MongoDB basics — creating a database, performing CRUD operations, running advanced queries, using aggregation pipelines, and optimizing performance with indexes.

⚙️ Setup

Install MongoDB locally or use MongoDB Atlas.

Open Mongo Shell (mongosh) and run:

use plp_bookstore
db.createCollection("books")


Load the scripts:

load("insert_books.js")   # Inserts sample  books
load("queries.js")        # Runs CRUD and aggregation queries

📂 Files
File	Description
insert_books.js	Inserts 10  books documents
queries.js	Contains all required MongoDB queries
screenshot.png	Shows database and sample data
README.md	Explains setup and usage



🧩 Features

CRUD operations (insert, find, update, delete)

Advanced queries (filter, projection, sort, pagination)

Aggregation pipelines (average price, top authors, decade grouping)

Indexing and performance analysis with explain()



👨‍💻 Author

Samson Kalume — PLP MongoDB Week 1 Project

