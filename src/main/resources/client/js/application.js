function createApplication() {
    let form = new FormData();
    let fullName = $('#fullName').val()
    let address = $('#address').val()
    let telephone = $('#telephone').val()
    let email = $('#email').val()
    let image1 = $('#file')[0].files[0];
    let business = {
        fullName: fullName,
        address: address,
        telephone : telephone,
        email: email,
    }
    form.append("file", image1)
    form.append("applicationForm", new Blob([JSON.stringify(business)], {type: "application/json"}))

    $.ajax({
        type: "POST",
        contentType: false,
        processData: false,
        url: "http://localhost:8080/applications",
        data: form,
        success: function (){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Thành công :D',
                showConfirmButton: false,
                timer: 1500
            })
            document.getElementById("fullName").value = ""
            document.getElementById("address").value = ""
            document.getElementById("email").value = ""
            document.getElementById("telephone").value = ""
            document.getElementById("test").style.display = "none"
        }

    })
    event.preventDefault()
}
