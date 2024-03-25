









let data=JSON.parse(localStorage.getItem('usercomdata'))
let wins=JSON.parse(localStorage.getItem('wins'))
let score = JSON.parse(localStorage.getItem('score'))
console.log(data.user)
console.log(wins);
let bgone = document.getElementById('firstcontainer');
let bgtwo = document.getElementById('secondcontainer');


function updateandDisplayScore(){

    let userscore= document.getElementById('userscore')
    let comscore= document.getElementById('comscore')
    userscore.innerText=score.user
    comscore.innerText=score.computer
}
updateandDisplayScore()

function resetgame(){

    userscore.innerText=0
    comscore.innerText=0
    localStorage.setItem('score', JSON.stringify({"user":0 , "computer":0}));
    score = {"user": 0, "computer": 0}
   
}

let userfirstcircle=document.getElementById('userfirstcircle');
let usermiddlecircle=document.getElementById('usermiddlecircle');
let comfirstcircle=document.getElementById('comfirstcircle')
let comsecondcircle=document.getElementById('comsecondcircle')
let firstimage=document.getElementById('first_image')
let secondimage=document.getElementById('second_image')
let whowin=document.getElementById('who')
whowin.innerText=wins.win.toUpperCase()


if(wins.win=='YOU WIN'){
    userfirstcircle.classList.add('firstcircle')
    usermiddlecircle.classList.add('middlecircle')
    bgone.style.border='30px solid #289A27'

   

}else if(wins.win=='COMPUTER WIN'){
    comfirstcircle.classList.add('firstcircle')
    comsecondcircle.classList.add('middlecircle')
    bgtwo.style.border='30px solid #289A27'
}


    if(data.user==0){
        firstimage.src="./rock.png" 
        bgone.style.backgroundColor='blue'
    }else if(data.user==1){
        firstimage.src='./paper.png'
        bgone.style.backgroundColor='orangered'
    }else if(data.user==2){
        firstimage.src='./scissor.png'
        bgone.style.background='violet'
    }

    if(data.computer==0){
        secondimage.src="./rock.png" 
        bgtwo.style.backgroundColor='blue' 
    }else if(data.computer==1){
        secondimage.src='./paper.png'
        bgtwo.style.backgroundColor='orangered'
    }else if(data.computer==2){
        secondimage.src='./scissor.png'
        bgtwo.style.background='violet'
    }


    function hiderule(){
        let rulecontainer=document.getElementById('rcontainer')
        rulecontainer.classList.toggle('xyz')
    }
    

    
