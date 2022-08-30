import React from "react";

//1. 튜플(Tuple)
let b: [string, number];
b = ["z", 1];

//2. void - 아무것도 반환하지 않을때
function sayHello(): void {
  console.log("hello");
}

//3. never - 끝나지 않는 함수
// function showError(): never {
//   throw new Error();
// }

//4. enum - 문자열, 숫자 둘다 넣을수 있음,
//특정값을 강제로 하고 값의 공통점이 있을 때 사용
enum Os {
  Window = 3,
  Ios = 10,
  Android,
}

console.log(Os[10]); //Ios
console.log(Os["Ios"]); //10

//5. interface
interface User {
  name: string;
  age: number;
  gender?: string;
}

let user: User = {
  name: "xx",
  age: 30,
};

user.age = 10;
user.gender = "male";

console.log(user.age);

//8. 문자열 리터널 타입 선언 - 값이 여러개이고 지정할 경우 타입선언
type Score = "A" | "B" | "C" | "F";

interface ReadOnlyUser {
  name: string;
  age: number;
  //6. 읽기 전용 readonly
  //앞에 readonly 붙이면 읽기 전용 data 변경 불가
  readonly birthYear: number;
  //7. [key:키type]: 값type - 키key: 값type으로 지정되는건 모두 사용
  [grade: number]: Score;
}

let readUser: ReadOnlyUser = {
  name: "xx",
  age: 30,
  birthYear: 2000,
  //키key: 값type으로 지정되는건 모두 사용
  1: "A",
};

console.log(readUser.birthYear);

const Practice = () => {
  return (
    <div>
      <h1>practice</h1>
      <p>튜플(Tuple){b}</p>
      <p>void{sayHello()}</p>
      <p>never{/*showError()*/}</p>
    </div>
  );
};

export default Practice;
