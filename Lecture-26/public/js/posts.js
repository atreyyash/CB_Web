$(() => {
    let postList = $('.postsList');

    updatePost = (data) => {
        postList.text('');
        let str = '';
        data.forEach(d => {
            str += `
            <li class="card">
                <img id=${d._id} class="imageUrl" src=${d.imageUrl}><br>
                <div class="title">${d.title}</div>
                <div class="desc">${d.desc}</div>
                <button class="deleteBtn" id=${d._id}>🗑️</button></button>
                <button class="updateBtn" id=${d._id}>📝</button>
            </li>
            `
        });
        postList.html(str);
    }

    postList.on("click", (ev) => {
        let attribute = ev.target.getAttribute('class');
        let id = ev.target.getAttribute('id');
        // console.log(attribute);
        // console.log(id);
        if (attribute == 'deleteBtn') {
            $.post('/post/deletepost', {
                id
            }).done((data) => {
                updatePost(data);
            }).fail(err => {
                alert("Failed to delete post");
            })
        }
    })
})