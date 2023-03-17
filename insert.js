// connect MongoDB
const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function insertInventory(){
    try {
        const database = client.db("shopDB");
        const result = await database.collection("Inventory").insertMany([
            {
                item: "Book1",
                qty: 25,
                tags: ["blank", "red"],
                dimensions: [14, 21],
            },
            {
                item: "Book2",
                qty: 25,
                tags: ["blank", "yellow"],
                dimensions: [14, 51],
            },
            {
                item: "Book3",
                qty: 20,
                tags: ["blank", "white"],
                dimensions: [14, 31],
            },
            {
                item: "Book4",
                qty: 50,
                tags: ["blank", "green"],
                dimensions: [14, 41],
            },
            {
                item: "Book5",
                qty: 10,
                tags: ["blank", "blue"],
                dimensions: [14, 61],
            },
        ]);
        console.log(result);
    } finally {
        await client.close();
    }
}


async function insertProducts(){
    try {
        const database = client.db("shopDB");
        const result = await database.collection("Products").insertMany([
            {
                code: "Book001",
                name: "Count Monte Cristo",
                price: 325.00,
                qty: 25,
                promotion: false,
                isNew: true,
                rating: [
                    {user: "user1", rate: 2},
                    {user: "user3", rate: 2},
                ],
            },
            {
                code: "Book002",
                name: "The River",
                price: 1250.00,
                qty: 25,
                promotion: false,
                isNew: false,
                rating: [
                    {user: "user2", rate: 2},
                    {user: "user5", rate: 4},
                ],
            },
            {
                code: "Book003",
                name: "Sherlock Holmes",
                price: 400.00,
                qty: 100,
                promotion: false,
                isNew: true,
                rating: [
                    {user: "user1", rate: 3},
                    {user: "user2", rate: 5},
                ],
            },
            {
                code: "Book004",
                name: "Nancy Drew",
                price: 745.00,
                qty: 50,
                promotion: false,
                isNew: true,
                rating: [
                    {user: "user4", rate: 5},
                    {user: "user5", rate: 5},
                ],
            },
            {
                code: "Book005",
                name: "Totto Chan",
                price: 500.00,
                qty: 40,
                promotion: false,
                isNew: true,
                rating: [
                    {user: "user2", rate: 1},
                    {user: "user5", rate: 2},
                ],
            },

        ]);
        console.log(result);
    } finally {
        await client.close();
    }
}








// call functions
insertInventory().catch(console.dir);
insertProducts().catch(console.dir);



