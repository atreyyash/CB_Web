$(() => {
    let commentForm = $('.commentForm');
    let comment = $('#comment');

    function showComments(data) {
        let commentSection = $('.commentSection');
        commentSection.text('');
        data.forEach((d) => {
            let div = $('<div>');
            div.text(d);
            commentSection.append(div);
        })
    }

    commentForm.on('submit', (ev) => {
        ev.preventDefault();
        console.log("Button Dabaya");
        // console.log(comment.val());
        let postId = $('#postId').attr('value');
        // console.log(postId);
        $.post(
            '/post/addcomment',
            {
                id: postId,
                comment: comment.val()
            }
        )
        .done((data) => {
            console.log(data);
            showComments(data);
        })
        .fail((err) => {
            alert("Failed to Add Comment to Post");
        })
    });
})