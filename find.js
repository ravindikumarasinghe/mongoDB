const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

// // view all the products using console as a array
// // use asynchronous function 
// async function findAllProducts(){
//     try{
//         const database = client.db('shopDB');
//         const product = database.collection('Products');

//         const result = await product.find();
//         await result.forEach(console.dir);
//     } finally {
//         client.close();
//     }
// }

// // all first product in the product collection
// // use asynchronous function
// async function findFirstProduct(){
//     try{
//         const database = client.db('shopDB');
//         const first_product = database.collection('Products');

//         const first_product_result = await first_product.findOne();
//         console.log(first_product_result);

//     } finally {
//         client.close();
//     }
// }


// view all the products by its name to display in console as a array
// use asynchronous function 
async function findByName(name){
    try{
        const database = client.db('shopDB');
        const product = database.collection('Products');

        const query = {name};

        const result = await product.find(query);
        await result.forEach(console.dir);
    } finally {
        client.close();
    }
}


// // call findAllProducts() function
// // catch() gives the error if throws and error
// findAllProducts().catch(console.dir);


// findFirstProduct().catch(console.dir);

// find product by product name
// call the findByName() function
// filter product by book name - "Count Monte Cristo"
findByName("Count Monte Cristo").catch(console.dir);