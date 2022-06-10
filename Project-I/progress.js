const progress=document.getElementById('progress')
const prev=document.getElementById('prev')
const next=document.getElementById('next')
const circl=document.querySelectorAll('.circle')
console.log(circl)
let currentActive=1
next.addEventListener('click', () => {
    currentActive++
    if(currentActive > circl.length){
        currentActive=circl.length
    }
    console.log(currentActive)
    update()
})
prev.addEventListener('click', () => {
    currentActive--
    if(currentActive < 1){
        currentActive=1
    }
    console.log(currentActive)
    update()
})
function update(){
    circl.forEach((circle,idx)=>{
        if(idx <currentActive){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })
    const actives=document.querySelectorAll('.active')
    progress.style.width=((actives.length-1)/(circl.length-1)*100) + "%"

    if(currentActive===1){
        prev.disabled=true
    }else if(currentActive === circl.length){
        next.disabled=true
    }else{
        prev.disabled=false
        next.disabled=false
    }
}