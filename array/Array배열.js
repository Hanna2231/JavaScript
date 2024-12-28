// 배열(Array)
let courseRanking = [
    '자바스크립트 프로그래밍 기초',
    'Git으로 배우는 버전 관리',
    '컴퓨터 개론',
    '파이썬 프로그래밍 기초'
  ];// 배열 예제 

  // 배열 작성시 []로 출력할것 
  // 배열을 출려할시는 [] 로 출력하며 0번으로 시작됨
  console.log(courseRanking[0]);// 배열 출력예제
  console.log(courseRanking[1+2]);

/**
 * array 시험
 * 
 * let dataType = ['number', 'string', 'boolean', 'null', 'undefined', 'object'];
 * for (let i = 0; i < 6; i++) {
  console.log(dataType[i]);
}
 */

//

let members = ['쿤칼레', 'Zerrard66', '세엥', '하나','두울']
    
    members[3] = '안녕' // Array객체의 변경
    console.log(members[3]); // 변경된 객체의 출력
    members[5]= '잘가'// Array객체를 추가
    console.log(members[5]);// 추가객체를 출력 
    
    delete members[2];// 기존 설정 객체를 삭제 
    console.log(members);// 삭제된 객체들을 출력 

//
let 변수 =['변수1','변수2','변수3','변수4','변수5'];
console.log(변수);

//splice
변수.splice(1,1);// 배열삭제 
console.log(변수);

let members = ['쿤갈레', 'Zerrard66', '우리생각해써',
    '흙토끼', 'End Miracle'];
    console.log(members)
    
    // 배열의 첫요소를 삭제 : shift()
    members.shift();
    console.log(members);
    //배열의 마지막 요소를 삭제: pop()
    members.pop();
    console.log(members);
    //배열의 첫 요소로 값 추가:  unshift
    members.unshift('추가');
    console.log(members);
    //배열의 마지막 요소로 값 추가: push
    members.push('하이 추가2')
    console.log(members)