function Explosion(params = { }){
    exemplo = {
        x: 0,
        y: 0,
        frame: 0,
        w: 2,
        h:2,
        props:{
            
        }
    }
    Object.assign(this, exemplo, params);
}
//Explosion.prototype = new Explosion();

//Explosion.prototype.prototype = Object.create(Sprite);
//Explosion.prototype.constructor = Explosion();
Explosion.prototype.mover = function (dt){
    this.frame += 26*dt;
    if(Math.floor(this.frame)>16){
        ///this.frame = 0;
        this.morto = true;
    }
}
Explosion.prototype.desenhar = function (){
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.strokeRect(-this.w/2, -this.h/2, this.w, this.h);
    ctx.rotate(this.a+ Math.PI/2);
    var F = Math.floor(this.frame);
    ctx.drawImage(
        this.scene.assets.img("explosion"),
        (F%4)*64,
        Math.Floor(F/4)*64,
        64,
        64,
        -this.w/2,
        -this.h/2,
        this.w,
        this.h,
    );
    ctx.restore();
}
Explosion.prototype.comportar = function(){

}
Explosion.prototype.colidiuCom = function(){
    return false;
}