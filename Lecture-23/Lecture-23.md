# Lecture-23

# Mongo DB

### Start MongoDB Server

```jsx
mongod --dbpath=data
```

> Then open new cmd
> 

### Open Mongo Shell

```jsx
mongosh
```

### Show All Db’s

```jsx
show dbs;
```

### Creating a new DB

```jsx
use <DBname>
// For Example : 
use products;
//To create a new DB products
```

> In Mongo, Database is called Collection
> 

> Single data is called Document
> 

### Insert an entry in DB

```jsx
db.products.insertOne({ "name": "Book", "price": 40, "desc": "This is an amazing book" })
```

### Insert many entries in DB at one time

```jsx
db.products.insertMany([
... {
...     "name": "Tab",
...     "price": "50K",
...     "desc": "This is an amazing Tablet"
... },
... {
...     "name": "Laptop",
...     "price": "90K",
...     "desc": "This is an amazing Laptop"
...
... }
... ])
```

### Find All entries

```jsx
db.products.find();
```

### Find One Entry

```jsx
db.products.findOne({name: "Book"});
```

### ForEach Loop

```jsx
db.products.find().forEach(d => printjson(d));
```

### Adding Timestamp & Date in Document

```jsx
db.products.insertOne({
...     "name": "Pen",
...     "price": "10",
...     "desc": "This is an amazing pen",
...     "date": new Date(),
...     "Time": new Timestamp()
... })
```

### Updating Document

```jsx
db.products.updateOne({name: "Sg Fold-3"}, {$set: {
...     "name": "Sg Fold-3",
...     "price": "150K",
...     "date": new Date(),
...     "Time": new Timestamp(),
...     "processor": "SD-8 gen 1"
... }});
```