const square=document.querySelectorAll('.sq');
const mole=document.querySelectorAll('.mole');
var score =0;

const time=document.querySelector('#rem-time');
const result=document.querySelector('#mem-result');
let hit;
let timeinms=1000; 
let countdown=60;
//dec var to inc difficulty
function randomSquare(){
   
    square.forEach(element => {
        element.classList.remove('mole');
        
        
    });
    let randomPosition=square[Math.floor(Math.random() * 9)];
    
    randomPosition.classList.add('mole');
    hit=randomPosition.id;
    console.log(hit);
    
}

square.forEach(id=>{
    console.log(id.id);
    id.addEventListener('mouseup', ()=>{
        if(id.id===hit)
        {
            score+=10;
            result.textContent=score;
        }
    })
});

function moveMole(){
    let timerId=setInterval(randomSquare, timeinms);
    
}

moveMole();
function countTime() {
    countdown--;
    time.textContent=countdown;
    if(countdown===0)
    {
        clearInterval(timerId2);
        alert('time up! your score is '+score);
    }
    
}
let timerId2=setInterval(countTime, 1000);