var button = document.getElementsByClassName("toggle-btn");
var login = button[0];
var register = button[1];
var loginpage = document.getElementById("login");
var registerpage = document.getElementById("register");
var foranimation = document.getElementById("btn");
// loginpage.style.opacity = "0";
// console.log(loginpage.style.opacity)
register.addEventListener("click", function(){
    
    loginpage.style.opacity = "0";
    registerpage.style.opacity = "1";
    btn.style.translation = ".5s";
    foranimation.style.margin ='0 0 0 90px';
    foranimation.style.width = "121px"

});
login.addEventListener("click", function(){
    
    loginpage.style.opacity = "1";
    registerpage.style.opacity = "0";
    btn.style.translation = ".5s";
    foranimation.style.margin ='0 0 0 0px';
    foranimation.style.width = "110px"

});


//User Auth
const users =[
    {username: 'Guru', password: 'gk111'}
]
var userName = document.getElementById("username");
var passWord = document.getElementById("password");

var submit = document.getElementsByClassName("subit-btn");
console.log(submit);
submit.addEventListener("click",function() {
    
    if (username==users.userName){
        alert("Please enter");
    }
})