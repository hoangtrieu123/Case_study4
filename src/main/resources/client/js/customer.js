function CreateCustomer() {
    let name = $('#name').val()
    let password = $('#password').val()
    let nameCustomer = $('#nameCustomer').val()
    let telephone = $('#telephone').val()
    let email = $('#email').val()
    let address = $('#address').val()
    let customer = {
        name: name,
        password: password,
        nameCustomer: nameCustomer,
        telephone: telephone,
        email: email,
        address: address,
    }

    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        url: "http://localhost:8080/customers",
        data: JSON.stringify(customer),
        success: function (){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Thành công :D',
                showConfirmButton: false,
                timer: 1000
            })
            document.getElementById("name").value = ""
            document.getElementById("password").value = ""
            document.getElementById("nameCustomer").value = ""
            document.getElementById("telephone").value = ""
            document.getElementById("email").value = ""
            document.getElementById("address").value = ""
            setTimeout(function() {
                window.location.href = "login.html";
            }, 1500);
        }
    })
    event.preventDefault()
}

