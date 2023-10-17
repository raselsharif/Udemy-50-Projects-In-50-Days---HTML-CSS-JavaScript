const counts = document.querySelectorAll(".count")
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const progressBar = document.getElementById("progress")

let progress = 1;
next.addEventListener("click",()=>{
    progress++;
    if(progress> counts.length){
        progress=counts.length;
    }
    console.log(progress);
    update()
})
prev.addEventListener("click",()=>{
    progress--;
    if(progress < 1){
        progress=1;
    }
    console.log(progress);
    update()

})


const update = ()=>{
    counts.forEach((count, idx) =>{
        if(idx< progress){
            count.classList.add("active")
        }else{
            count.classList.remove("active")

        }
    })
    const actives = document.querySelectorAll(".active")
    progressBar.style.width = (actives.length-1)/(counts.length-1)*100 +"%";
   
    if(progress===1){
        prev.disabled = true;
        
    }else if(progress === counts.length){
        next.disabled = true;

    }
    else{
        prev.disabled = false;
        next.disabled = false;
    }
}