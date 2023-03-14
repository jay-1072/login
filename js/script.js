document.querySelector("#myForm").addEventListener("submit", function(e){
    // Prevent the form from submitting
    e.preventDefault();
    // login() will be called when the form is submitted
    login();
});

const orig_email = "jaykoshti@gmail.com";
const orig_pass = "Jay123@Koshti";

const emailRegex = /^[a-z_]{3,}@[a-z]{3,}[.]{1}[a-z.]{2,6}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-z0-9!@#$%^&*]{8,}$/;

function login() {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;

    if(!emailRegex.test(email)) {
        document.getElementById('emailerror').innerHTML = "** email is Invalid";
        if(!passwordRegex.test(pass)) {
            document.getElementById('passerror').innerHTML = "** password is Invalid";
        }
        return false;
    }
    else if(!passwordRegex.test(pass)) {
        document.getElementById('passerror').innerHTML = "** password is Invalid";
        return false;
    }
    else if(orig_email===email && orig_pass===pass) {
        window.open("/practical/HTML_CSS_Practical/index.html");
    }
    else {
        alert("Invalid email or password");
    }
}