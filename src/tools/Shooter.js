import ball from '../assets/img/ball.svg';
const Shooter = function(){
    this.gameScreen = document.querySelector('.game-screen');
    this.ball = ball;
    this.btnStart = document.querySelector('#start');
    this.btnStop = document.querySelector('#stop');
    this.score = document.querySelector('#score');

    this.init();
}
Shooter.prototype.init = function(){
    this.crosshair();
    this.addBalls();
}

//Crosshair
Shooter.prototype.crosshair = function(){

    const crosshair = document.querySelector('.crosshair');

    this.gameScreen.addEventListener('mousemove', (e)=>{
        const positionX = e.pageX - this.gameScreen.offsetLeft - (crosshair.offsetWidth / 2);
        const positionY = e.pageY - this.gameScreen.offsetTop - (crosshair.offsetHeight / 2);

        crosshair.style.setProperty('transform', `translate(${positionX}px, ${positionY}px)`);
    });
}


//Add moving balls

Shooter.prototype.addBalls = function(){
    const ballImg = new Image();
    ballImg.src = this.ball;
    ballImg.classList.add('ball');

    this.gameScreen.appendChild(ballImg);

    
    let ballRespX = Math.random();
    //Ball never will apear pose game screen
    if (ballRespX > 0.92){
        ballRespX -= 0.09;
    }
    console.log(ballRespX)
    ballImg.style.setProperty('transform', `translateX(${this.gameScreen.offsetWidth * ballRespX}px)`)
}

export default Shooter; 