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


export default Shooter; 