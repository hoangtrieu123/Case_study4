showAll1()

function createPost() {
    let title = $('#title').val()
    let salary = $('#salary').val()
    let benefits = $('#benefits').val()
    let description = $('#description').val()
    let language = $('#language').val()
    let skill = $('#skill').val()
    let address = $('#jobProvince').val()

    let post = {
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
            'Accept': 'application/json', 'Content-Type': 'application/json'
        }, type: "POST",
        url: "http://localhost:8080/posts",
        data: JSON.stringify(post),
        success: function () {
            Swal.fire({
                position: 'center', icon: 'success', title: 'Thành công :D', showConfirmButton: false, timer: 1500
            })
            // document.getElementById("title").value = ""
            // document.getElementById("salary").value = ""
            // document.getElementById("benefits").value = ""
            // document.getElementById("description").value = ""
            // document.getElementById("language").value = ""
            // document.getElementById("skill").value = ""
            // document.getElementById("address").value = ""
            setTimeout(function() {
                window.location.href = "display-post.html";
            }, 1500);
        }
    })
    event.preventDefault()
}

// function showAll() {
//     $.ajax({
//         type: "GET",
//         url: "http://localhost:8080/posts",
//         success: function (data) {
//             displayPost(data);
//         }
//     })
// }

function displayPost1(data) {
    let content = ""
    for (let i = 0; i < data.length; i++) {
        content += "<div class='job pagi'>"
        content += "<div class='job-content'>"
        content += "<div class='job-logo'>"
        content += "<a href='#'>"
        content += "<img src='../static/" + data[i].business.imageUrl + "' class='job-logo-ima' alt='job-logo'>"
        content += "</a>"
        content += "</div>"
        content += "<div class='job-desc'>"
        content += "<div class='job-title'>"
        content += "<a href='jd.html'>" + data[i].title + "</a>"
        content += "</div>"
        content += "<div class='job-company'>"
        content += "<a href='#'>" + data[i].business.nameBusiness + "</a> | <a href='#' class='job-address'><i class='fa fa-map-marker' aria-hidden='true'></i>" + data[i].address + "</a>"
        content += "</div>"
        content += "<div class='job-inf'>"
        content += "<div class='job-main-skill'>"
        content += "<i class='fa fa-code' aria-hidden='true'></i><a href='#'>" + data[i].language + "</a>"
        content += "</div>"
        content += "<div id='salary' class='job-salary'>"
        content += "<i class='fa fa-money' aria-hidden='true'></i>"
        content += "<span class='salary-min'>" + data[i].salary + "<em class='salary-unit'> VND</em></span>"
        content += "</div>"
        content += "</div>"
        content += "</div>"
        content += "<div class='wrap-btn-appl'>"
        content += "<button onclick='edit(" + data[i].id + ")'>Chỉnh/Sửa bài đăng</button>"
        content += "<button onclick='delete1(" + data[i].id + ")'>Xóa</button>"
        content += "</div>"
        content += "</div>"
        content += "</div>"
    }
    document.getElementById("test1").innerHTML = content
}


function showAll1() {
    let id = localStorage.getItem("Id")
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/posts/business/" + id,
        success: function (data) {
            displayPost1(data);
        }
    })
}

// function displayPost(data) {
//     let content = ""
//     for (let i = 0; i < data.length; i++) {
//         content += "<div class='job pagi'>"
//         content += "<div class='job-content'>"
//         content += "<div class='job-logo'>"
//         content += "<a href='#'>"
//         content += "<img src='../static/" + data[i].business.imageUrl + "' class='job-logo-ima' alt='job-logo'>"
//         content += "</a>"
//         content += "</div>"
//         content += "<div class='job-desc'>"
//         content += "<div class='job-title'>"
//         content += "<p id='id' >"+data[i].id + "</p>"
//         content += "</div>"
//         content += "<div class='job-title'>"
//         content += "<a  href='jd.html' onclick='displayDetails()'>" + data[i].title + "</a>"
//         content += "</div>"
//         content += "<div class='job-company'>"
//         content += "<a href='#'>" + data[i].business.nameBusiness + "</a> | <a href='#' class='job-address'><i class='fa fa-map-marker' aria-hidden='true'></i>" + data[i].address + "</a>"
//         content += "</div>"
//         content += "<div class='job-inf'>"
//         content += "<div class='job-main-skill'>"
//         content += "<i class='fa fa-code' aria-hidden='true'></i><a href='#'>" + data[i].language + "</a>"
//         content += "</div>"
//         content += "<div id='salary' class='job-salary'>"
//         content += "<i class='fa fa-money' aria-hidden='true'></i>"
//         content += "<span class='salary-min'>" + data[i].salary + "<em class='salary-unit'> VND</em></span>"
//         content += "</div>"
//         content += "</div>"
//         content += "</div>"
//         content += "<div class='wrap-btn-appl'>"
//         content += "<a href='applicationForm.html' class='btn btn-appl'>Apply Now</a>"
//         content += "</div>"
//         content += "</div>"
//         content += "</div>"
//     }
//     document.getElementById("test").innerHTML = content
// }


function search() {
    let name = $('#search').val()
    console.log(name)
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/posts/search/" + name,
        success: function (data) {
            console.log(data)
            displayPost(data)
        }
    })
    event.preventDefault()
}


let idJD

function edit(id) {

    localStorage.setItem("editid",id)
    // $.ajax({
    //     type: "GET",
    //     url: "http://localhost:8080/posts/" + id,
    //     success: function (data) {
    //         idJD = data.id
    //         document.getElementById("title").value = data.title
    //         document.getElementById("salary").value = data.salary
    //         document.getElementById("benefits").value = data.benefits
    //         document.getElementById("description").value = data.description
    //         document.getElementById("language").value = data.language
    //         document.getElementById("skill").value = data.skill
    //         document.getElementById("address").value = data.address
    //         document.getElementById("button").setAttribute("onclick", "editPost()")
    //     }
    //
    // })
    window.location.href = "edit-post.html";
}

function editPost() {
    let title = $('#title').val()
    let salary = $('#salary').val()
    let benefits = $('#benefits').val()
    let description = $('#description').val()
    let language = $('#language').val()
    let skill = $('#skill').val()
    let address = $('#address').val()
    let post = {
        id: idJD,
        title: title,
        salary: salary,
        benefits: benefits,
        description: description,
        language: language,
        skill: skill,
        address: address,
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "PUT",
        url: "/http://localhost:8080/posts",
        data: JSON.stringify(post),
    })
    event.preventDefault()

}

function delete1(id) {
    let iddelete=id
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "DELETE",
        url: "http://localhost:8080/posts/" + iddelete,
        success: showAll
    })
}

