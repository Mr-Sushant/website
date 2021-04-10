document.addEventListener('DOMContentLoaded', ()=>
{
    var result=document.querySelector('#mem-result');
    var score=0;
    const cards=[
        {
            name:'1',
            image:'download.jpg'
        },
        {
            name:'2',
            image:'download2.jpg'
        },
        {
            name:'3',
            image:'download3.jpg'
        },
        {
            name:'4',
            image:'download4.jpg'
        },
        {
            name:'5',
            image:'download5.jpg'
        },
        {
            name:'6',
            image:'download6.jpg'
        },
        {
            name:'1',
            image:'download.jpg'
        },
        {
            name:'2',
            image:'download2.jpg'
        },
        {
            name:'3',
            image:'download3.jpg'
        },
        {
            name:'4',
            image:'download4.jpg'
        },
        {
            name:'5',
            image:'download5.jpg'
        },
        {
            name:'6',
            image:'download6.jpg'
        },

    ];
    cards.sort(()=>0.5-Math.random());
    var cardsChosen=[];
    var cardsChosenId=[];
    const grid=document.querySelector('.mem-grid');
    function createBoard(){
        for(let i=0;i<cards.length;i++)
        {
            console.log(i);
            var card=document.createElement('img');
            card.setAttribute('src','top.jpg');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flip);
            grid.appendChild(card);
        }
    }
    

    function flip(){
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cards[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cards[cardId].image);
        
        if(cardsChosen.length===2)
        {
            grid.style.pointerEvents="none";
            setTimeout(checkformatch, 500);
        }
            
        

    }

    function checkformatch()
    {
        
        var cardT=document.querySelectorAll('img');
        const o1=cardsChosenId[0];
        const o2=cardsChosenId[1];
        if(cardsChosen[0]===cardsChosen[1])
        {
            
            cardT[o1].style.pointerEvents="none";
            cardT[o2].style.pointerEvents="none";
            cardT[o1].setAttribute('src', 'done.jpg');
            cardT[o2].setAttribute('src', 'done.jpg');
            score+=10;
            result.innerHTML=score;
            if(score===60)
                alert("won!!");
            
        }
        else{
            cardT[o1].setAttribute('src', 'top.jpg');
            cardT[o2].setAttribute('src', 'top.jpg');
        }
        cardsChosen=[];
        cardsChosenId=[];
        grid.style.pointerEvents="auto";
    }
createBoard();
    
})