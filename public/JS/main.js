const btn = document.querySelector('button');

btn.addEventListener('click', (event)=>{
    event.stopPropagation();
    
    console.log("Button Clicked");
    alert("Congratulations!! Template Setup is done.")
});
