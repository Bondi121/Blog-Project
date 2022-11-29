const user_update = document.getElementById("user_update");
const delete_user_button = document.getElementById("delete_user");

function enableUpdate() {
    if (localStorage.getItem("username") === null) {
        user_update.style.display = "none"
    } else {
        user_update.href = "/update_user/" + localStorage.getItem("username")
    }
}

delete_user_button.addEventListener("click", function(){
    localStorage.removeItem("username")
}
) 

enableUpdate();
