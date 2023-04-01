function downloading(url, cb) {
    console.log("Downloading Started");
    setTimeout(() => {
        let downloadedMovie = url.split('/').pop();
        console.log("Movie Donwloaded ", downloadedMovie);
        cb(downloadedMovie, uploading);
    }, 3000);
}

function compression(downloadedMovie, cb) {
    console.log("COmpression Starts");
    setTimeout(() => {
        let compressedMovie = downloadedMovie.split('.')[0];
        compressedMovie += ".zip";
        console.log("Compression Done ", compressedMovie);
        cb(compressedMovie);
    }, 3000);
}

function uploading(compressedMovie) {
    console.log("Uploading Starts");
    setTimeout(() => {
        console.log("Movie Uploaded ", compressedMovie);
    }, 3000);
}

downloading('http://movies.com/KuwaraBaap.mp4', compression);