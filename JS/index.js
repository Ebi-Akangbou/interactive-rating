// Preventing button to submit
function preventSubmit(){
    const button = document.getElementsByTagName("button");
    button[0].setAttribute("type", "button");
    button[1].setAttribute("type", "button");
    button[2].setAttribute("type", "button");
    button[3].setAttribute("type", "button");
    button[4].setAttribute("type", "button");
    button[5].setAttribute("type", "button");
    }
    preventSubmit();
    // End
    
    
    const firstBtn = document.getElementsByTagName("button")[0];
    const secondBtn = document.getElementsByTagName("button")[1];
    const thirdBtn = document.getElementsByTagName("button")[2];
    const forthBtn = document.getElementsByTagName("button")[3];
    const fifthBtn = document.getElementsByTagName("button")[4];
    const submitBtn = document.getElementsByTagName("button")[5];
    document.querySelector(".form__button").textContent="SUBMIT"
    
    // || Commencement of changes of button to the second webpage
    submitBtn.addEventListener("click", ()=>{
        document.querySelector("main img").classList.add("invisible");
        document.querySelector("main h1").classList.add("invisible");
        document.querySelector("main p").classList.add("invisible");
        document.querySelector("main form").classList.add("invisible");
        document.querySelector("main section").classList.add("visible");
        document.querySelector("p.hero__p").innerHTML="You selected" + "&nbsp"+ " 0" +" out of 5";
    
    });
    
    
    function firstBtnChange(){    
    firstBtn.addEventListener("click", ()=>{
    firstBtn.classList.toggle("main__button");
    secondBtn.classList.remove("main__button");
    thirdBtn.classList.remove("main__button");
    forthBtn.classList.remove("main__button");
    fifthBtn.classList.remove("main__button");
    
    submitBtn.addEventListener("click", ()=>{
        document.querySelector("main img").classList.add("invisible");
        document.querySelector("main h1").classList.add("invisible");
        document.querySelector("main p").classList.add("invisible");
        document.querySelector("main form").classList.add("invisible");
        document.querySelector("main section").classList.add("visible");
        document.querySelector("p.hero__p").innerHTML="You selected" + "&nbsp"+ "1" +" out of 5";
    
    });
    
    });
    
    }
    firstBtnChange();
    
    function secondBtnChange(){ 
    secondBtn.addEventListener("click", ()=>{
    secondBtn.classList.toggle("main__button");
    firstBtn.classList.remove("main__button");
    thirdBtn.classList.remove("main__button");
    forthBtn.classList.remove("main__button");
    fifthBtn.classList.remove("main__button");
    
    submitBtn.addEventListener("click", ()=>{
        document.querySelector("main img").classList.add("invisible");
        document.querySelector("main h1").classList.add("invisible");
        document.querySelector("main p").classList.add("invisible");
        document.querySelector("main form").classList.add("invisible");
        document.querySelector("main section").classList.add("visible");
        document.querySelector("p.hero__p").innerHTML="You selected" + "&nbsp"+ "2" +" out of 5";
    
    });
    
    });
    };
    secondBtnChange();
    
    function thirdBtnChange(){ 
    thirdBtn.addEventListener("click", ()=>{
    thirdBtn.classList.toggle("main__button");
    secondBtn.classList.remove("main__button");
    firstBtn.classList.remove("main__button");
    forthBtn.classList.remove("main__button");
    fifthBtn.classList.remove("main__button");
    
    submitBtn.addEventListener("click", ()=>{
        document.querySelector("main img").classList.add("invisible");
        document.querySelector("main h1").classList.add("invisible");
        document.querySelector("main p").classList.add("invisible");
        document.querySelector("main form").classList.add("invisible");
        document.querySelector("main section").classList.add("visible");
        document.querySelector("p.hero__p").innerHTML="You selected" + "&nbsp"+ "3" +" out of 5";
    
    });
    
    });
    };
    thirdBtnChange();
    
    function forthBtnChange(){ 
    forthBtn.addEventListener("click", ()=>{
    forthBtn.classList.toggle("main__button");
    secondBtn.classList.remove("main__button");
    thirdBtn.classList.remove("main__button");
    firstBtn.classList.remove("main__button");
    fifthBtn.classList.remove("main__button");
    
    submitBtn.addEventListener("click", ()=>{
        document.querySelector("main img").classList.add("invisible");
        document.querySelector("main h1").classList.add("invisible");
        document.querySelector("main p").classList.add("invisible");
        document.querySelector("main form").classList.add("invisible");
        document.querySelector("main section").classList.add("visible");
        document.querySelector("p.hero__p").innerHTML="You selected" + "&nbsp"+ "4" +" out of 5";
    
    });
    
    });
    }
    forthBtnChange();
    
    function fifthBtnChange(){ 
    fifthBtn.addEventListener("click", ()=>{
    fifthBtn.classList.toggle("main__button");
    secondBtn.classList.remove("main__button");
    thirdBtn.classList.remove("main__button");
    firstBtn.classList.remove("main__button");
    forthBtn.classList.remove("main__button");
    submitBtn.addEventListener("click", ()=>{
        document.querySelector("main img").classList.add("invisible");
        document.querySelector("main h1").classList.add("invisible");
        document.querySelector("main p").classList.add("invisible");
        document.querySelector("main form").classList.add("invisible");
        document.querySelector("main section").classList.add("visible");
        document.querySelector("p.hero__p").innerHTML="You selected" + "&nbsp"+ "5" +" out of 5";
    
    });
    
    });
    
    }; 
    fifthBtnChange();
    
    // || END
    