let myArr = [];
let copyArr = myArr;

myArr.push("hello");

console.log(myArr); // ["hello"]
console.log(copyArr); // ["hello"]

//참조형 자료 예시 
const Person = {
    name: '하나몬',
    favorite: function(thing) {
          console.log(this.name + '은(는) ' + thing + '을(를) 좋아합니다.');
    }
};
Person.favorite('음악');