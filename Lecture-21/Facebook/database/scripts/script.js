const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'data', 'posts.json');

class Posts{
    static addposts(post) {
        return new Promise((resolve, reject) => {
            fs.readFile(
                filePath,
                {
                    encoding: 'utf-8'
                },
                (err, data) => {
                    if (err) return reject(err);
                    data = JSON.parse(data);
                    data.push(post);
                    fs.writeFile(
                        filePath,
                        JSON.stringify(data),
                        (err) => {
                            if (err) return reject(err);
                            resolve(data);
                        }
                    );
                }
            );
        })
    }

    static getposts() {
        return new Promise((resolve, reject) => {  
            fs.readFile(
                filePath,
                {
                    encoding: 'utf-8'
                },
                (err, data) => {
                    if (err) return reject(err);
                    resolve(data);
                }
            );
        })
    }

    static deletepost(id) {
        return new Promise((resolve, reject) => {
            fs.readFile(
                filePath,
                {
                    encoding: 'utf-8'
                },
                (err, data) => {
                    if (err) return reject(err);
                    data = JSON.parse(data);
                    data = data.filter(d => d.id != id);
                    fs.writeFile(
                        filePath,
                        JSON.stringify(data),
                        (err) => {
                            if (err) return reject(err);
                            resolve(data);
                        }
                    );
                }
            );
        })
    }
}

module.exports = Posts;