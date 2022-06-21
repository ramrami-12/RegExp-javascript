# 정규표현식(RegExp)

정규식, Regular Expression
## 역할
- 문자 검색 (search)
- 문자 대체 (replace)
- 문자 추출 (extract)

# 테스트 사이트
https://regexr.com/

## 정규식 생성
~~~js
// 생성자
new RegExp('표현', '옵션')
new RegExp('[a-z]','gi') // 소문자 a-z, gi는 사용하지 않겠다는 옵션

// 리터럴
/표현/옵션
/[a-z]/gi
~~~

## 예제 문자
~~~js
const str = `
    010-1234-5678
    thesecon@gmail.com
    https://www.omdbapi.com/?apikey=7035c60c&s=frozen
    The quick brown fox jumps over the lazy dog
    abbbbccccdddd
`
~~~

## 정규식 메소드
메소드 | 문법 | 설명
--|--|--
test | ~ 정규식.test(문자열) ~ | 일치 여부 (Boolean) 반환
match | ~ 정규식.match(문자열) ~ | 일치하는 문자열의 배열(Array) 반환
replace | ~ 정규식.replace(문자열) ~ | 일치하는 문자열을 대체하고 대체된 문자열(String) 반환

## 플래그(옵션) flag
플래그 | 설명
--|--
g | 모든 문자 일치(global)
i | 영어 대소문자를 구분하지 않고 일치 (ignore case)
m | 여러 줄 일치 (multi line)

## 패턴 (표현식)
정규식 패턴 | 설명
--|--
^ | 줄(line)의 시작에서 일치 