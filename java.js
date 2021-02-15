

const dupa = () => { 
   const img1 = document.querySelector(".img1");
   const text = document.querySelector(".text");
   const text2 = document.querySelector('.text2');


img1.addEventListener("click", () => {
    text.classList.add("wyjazd");
    
        text2.classList.add("wjazd");
      
   
    
});
};



dupa();