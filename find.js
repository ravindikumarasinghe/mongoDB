const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

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

findAllProducts().catch(console.dir);