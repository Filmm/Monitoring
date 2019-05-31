//Dropdown Logout
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


//Gateway  Details 
function openTab(tabName) {
  var i, x;
  x = document.getElementsByClassName("containerTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
 
  }
  document.getElementById(tabName).style.display = "block";
}


//Mobile responsive Logout
function myFunctionResponsive() {
var x = document.getElementById("myLinks");
         
if (x.style.display === "block") {
    x.style.display = "none";
  } else {
      x.style.display = "block";
  }
}


//Change images arrow on Tabs (up-down)
var images_track = 'f';
function changeIcon() {
  var images = document.getElementById('top');

  if(images_track == 'f') {
    images.src='images/icon2.png';
    images_track='t';

  }else{
    images.src='images/icon02.png';
    images_track='f';
  }
}


// Condition for display grid view and list view
var list = document.getElementsByClassName("list")
var grid = document.getElementsByClassName("grid")
var btn_grid = document.getElementsByClassName("btn_grid")
var btn_list = document.getElementsByClassName("btn_list")

// Declare a loop variable
var i;

function gridView() {
  for (i = 0; i < list.length; i++) {
 
    //condition for display image grid view and list view
    btn_grid[i].style.display = "none";
    btn_list[i].style.display = "block";

    //condition for display style grid view and list view
    list[i].style.display = "none" ;
    grid[i].style.display = "flex";

    /*  Display : none containerTab in grid view  */
    document.getElementById('b01').style.display = "none";   
    document.getElementById('b02').style.display = "none";
    document.getElementById('b03').style.display = "none";

  }
}

// List View
function listView() {
  for (i = 0; i < list.length; i++) {

     //condition for display image grid view and list view
    btn_grid[i].style.display = "block";
    btn_list[i].style.display = "none";

     //condition for display style grid view and list view
    list[i].style.display = "block" ;            
    grid[i].style.display = "none";

     /*  Display : none containerTab in List view  */
    document.getElementById('b1').style.display = "none";              
    document.getElementById('b2').style.display = "none";
    document.getElementById('b3').style.display = "none";
    
  }
}


/* Optional: Add active class to the current button */
var container = document.getElementById("btnContainer");
var btns = container.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {

var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
 });
}

  

      
  