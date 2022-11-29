const username = document.getElementById("username_login");
const form = document.getElementById("form_login")

function loginFunction(username) {
    if (username === undefined) {
        return undefined
    }
    else {
        fetch ("http://127.0.0.1:5000/check_user/" + username, {
            method: "GET",
            headers:{'content-type': 'application/json'},
            mode: 'no-cors'
        })
        .then(function (response) {
            if (response.status === 200) {
                localStorage.setItem ("username", username)
                window.location.replace("http://127.0.0.1:5000/homepage")
            } else {
                window.location.replace("http://127.0.0.1:5000/not_found")
            }
        })
        return true
    }
};

// function isLogin() {
//     const user = localStorage.getItem("username")
//     if (user === null) {
//         return false 
//     } else {
//         return true
//     }
// }

form.addEventListener("submit", function(event) {
    loginFunction(username.value)
    event.preventDefault()
})

