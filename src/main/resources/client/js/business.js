function createBusiness() {
    let form = new FormData();
    let username = $('#username').val()
    let password = $('#password').val()
    let telephone = $('#telephone').val()
    let nameCompany = $('#nameCompany').val()
    let descriptions = $('#descriptions').val()
    let address = $('#address').val()
    let image1 = $('#file')[0].files[0];
    let business = {
        name: username,
        password: password,
        address: address,
        telephone: telephone,
        nameBusiness: nameCompany,
        description: descriptions,
    }
    form.append("file", image1)
    form.append("business", new Blob([JSON.stringify(business)], {type: "application/json"}))

    $.ajax({
        type: "POST",
        contentType: false,
        processData: false,
        url: "http://localhost:8080/business",
        data: form,
        success: function (){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Thành công :D',
                showConfirmButton: false,
                timer: 1000
            })
            document.getElementById("username").value = ""
            document.getElementById("password").value = ""
            document.getElementById("telephone").value = ""
            document.getElementById("nameCompany").value = ""
            document.getElementById("descriptions").value = ""
            document.getElementById("address").value = ""
            document.getElementById("file").value = ""
            document.getElementById("none").style.display = "none"
            setTimeout(function() {
                window.location.href = "login.html";
            }, 1500);
        }
    })
    event.preventDefault()
}
