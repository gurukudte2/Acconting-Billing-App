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

//data from json
// let xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange=function(){
//     if (xhttp.readyState==4 && xhttp.status==200){
//         var data = JSON.parse(xhttp.responseText);
//         alert(data.username);
//     }
//     else{
//     }
//     xhttp.open("GET",users.json,true)
//     xhttp.send();
// }


// //User 
// const users =[
//     {
//         username: "guru", 
//         password: "gk111"
//     },
//     {
//         username:"guru2",
//         password:"gk112"
//     }
// ]

// //login auth
var submit = document.getElementsByClassName("submit-btn");
var loginSubmit = submit[0];
var input = document.getElementsByClassName('input-field');
loginSubmit.addEventListener("click", function(){
    
//    alert("hi")
//     var username = input[0].value;
//     var password = input[1].value;

    let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange=function(){

        if (xhttp.readyState==4 && xhttp.status==200){
            var data = JSON.parse(xhttp.responseText);
            alert(data.username);
        }
        else{
            // alert("no server")
        }
        xhttp.open("GET","users.json",true)
        xhttp.send();
}


    // for (var i = 0; i < users.length;i++)
    // if (username == users[i].username && password == users[i].password){
    //     alert("Log In Success")
    // }
    // if (password != users[0].password){
    //     alert("wrong password")
    // }

});

// //user addition through register
// var registerSubmit = submit[1];
// registerSubmit.addEventListener("click", function(){

//     var userName = input[2].value;
//     var passWord = input[3].value;
    
//     var newUser = {};
//     var usern = userName;
//     var userp = passWord;
//     newUser[0].username = "guru3";
//     nerUser[0].password = "g111";
//     users.push(newUser);
//     alert(users)
// });