import ball from '../assets/img/ball.svg';
const Shooter = function(){
}

Shooter.prototype.test = function (){
    const img = new Image();
    img.src = ball;
    document.body.appendChild(img);
}



export default Shooter; 