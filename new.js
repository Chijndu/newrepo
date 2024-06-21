function Menu(){
    let x=document.getElementById("botten");
    let y=document.getElementById("navLinks");

    x.addEventListener("click", function(){
            y.style.display="block"
        })
    window.addEventListener("scroll", function(){
        if (document.body.clientWidth <= 700){
        y.style.display="none"
        }
    });    
};
Menu();
