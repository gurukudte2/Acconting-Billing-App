//LOGIN-REGISTER ANIMATION
var button = document.getElementsByClassName("toggle-btn");
var login = button[0];
var register = button[1];
var loginpage = document.getElementById("login");
var registerpage = document.getElementById("register");
var foranimation = document.getElementById("btn");
// loginpage.style.opacity = "0";
// console.log(loginpage.style.opacity)
register.addEventListener("click", function(){
    
    loginpage.style.display = "none";
    registerpage.style.display = "block";
    btn.style.translation = ".5s";
    foranimation.style.margin ='0 0 0 90px';
    foranimation.style.width = "121px"

});
login.addEventListener("click", function(){
    
    loginpage.style.display = "block";
    registerpage.style.display = "none";
    btn.style.translation = ".5s";
    foranimation.style.margin ='0 0 0 0px';
    foranimation.style.width = "110px"

});

