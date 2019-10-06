const Shooter = function(){
    this.gameScreen = document.querySelector('.game-screen');
    this.ball = document.createElement('div');
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
    this.ball.classList.add('ball');
    this.gameScreen.appendChild(this.ball);

    
    let ballRespX = Math.random();
    //Ball never will apear pose game screen
    if (ballRespX > 0.92){
        ballRespX -= 0.09;
    }
    console.log(ballRespX)
    this.ball.style.setProperty('transform', `translateX(${this.gameScreen.offsetWidth * ballRespX}px)`)

}

export default Shooter; 