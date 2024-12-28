let codeit ={
    name: '코드잇 하이',
    bornYear:2017,
    isVeryNice: true,
    worstCourse: null,
    bestCourse: '자바스크립트 프로그래밍 기초'
  }

  for (let property in codeit) {
    console.log(property, ':', codeit[property]); // 속성 이름과 값을 함께 출력
  }