function AssetsManager(){
    this.aCarregar = 0;
    this.carregadas = 0;
    this.assets = {};
}
AssetsManager.prototype.load = function(key, url){
    console.log(`Carregando imagem ${url}...`)
    this.aCarregar++;
    var imagem = new image();
    console.log(`Imagem ${key}: ${url} carregada.`);
    imagem.scr = url;
    this.assets[key] = imagem;
    imagem.addEventListen("load",function(){
        this.carregadas++;
    });
}