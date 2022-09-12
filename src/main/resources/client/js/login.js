function login() {
    let username = $('#name').val()
    let password = $('#pass').val()
    let user = {
        username: username,
        password: password,
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        url: "http://localhost:8080/login",
        data: JSON.stringify(user),
        success: function (data) {
            if (data.role === "customer") {
                localStorage.setItem("Id", data.id)
                localStorage.setItem("Name", data.name)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Thành công :D',
                    showConfirmButton: false,
                    timer: 1000
                })
                setTimeout(function () {
                    window.location.href = "published-business.html";
                }, 1000);
            }
            if (data.role === "business") {
                localStorage.setItem("Id", data.id)
                localStorage.setItem("Name", data.name)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Thành công :D',
                    showConfirmButton: false,
                    timer: 1000
                })
                setTimeout(function () {
                    window.location.href = "display-post.html";
                }, 1000);
            }
            if (data.role === "uniq") {
                Swal.fire({
                    icon: 'error',
                    title: 'Đăng nhập thất bại :(',
                    text: 'Tài khoản hoặc mật khẩu không đúng!',
                })
                document.getElementById("name").value=""
                document.getElementById("pass").value=""
            }
        }
    })
    event.preventDefault()
}




