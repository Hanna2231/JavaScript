function calculateChange(payment, cost) {
    // 코드를 작성해 주세요.
    let change = payment - cost; // 거스름돈 총액
  
    const fiftyCount = (change - (change % 50000)) / 50000;
    change = change - 50000 * fiftyCount;
  
    console.log(`50000원 지폐: ${fiftyCount}장`);
  }
  
  // 테스트 코드
  calculateChange(100000, 33000);
  console.log('');
  calculateChange(500000, 378000);
  