exports.StringSplosion = class StringSplosion{
  constructor(strValue){
    this.strValue = strValue;
}
  manipulate(){
    let stringArray = [];
    for(let i = 1; i <= this.strValue.length; i++){
    let result = this.strValue.substr(0, i);
     stringArray.push(result);
    }
  return stringArray.join('');
  };
}