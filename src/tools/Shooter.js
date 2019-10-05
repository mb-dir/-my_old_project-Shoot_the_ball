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
    this.crosshair();//uwzględnij w commicie!
}

//Crosshair
Shooter.prototype.crosshair = function(){
    this.gameScreen.addEventListener('mousemove', ()=>{
        
    });
}


export default Shooter; 