$('body')
    .append(
        $('<div>')
            .addClass('container')
            .append(
                $('<h1>')
                    .text('Todo List')
            )
            .append(
                $('<input>')
                    .attr('type', 'text')
                    .addClass('inp')
            )
            .append(
                $('<button>')
                    .addClass('btn')
                    .text('Click Me')
                    .click(() => {
                            $('.taskList')
                                .append(
                                    $('<li>')
                                        .addClass('item')
                                        .append(
                                            $('<div>')
                                                .addClass('taskInput')
                                                .append(
                                                    $('<input>')
                                                        .attr('type', 'checkbox')
                                                        .addClass('checkbox')
                                                )
                                                .append(
                                                    $('<span>')
                                                        .addClass('task')
                                                        .text($('.inp').val())
                                                )
                                        )
                                        .append(
                                            $('<div>')
                                                .addClass('buttons')
                                                .append(
                                                    $('<span>')
                                                        .addClass('upArrow')
                                                        .text('↑')
                                                        .click(
                                                            function() {
                                                                let grandParent = $(this).parent().parent()
                                                                console.log(grandParent)
                                                                $(grandParent).insertBefore(grandParent.prev())
                                                            }
                                                        )
                                                )
                                                .append(
                                                    $('<span>')
                                                        .addClass('downArrow')
                                                        .text('↓')
                                                        .click(function () {
                                                            let Grandparent = $(this).parent().parent()
                                                            console.log(Grandparent)
                                                            $(Grandparent).insertAfter(Grandparent.next())
                                                        })
                                                )
                                                .append(
                                                    $('<span>')
                                                        .addClass('deleteTask')
                                                        .text('🗑️')
                                                        .click(function () {
                                                            $(this).parent().parent().remove();
                                                        })
                                                )
                                        )
                                )
                        }
                    )
            )
            .append(
                $('<div>')
                    .addClass('taskList')
            )
)
    