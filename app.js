const toggleBtn = document.getElementById('check');
const price = document.querySelectorAll('.price');
const duration = document.querySelectorAll('.duration');


window.addEventListener("DOMContentLoaded", () => {
    for(let i=0; i<duration.length; i++){
        duration[i].innerText = "/month";
        toggleBtn.addEventListener("click", () => {
            if(toggleBtn.checked == true){
                duration[i].innerText = "";
                duration[i].innerText = "/year";
            }else{
                duration[i].innerText = "";
                duration[i].innerText = "/month";
            }
        })
    }
})

toggleBtn.addEventListener("click", () => {
    for(let j=0; j<price.length; j++){
        if(toggleBtn.checked == true){
            price[j].innerText *= 11;
        }
        else{
            price[j].innerText /= 11;
        }
    }
})
