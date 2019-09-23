function AssetsManager(){
    this.aCarregar = 0;
    this.carregadas = 0;
    this.assets = {};
}
AssetsManager.prototype.loadImage = function(key, url){
    console.log(`Carregando imagem ${url}...`)
    this.aCarregar++;
    var imagem = new Image();
    console.log(`Imagem ${key}: ${url} carregada.`);
    imagem.src = url;
    var that= this;
    this.assets[key] = imagem;
    imagem.addEventListener("load",function(){
        console.log(`Imagem ${that.aCarregar}/${that.carregadas} ${key}: ${url} carregada.`);
        that.carregadas++;
    });
}
AssetsManager.prototype.img = function(key){
    return this.assets[key];
}
AssetsManager.prototype.draw
AssetsManager.prototype.progresso = function(){
    if(this.aCarregar != 0){
        return this.carregadas/this.aCarregar*100.0;
    }
}