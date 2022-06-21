const str = `
    010-1234-5678
    thesecon@gmail.com
    https://www.omdbapi.com/?apikey=7035c60c&s=frozen
    The quick brown fox jumps over the lazy dog.
    abbbbccccdddd
`
// 생성자 방식으로 regexp 생성
// const regexp = new RegExp('the', 'gi')

// 리터럴 방식으로 regexp 생성
const regexp = /the/gi

// method
console.log(str.match(regexp)) // ['the', 'The', 'the']
const regexp2 = /fox/gi
console.log(regexp2.test(str)) // true
// str = str.replace(regexp2, 'AAA')
// str 이 readonly라고 나와서 일시적 주석처리
// console.log(str) // fox 부분이 AAA로 바뀌어서 나옴

// flag
const regexp3 = /the/g
console.log(str.match(regexp3)) // ['the', 'the']

const regexp4 = /the/gi
console.log(str.match(regexp4)) // ['the', 'The', 'the']

// \ backslash 기호 -> escape 문자로서 원래의 기능에서 벗어나 다른 기능으로 변환된다는 의미
console.log(str.match(/\./gi)) // ['.', '.', '.', '.']
console.log(str.match(/\.$/gi)) // null
console.log(str.match(/\.$/gim)) //['.']
// $ .부터 전체
// g -> 전체를 다 보겠다
// m -> 전체를 다 보겠다는 것이 아니라 줄 바꿈을 기준으로 각각의 줄을 시작과 끝으로 삼겠다