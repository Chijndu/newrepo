function Menu(){
    let x=document.getElementById("botten");
    let y=document.getElementById("navLinks");

    x.addEventListener("click", function(){
        if(y.style.display===("block")){
            y.style.display="none"
        }else{
            y.style.display="block"
        }
    })

};
Menu();
