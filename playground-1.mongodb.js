/* global use, db */
// MongoDB Playground

// Create a noSql collection
db.createCollection("apprentices_st10477323");

// Populate (insert) a noSql collection
db.apprentices_st10477323.insertMany([
    {"Apprentice_Name": "Debbie", "Apprentice_Surname": "Theart", "Apprentice_DOB": "1980-03-17"},
    {"Apprentice_Name": "Thomas", "Apprentice_Surname": "Duncan", "Apprentice_DOB": "1976-08-12"}
]);

// Query (find) data in a noSql database
db.apprentices_st10477323.find().pretty(); // pretty print
db.apprentices_st10477323.find({"Apprentice_DOB": {"$gt": "1970-01-12"}}).pretty(); // Query all the records in the collection
