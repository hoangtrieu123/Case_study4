edit();

function edit() {
    let editid = localStorage.getItem("editid")
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/posts/" + editid,
        success: function (data) {
            document.getElementById("title").value = data.title
            document.getElementById("salary").value = data.salary
            document.getElementById("benefits").value = data.benefits
            document.getElementById("description").value = data.description
            document.getElementById("language").value = data.language
            document.getElementById("skill").value = data.skill
            document.getElementById("button").setAttribute("onclick", "updatePost()")
        }
    })
}

function updatePost() {
    let title = $('#title').val()
    let salary = $('#salary').val()
    let benefits = $('#benefits').val()
    let description = $('#description').val()
    let language = $('#language').val()
    let skill = $('#skill').val()
    let address = $('#jobProvince').val()

    let post = {
        id: localStorage.getItem("editid"),
        title: title,
        salary: salary,
        benefits: benefits,
        description: description,
        language: language,
        skill: skill,
        address: address,
        business: {
            id: localStorage.getItem("Id"),
        }
    }

    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "PUT",
        url: "http://localhost:8080/posts/"+localStorage.getItem("editid"),
        data: JSON.stringify(post),
        success: function () {
            Swal.fire({
                position: 'center',
                icon: 'success', title: 'Thành công :D',
                showConfirmButton: false, timer: 1500,

            })
            setTimeout(function() {
                window.location.href = "display-post.html";
            }, 1500);
        }
    })
}