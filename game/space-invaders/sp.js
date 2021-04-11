var score =0;


const result=document.querySelector('#mem-result');
document.addEventListener('DOMContentLoaded', ()=>
{
    const grid=document.querySelector('.sp-grid');
    const squares=[];
    function createBoard(){
        for(let i=0;i<225;i++)
        {
            
            var card=document.createElement('div');            
            card.setAttribute('id', i);
            card.classList.add('normal-grid');
            
            grid.appendChild(card);
            squares.push(card);
        }
    }

    let shooterIndex=217;
    let invaderIndex=0;
    let width=15;
    let invadersTaken=[];
    let direction=1;
    let invaderId;
    
    const invaders=[];
    function generateinvaders(){
        let invaderstogenerate=Math.floor(Math.random() * 14);
       
        for (let index = 0; index < invaderstogenerate; index++) {
            let random=Math.floor(Math.random() * 15);
            //console.log(random);
            if(!invaders.some(function (el){ return el===random}))
            {
                invaders.push(random);
                squares[random].classList.add('invader');
            }
        }
    }
    
    function moveshooter(e){
        squares[shooterIndex].classList.remove('shooter');
        switch(e.keyCode)
        {
            case 37:if(shooterIndex%width!=0) shooterIndex-=1;
                break;
            case 39: if(shooterIndex%width<width-1) shooterIndex+=1;
                break;
        }
        squares[shooterIndex].classList.add('shooter');
    }
    
    function moveInvaders(){
        let l=invaders.length;
        
        console.log(invaders)
        let element;
        for (let index = 0; index < l; index++) {
            
             element = invaders[index];
            try{
            squares[element].classList.remove('invader');
            if(element+width<=224)
            {squares[element+width].classList.add('invader');
                invaders.push(element+width);
               
            }
                
        }
        catch(ex)
        {
            console.log(element);
            console.log(invaders);
        }
        invaders.splice(0, l);
        }
        
        if(invaders.length<=40)
            generateinvaders();
    }

    
    createBoard();
    squares[shooterIndex].classList.add('shooter');
    generateinvaders();
    document.addEventListener('keydown', moveshooter);
    let timerId2=setInterval(moveInvaders, 500);
})
    