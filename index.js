console.log('Server is starting...')
// kieranpeel // p4cgqja2BdW8pSWG
const express = require('express')
const mongoose = require('mongoose');
const app = express()
const productRoute = require('./routes/product.route');

// This is the middleware that allows us to parse the request body
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use("/api/products", productRoute);

// Connect to MongoDB
mongoose.connect('mongodb+srv://kieranpeel:p4cgqja2BdW8pSWG@backendtest.3etqmzq.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendTest').then(()=>{
    console.log('Connected to MongoDB')
    app.listen(3001, () => {
        console.log('Server is running on port 3001...')
    })
 }).catch(() => {
    console.log('Connection failed')
});
