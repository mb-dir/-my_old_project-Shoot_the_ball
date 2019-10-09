const Shooter = function(){
    this.gameScreen = document.querySelector('.game-screen');
    this.ball = document.createElement('div');
    this.btnStart = document.querySelector('#start');
    this.btnStop = document.querySelector('#stop');
    this.cross = document.querySelector('.crosshair');
    this.fallenBalls = 0;
    this.shootDownBalls = 0;

    this.init();
}
Shooter.prototype.init = function(){
    this.crosshair();
    this.addBalls();
}

//Crosshair
Shooter.prototype.crosshair = function(){

    this.gameScreen.addEventListener('mousemove', (e)=>{
        const positionX = e.pageX - this.gameScreen.offsetLeft - (this.cross.offsetWidth / 2);
        const positionY = e.pageY - this.gameScreen.offsetTop - (this.cross.offsetHeight / 2);

        this.cross.style.setProperty('transform', `translate(${positionX}px, ${positionY}px)`);
    });
}


//Add moving balls

Shooter.prototype.addBalls = function(){
    this.ball.classList.add('ball');
    this.ball.style.setProperty('transform', `translateY(-${this.cross.offsetHeight * 2}px)`);

    const fallenBalls = document.querySelector('#fallenBalls');
    

    
    setInterval(()=>{
        this.gameScreen.appendChild(this.ball);
        let ballRespX = Math.random();
        //Ball never will apear pose game screen
        if (ballRespX > 0.92) {
            ballRespX -= 0.09;
        }
        this.ball.style.setProperty('transform', `translateX(${this.gameScreen.offsetWidth * ballRespX}px)`);
        
        
        this.ballMove(ballRespX)
        this.fallenBalls += 1;
        
        //After every 'resp' of ball cout fallenBalls+=1
        fallenBalls.innerHTML = this.fallenBalls;

    },1000)
    this.hitBall();
}
//Move ball

Shooter.prototype.ballMove = function (ballRespX) {
    this.ball.animate([
        // keyframes
        { 
            transform: `translate(${this.gameScreen.offsetWidth * ballRespX}px, -${this.cross.offsetHeight * 2}px)`
        },
        { 
            transform: `translate(${this.gameScreen.offsetWidth * ballRespX}px, ${this.gameScreen.offsetHeight}px)`
        }
    ], {
        // timing options
        duration: 1000,
        iterations: 1,

    });
}

//Method responsible for behavior of application when we try to shoot the ball
Shooter.prototype.hitBall = function(){

    const shootDownBalls = document.querySelector('#shootDownBalls');

    this.ball.addEventListener('click', ()=>{
        this.ball.parentElement.removeChild(this.ball);
        
        this.shootDownBalls +=1;
        shootDownBalls.innerHTML = this.shootDownBalls;
    });
}
export default Shooter; 