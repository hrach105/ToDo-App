$(document).ready(function () {
    $(".txtb").on("keyup",function (e) {

        if(e.keyCode == 13 && $(".txtb").val() != "") {
            let task = $("<div class='task'></div>").text($(".txtb").val())

            let del = $("<i class='fas fa-trash-alt'></i>").click(function () {
                let p = $(this).parent()
                p.fadeOut(function () {
                    p.remove()
                })
            })

            let check = $('<i class="fas fa-check"></i>').click(function () {
                let p = $(this).parent()
                p.fadeOut(function () {
                    $(".comp").append(p)
                    p.fadeIn()
                })
                $(this).remove()
            })

            task.append(del, check)
            $(".notcomp").append(task)
            $(".txtb").val("")
        }

    })
})

