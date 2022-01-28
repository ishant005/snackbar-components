let bottomContainer=document.querySelector(".bottom-container");
let bottomStackedContainer=document.querySelector(".bottom-stacked-container");
let bottomMiddleContainer=document.querySelector(".bottom-middle-container");

let baseline=document.querySelector(".baseline");
let leading=document.querySelector(".leading");
let stacked=document.querySelector(".stacked");


bottomContainer.style.display="none";
bottomMiddleContainer.style.display="none";
bottomStackedContainer.style.display="none";
baseline.addEventListener("click",()=>{
    bottomContainer.style.display="block";
    bottomMiddleContainer.style.display="none";
    bottomStackedContainer.style.display="none";
});
leading.addEventListener("click",()=>{
    bottomMiddleContainer.style.display="block";
    bottomContainer.style.display="none";
    bottomStackedContainer.style.display="none";
})
stacked.addEventListener("click",()=>{
    bottomStackedContainer.style.display="block";
    bottomContainer.style.display="none";
    bottomMiddleContainer.style.display="none";
})



