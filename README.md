[참고 및 출처 링크](https://heropy.blog/2018/10/28/regexp/)
# 정규표현식(RegExp)

정규식, Regular Expression
## 역할
- 문자 검색 (search)
- 문자 대체 (replace)
- 문자 추출 (extract)

# 테스트 사이트
https://regexr.com/

## 정규식 생성
｀｀｀js
// 생성자
new RegExp('표현', '옵션')
new RegExp('[a-z]','gi') // 소문자 a-z, gi는 사용하지 않겠다는 옵션

// 리터럴
/표현/옵션
/[a-z]/gi
｀｀｀

## 예제 문자
｀｀｀js
const str = `
    010-1234-5678
    thesecon@gmail.com
    https://www.omdbapi.com/?apikey=7035c60c&s=frozen
    The quick brown fox jumps over the lazy dog
    abbbbccccdddd
`
｀｀｀

## 정규식 메소드
메소드 | 문법 | 설명
--|--|--
test | ｀정규식.test(문자열)｀ | 일치 여부 (Boolean) 반환
match | ｀정규식.match(문자열)｀ | 일치하는 문자열의 배열(Array) 반환
replace | ｀정규식.replace(문자열)｀ | 일치하는 문자열을 대체하고 대체된 문자열(String) 반환

## 플래그(옵션) flag
플래그 | 설명
--|--
g | 모든 문자 일치(global)
i | 영어 대소문자를 구분하지 않고 일치 (ignore case)
m | 여러 줄 일치 (multi line)

## 패턴 (표현식)
정규식 패턴 | 설명
--|--
｀^｀ | 줄(line)의 시작에서 일치 ｀/^abc/｀
｀$｀ | 줄(line)의 끝에서 일치 ｀/xyz$/｀
｀.｀ | 임의의 한 문자와 일치
｀a|b｀ | a 또는 b와 일치, 인덱스가 작은 것을 우선 반환함
｀*｀ | 0회 이상 연속으로 반복되는 문자와 가능한 많이 일치, ｀{0,}｀와 동일
｀*?｀ | 0회 이상 연속으로 반복되는 문자와 가능한 적게 일치(lazy) ｀{0}｀와 동일
｀+｀ | 1회 이상 연속으로 반복되는 문자에 가능한 많이 일치, ｀{1,}｀와 동일
｀+?｀ | 1회 이상 연속으로 반복되는 문자에 가능한 적게 일치(lazy) ｀{1}｀와 동일
｀?｀ | 없거나 1회 가능한 많이 일치 
｀??｀ | 없거나 1회 가능한 적게 일치(lazy)
｀{3}｀ | 3(숫자)개 연속 일치
｀{3,}｀ | 3개 이상 연속 일치
｀{3,5}｀ | 3개 이상 5개 이하(3~5개) 연속 일치
｀{3,5}?｀ | 3개 이상 5개 이하(3~5개) 연속 중 가능한 적은 3개 연속 일치(lazy) ｀{3}｀ 와 동일
｀()｀ | 캡쳐 (capture)할 그룹
｀?<>｀ | 캡쳐 그룹 이름 지정, ｀/(?<name>pattern)/｀
｀?:｀ | 캡쳐(capture)하지 않는 그룹
｀?=｀ | 앞쪽 일치(Lookahead), ｀/ab(?=c)/｀
｀?!｀ | 부정 앞쪽 일치(Negative Lookahead), ｀/ab(?!c)/｀
｀?<=｀ | 뒤쪽 일치(Lookbehind), ｀/(?<=ab)c/｀
｀?<!｀ | 부정 뒤쪽 일치 (Negative Lookbehind), ｀/(?<!ab)c/｀
｀[abc]｀ | a 또는 b 또는 c와 일치, 점 ｀.｀이나 별표 ｀*｀ 같은 특수 문자는 ｀[]｀ 안에서 특수 문자가 아님, ｀/\.[.]/｀ 
｀[a-z]｀ | a부터 z 사이의 문자 구간에서 일치, [~-~]이면 ~와 ~ 사이 구간에서 일치
｀[^abc]｀ | a 또는 b 또는 c가 아닌 나머지 문자에 일치 (부정)