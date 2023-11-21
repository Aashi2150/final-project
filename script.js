score = 0;
cross = true;

let audiogo = new Audio('gameover.mp3');
document.onkeydown=function(e){
    console.log("Key code is: ,e.keyCode")
    if(e.keyCode==38){
        person = document.querySelector('.person')
        person.classList.add('animatePerson')
        setTimeout(()=>{
            person.classList.remove('animatePerson')

        }, 700);

    }
    if(e.keyCode==39){
        person = document.querySelector('.person');
        personX = parseInt(window.getComputedStyle(person,null).getPropertyValue('left')); 
        person.style.left = personX + 114 +"px";
        }
    if(e.keyCode==37){
        person = document.querySelector('.person');
        personX = parseInt(window.getComputedStyle(person,null).getPropertyValue('left')); 
        person.style.left = (personX - 112) +"px";
        }
}
setInterval(()=>{
person = document.querySelector('.person');
gameOver = document.querySelector('.gameOver');
obstacle = document.querySelector('.obstacle');

dx = parseInt(window.getComputedStyle(person,null).getPropertyValue('left'));
dy = parseInt(window.getComputedStyle(person,null).getPropertyValue('top'));

ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

offsetX = Math.abs(dx-ox);
offsetY = Math.abs(dy-oy);
if(offsetX<73 && offsetY<52){
    gameOver.style.visibility = 'visible';
    person.remove()
    obstacle.classList.remove('obstacleAni')
    audiogo.play();
    setTimeout(()=>{
      audiogo.pause();
    },1000);
}
else if(offsetX<145 && cross){
    score+=100;
    updateScore(score);
    
    cross = false;
    setTimeout(()=>{
        cross = true;
    },1000);
    setTimeout(()=>{
    aniDur = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
    newDur = aniDur - 0.1;
    obstacle.style.animationDuration = newDur + 's';
    },500);

}


},10);
function updateScore(score){
    scoreCont.innerHTML = "Your Score : " + score
}
function startGame() {
    console.log("Game started!");
}
function restartGame() {
    console.log("restart game");
    

    startGame();
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        restartGame();
    }
});

document.addEventListener("DOMContentLoaded", startGame);



