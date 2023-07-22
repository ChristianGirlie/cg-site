const btnSec = document.querySelector(".btn-sect"); 
const readMoreBtn = document.querySelector(".read-more-btn"); 
const aboutMain = document.querySelector(".about-main"); 

readMoreBtn.addEventListener("click", function(){
    btnSec.style.display = "none";

    // Make the actual about us paragraphs appear
    aboutMain.style.height = "100%"; 
    aboutMain.style.overflow = "auto";
})