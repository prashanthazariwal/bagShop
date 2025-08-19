const express = require('express');
const app = express();
const ownerRoutes = require('./routes/ownerRoutes');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

const cookieParser = require('cookie-parser');
const path = require('path');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');


app.use('/owner', ownerRoutes);
app.use('/user', userRoutes);   
app.use('/product', productRoutes);



app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});