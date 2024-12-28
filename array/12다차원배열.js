
//2차원 배열예시 
const example_arr = [
    ["Apple", "Banana", "Mango"],
    ["Orange", "Lime"],
    ["Tomato", "Grapes", "Kiwi", "Cherry"],
    ["Watermelon"]
  ];

  
function example_func (example_arr) {
const result = [];
  
for (let i = 0; i < example_arr.length; i++) {
   console.log(example_arr[i]);  // ['Apple', 'Banana', 'Mango']
  for (let j = 0; j < example_arr[i].length; j++) {
    console.log(example_arr[i][j]);  // Apples
  }
    } 
    return result;
  }