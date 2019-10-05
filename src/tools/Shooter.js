import ball from '../assets/img/ball.svg';
const Shooter = function(){
    this.gameScreen = document.querySelector('.game-screen');
    this.ball = ball;
    this.btnStart = document.querySelector('#start');
    this.btnStop = document.querySelector('#stop');
    this.score = document.querySelector('#score');
}




export default Shooter; 