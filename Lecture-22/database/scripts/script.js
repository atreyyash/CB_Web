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

    static getOnePost(id) {
        return new Promise((resolve, reject) => {
            fs.readFile(
                filePath,
                {
                    encoding: 'utf-8'
                },
                (err, data) => {
                    if (err) return reject(err);
                    data = JSON.parse(data);
                    data = data.filter(d => d.id == id);
                    if (data.length == 0) return reject("Item not Found");
                    resolve(data[0]);
                }
            );
        })
    }

    static updatePost(post) {
        return new Promise((resolve, reject) => {
            let { id } = post;
            fs.readFile(
                filePath,
                {
                    encoding: 'utf-8'
                },
                (err, data) => {
                    if (err) return reject(err);
                    data = JSON.parse(data);
                    let newData = [];
                    data.forEach(d => {
                        if (d.id == id) {
                            newData.push(post);
                        }
                        else newData.push(d);
                    });
                    console.log(newData);
                    fs.writeFile(
                        filePath,
                        JSON.stringify(newData),
                        (err) => {
                            if (err) return reject(err);
                            resolve(newData);
                        }
                    );
                }
            );
        });
    }
}

module.exports = Posts;