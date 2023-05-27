const { ObjectId } = require("mongodb");
const { getdb } = require("../database/database");
const collectionName = 'posts';

class Posts{
    constructor(title, imageUrl, desc) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.desc = desc;
    }
    
    save() {
        return getdb().collection(collectionName)
            .insertOne(this);
    }

    static getPosts() {
        return new Promise(async (resolve, reject) => {
            try {
                let data = await getdb().collection(collectionName).find({}).toArray();
                console.log(data);
                resolve(data);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    static deletepost(id) {
        return new Promise(async (resolve, reject) => {
            let db = getdb().collection(collectionName);
            try {
                await db.deleteOne({ _id: new ObjectId(id) });
                let data = await db.find({}).toArray();
                resolve(data);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    static getPost(id) {
        return new Promise(async (resolve, reject) => {
            let db = getdb().collection(collectionName);
            try {
                let data = await db.findOne({ _id: new ObjectId(id) });
                resolve(data);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    static updatepost(newPost) {
        const { id, title, imageUrl, desc } = newPost;
        return new Promise(async (resolve, reject) => {
            let db = getdb().collection(collectionName);
            try {
                await db.updateOne({ _id: new ObjectId(id) }, {
                    $set: {
                        title,
                        imageUrl,
                        desc
                    }
                });
                resolve("Updated Successfully");
            }
            catch (err) {
                reject(err);
            }
        })
    }
}

module.exports = Posts;