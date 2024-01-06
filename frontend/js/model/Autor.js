export class Autor {
  constructor(autor, nacionalidade) {
      this._autor = autor;
      this._nacionalidade = nacionalidade;
      this._nascimento = nascimento
  }

  set autor(autor){
    this._autor = autor;
  }

  set nacionalidade (nacionalidade){
    this._nacionalidade = nacionalidade ;
  }

  set nascimento (nascimento){
    this._nascimento = nascimento
  }

  set usuario (usuario){
    this._usuario = usuario ;
  }

  get autor(){
    return this._autor;
  }

  get nacionalidade(){
    return this._nacionalidade;
  } 

  get nascimento (){
    return this._nascimento;
  }

  get usuario(){
    return this._usuario;
  }   

}