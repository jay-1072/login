document.querySelector("#myForm").addEventListener("submit", function(e){
    // Prevent the form from submitting
    e.preventDefault();
    // login() will be called when the form is submitted
    login();
});

const orig_email = "jaykoshti@gmail.com";
const orig_pass = "Jay123Koshti";

function login() {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;

    if(orig_email===email && orig_pass===pass) {
        window.location.href = "https://www.geeksforgeeks.org/";
    }
    else {
        alert("Invalid email or password");
    }
}