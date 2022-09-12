showAll()
function displayPost(data) {
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
        content += "<a href='#' onclick='displayDetails("+data[i].id+")'>" + data[i].title + "</a>"
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
        content +=  " <button onclick='displayDetails("+data[i].id+")' type = 'button' class = 'btn btn-primary' > Apply Now </button>"
        content += "</div>"
        content += "</div>"
        content += "</div>"
    }
    document.getElementById("test").innerHTML = content
}

function showAll() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/posts",
        success: function (data) {
            displayPost(data);
        }
    })
}

function displayDetails(id) {
    localStorage.setItem("postsId",id)
    window.location.href = "jd.html";
}


