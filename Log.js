class Log {
  constructor(r){
    this.r = r;
    console.log(this.r);
  }
  display(){
    var a =50;
    for(var i in this.r){
      image(this.r[i],a,100,100,100 );
      a=a+150
    }
  }
}