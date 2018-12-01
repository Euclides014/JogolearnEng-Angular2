export class Quadrado{
    constructor(
        public cheio: boolean,
        public UrlQuadradovazio: string = '/assets/quadrado_vazio.png',
        public UrlQuadradocheio: string = '/assets/quadrado_cheio.png'
    ){}

    public exibeQuadrado(): string {
        if (this.cheio){
            return this.UrlQuadradovazio
        }else{
            return this.UrlQuadradocheio
        }

    }
}