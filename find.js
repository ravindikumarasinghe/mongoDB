const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

// view all the products using console as a array
// use asynchronous function 
async function findAllProducts(){
    try{
        const database = client.db('shopDB');
        const product = database.collection('Products');

        const result = await product.find();
        await result.forEach(console.dir);
    } finally {
        client.close();
    }
}


// call findAllProducts() function
// catch() gives the error if throws and error
findAllProducts().catch(console.dir);