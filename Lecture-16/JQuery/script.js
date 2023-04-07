// JQUERY = $

// $(() => {
    // this function is window.onload()
// })

// jis bhi element(HTML element) par jquery run karna chahte ho ussko jaquery ke wrapper ke andar daalna padega.

// jquery(element).add();
// OR
// $(element).add();

// class through uthane par saare elements aa jayenge aur ID se uthane par single element aayega
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

li.attr('class', 'myColor'); // This will apply to all li ( This will automatically iterate on all li's )

// li.remove(); // Saare li hat delete ho jayege


// EVENTS

$('h1').click((e => {
    console.log(e);
    let target = $(e.target);
    target.attr('class', 'myColor');
    target.addClass('myFont');

    setTimeout(() => {
        // target.removeClass('myColor');
        target.remove('.myColor', '.myFont');
    }, 3000);
}))