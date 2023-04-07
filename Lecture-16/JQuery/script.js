// JQUERY = $

// $(() => {
    // this function is window.onload()
// })

// jis bhi element(HTML element) par jquery run karna chahte ho ussko jaquery ke wrapper ke andar daalna padega.

// jquery(element).add();
// OR
// $(element).add();

const h1 = $('h1');
// console.log(li);
console.log(h1);

// Add an element to the list
const movieList = $('.movieList');
// console.log(movieList);

let li1 = $('<li>');
li1.text('Superman');
movieList.append(li1);
li1.attr('class', 'item');

// above can also be written as
// jis element par kaam ho raha hai toh vahi return hota hai isiliye hum chaining use kar sakte hai
movieList.append($('<li>').text('Dark Knight').attr('class', 'item'));

let li = $('.item');
// UPDATION
li.each(function () {
    // console.log(this);
    $(this).text($(this).text() + '-Movie')
})