let db;

let data = [
    {
        name: "Tripti",
        age: 20,
        hobbies: ["Dancing", "Eating", "Singing"]
    },
    {
        name: "Ujjwal",
        age: 19,
        hobbies: ["Badminton", "Cooking"]
    }
]

db.products.insertMany(data);

let products = [
    {
        _id: ObjectId("6450cdde02554edaac146ada"),
        name: 'Chaai',
        price: 20,
        desc: 'Sasti Chaai'
    },
    {
        _id: ObjectId("6450cdde02554edaac146adb"),
        name: 'Coffee',
        price: 30,
        desc: 'Nescafe dedo'
    },
    {
        _id: ObjectId("6450cdde02554edaac146adc"),
        name: 'Books',
        price: 120,
        desc: 'Dogglapan'
    }
]

db.users.updateOne(
    {
        name: 'Tripti'
    },
    {
        $set: {
            products: [
                ObjectId("6450cdde02554edaac146ada"),
                ObjectId("6450cdde02554edaac146adb")
            ]
        }
    }
)

db.users.updateOne(
    {
        name: 'Ujjwal'
    },
    {
        $set: {
            products: [
                ObjectId("6450cdde02554edaac146ada"),
                ObjectId("6450cdde02554edaac146adc")
            ]
        }
    }
)

// This will only give the produts of Tripti
db.users.findOne({ name: 'Tripti' }).products;

// PROJECTION: To pick the fields that we want
// db.users.find({}, PROJECTIONS); // Projection me column ke baad boolean value dete hai 1 for wanted column and 0 for not wanted column
db.users.find({}, { name: 1 }); // By default id dikhata hai
db.users.find({}, { name: 1, _id: 0 }); // In this way we can block id.

db.users.aggregate({
    $lookup:
    {
        from: "products",
        localField: "products",
        foreignField: "_id",
        as: "myProducts"
    }
});