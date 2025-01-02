//문자열 심화 
let mySrtring = 'Hi codeit'

//요소탐색
console.log(mySrtring.indexOf('c')); // 앞부터 문자열 순서를 찾아줌
console.log(mySrtring.indexOf('a'))//반대로 문자열에서 없는 부분은 -1 이라고 답변을함
console.log(mySrtring.lastIndexOf('i'));// 뒤에서 부터 찾음 

//요소 접근 
console.log(mySrtring[3]); // 대괄호 표기법
console.log(mySrtring.charAt(3)); // charAt으로 수정

//문자열의 길이
console.log(mySrtring.length);

// String
let myString = 'Codeit';
let myArray = ['C', 'o', 'd', 'e', 'i', 't'];

for(let str of myString){
  console.log(str);
}// for of 문으로 리턴가능함

console.log(myString === myArray);
console.log(myString == myArray);