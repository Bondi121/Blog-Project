const identity = document.getElementById("identity");
const create_post = document.getElementById("create_post_id");
const profile_id = document.getElementById("profile_id");
const registration_id = document.getElementById("registration_id")
const login_id = document.getElementById("login_id")

function changeIdentity() {
    if (localStorage.getItem("username")) {
        identity.textContent = localStorage.getItem("username")
    } else {
        identity.textContent = "Anonymous"
    }
} 

function enablePost() {
    if (localStorage.getItem("username") === null) {
        create_post.style.display = "none"
    }
}

function enableProfile() {
    if (localStorage.getItem("username") === null) {
        profile_id.style.display = "none"
    } else {
        profile_id.href = "/profile/" + localStorage.getItem("username")
    }
}

function disableLogin () {
    if (localStorage.getItem("username")) {
        registration_id.style.display = "none"
        login_id.style.display = "none"
    }
}



changeIdentity();
enablePost();
enableProfile()
disableLogin();
// loginFunction(username.value);



