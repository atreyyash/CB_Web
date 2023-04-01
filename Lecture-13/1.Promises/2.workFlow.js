function download(url) {
    return new Promise((resolve, reject) => {
        if (url.split('.').pop() != 'mp4') return reject("Sahi file bhej be");
        
        console.log("Download Start");
        setTimeout(() => {
            console.log("Download ho gayi");
            resolve(url.split('/').pop());
        }, 3000);
    })
}

function compress(file) {
    return new Promise((resolve, reject) => {
        console.log("Compression Starts");
        setTimeout(() => {
            let cFile = file.split('.')[0] + '.zip';
            console.log("compression Completed", cFile);
            resolve(url.split('/')[0]);
        }, 3000);
    })
}

function upload(file) {
    return new Promise((resolve, reject) => {
        console.log("Uploading Starts");
        setTimeout(() => {
            let newUrl = 'http://anotherMovie.com/' + file;
            console.log("Uploading file", newUrl);
            resolve(newUrl);
        }, 3000);
    })
}

// download('http://movies.com/singham.com').then((file) => {
//     console.log("Downloaded movie", file);
//     compress(file).then((compressedFile) => {
//         console.log("Compressed File ", compressedFile);
//     })
// }).catch(err=>console.log(err));

download('http://movies.com/singham.mp4')
    .then(compress)
    .then(upload)
    .then(() => {
        console.log("All Done!");
    })
    .catch(() => {
        console.log(err);
    })