const welcome = document.getElementById('welcome');
const buttonMore = document.getElementById('more');
const hiddenContainer = document.getElementById('hiddenContainer');
const menu = document.getElementById("mobile");
const close = document.getElementById("close");

// Change Text
welcome.addEventListener( 'click', () => {
    if (welcome.textContent === '歡迎來到營養食光'){
        welcome.textContent = 'Have a Good Time!'; 
    } else{
        welcome.textContent = '歡迎來到營養食光';
    }
})




// Close menu 

close.addEventListener( 'click', () => {
    if(menu.style.display === "block"){
        menu.style.display = "none";
    }else {
        menu.style.display = "block";
      }
})




// Open menu function
function myFunction() {

      if (menu.style.display === "block") {
        menu.style.display = "none";
      } else {
        menu.style.display = "block";
      }
}





//  Show More Content Boxes

buttonMore.addEventListener( 'click', () => {
    if ( hiddenContainer.style.display === "none"){
        hiddenContainer.style.display = "flex";
    } else{
        hiddenContainer.style.display = "none"; 
    }
})




