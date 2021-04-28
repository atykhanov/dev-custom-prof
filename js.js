jQuery(document).ready(function(){
    var typed = new Typed('.first', {
            strings: [' Front end Developer','SDU Student','Future Programmer'],
            typeSpeed: 40 , backSpeed : 30,loop: true,
            smartBackspace: true // Default value
      });
});

function popup(){
    var btn =  document.getElementById("btn").innerHTML;
    if(btn=="Contact"){
        document.querySelector(".popup").style.display = "flex";
         $(".popup").animate({opacity : "1"},"slow");
         
    }else{
        logout();
    }
 }
 function close_popup(){
     document.querySelector(".popup").style.display = "none";
     $(".popup").animate({opacity : "0"},"slow");
     
 }
 
 function login(name){
     document.querySelector(".user_profile").style.display = "inline";
     document.getElementById("user_name").innerHTML = "";
     document.getElementById("username").innerHTML = "asdasd" ;
     close_popup();
 
 }
 