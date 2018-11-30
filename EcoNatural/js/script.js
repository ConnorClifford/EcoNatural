  function myFunction() { //makes nav bar change layout at designated media query size
      var x = document.getElementById("myTopnav");
      var icon = document.getElementById("icon");
      if (x.className === "topnav") {
          x.className += " responsive";
          icon.src = "images/close.png";
      } else {
          x.className = "topnav";
          icon.src = "images/menu.png";
      }
  }

function timer(event){
  event.preventDefault();
  setTimeout(popUp, 3000);//after 30 seconds, executes popUp function

  function popUp(){
    //alert("popUp() is running");
    document.getElementById("popup").style.display = "block";
  }
  var close = document.getElementById("close");
  close.onclick = function() {
    document.getElementById("popup").style.display = "none";
  }
}

window.addEventListener('load', timer, false);
