// rulediv hide and show function
let score= JSON.parse(localStorage.getItem('score')) || {"user":0 , "computer":0}

function hiderule(){
    let rulecontainer=document.getElementById('rcontainer')
    rulecontainer.classList.toggle('xyz')
}

let rock=0
let paper=1
let scissor=2

function updateandDisplayScore(){

        let userscore= document.getElementById('userscore')
        let comscore= document.getElementById('comscore')
        userscore.innerText=score.user
        comscore.innerText=score.computer
}
updateandDisplayScore()


// scores reset function
function resetgame(){
    
    userscore.innerText=0
    comscore.innerText=0
    localStorage.setItem('score', JSON.stringify({"user":0 , "computer":0}));
    score = {"user": 0, "computer": 0}
  
}


let collection = document.getElementsByClassName('gamenode')
console.log(score,'score')



for(let x in collection){
    let b=collection[x]
    console.log(collection[x]);
    b.addEventListener('click',()=>{
   
        winnerorlosser(collection[x].id)
    })
}


function winnerorlosser(user){
    let computer=Math.floor(Math.random()*3)
    console.log(computer)
    window.localStorage.setItem('usercomdata',JSON.stringify({"user":user,'computer':computer}))
   
    if((user==0 && computer==1) || (user==2 && computer==0) || (user==1 && computer==2)){
        
        window.localStorage.setItem('wins',JSON.stringify({"win":'COMPUTER WIN'}))
        score.computer++
    }else if((user==0 && computer==2) || (user==1 && computer==0) || (user==2 && computer==1)){
       
        window.localStorage.setItem('wins',JSON.stringify({"win":'YOU WIN'}))
        score.user++
    }else if((user==0 && computer==0) || (user==1 && computer==1) ||(user==2 && computer==2)){
     
        window.localStorage.setItem('wins',JSON.stringify({"win":'MATCH TIE'}))
    }


        localStorage.setItem("score",JSON.stringify(score))


   

}

