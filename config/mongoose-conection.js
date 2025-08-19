const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bagshop').then(() => {
  console.log('MongoDB connected successfully');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
}
);

module.exports = mongoose.connection;
// This code establishes a connection to a MongoDB database named 'bagshop' using Mongoose.
// It logs a success message if the connection is successful, or an error message if the connection fails.  
// The connection is then exported for use in other parts of the application.