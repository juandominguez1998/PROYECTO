export class Afiliado{
  static  afiliadosDelJson(obj  :any){
    return new Afiliado(
       
        obj['categoria'], 
        obj['cod'],
        obj['lugar'],
        obj['titulo'],
        obj['url']
    )
   }
    
   constructor(
    public categoria:string,
    public cod:string,
    public lugar:string,
    public titulo:string,
    public url:string
   ){}

   
}