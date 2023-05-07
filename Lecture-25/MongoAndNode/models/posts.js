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
}

module.exports = Posts;