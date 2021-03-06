# Books app

책 정보를 가져와 리스트로 출력하고 클릭한 책의 세부 정보를 보여주는 앱으로 기존에 있던 예제에 입력창을 더해 책 제목에 입력값이 있는 책만 출력하도록 기능을 추가했다. 

![image](https://user-images.githubusercontent.com/42437443/110211234-ff86eb80-7ed8-11eb-9c4f-85e0012ac1fc.png)

## 실행 방법

프로젝트를 다운받은 후, `books`폴더로 이동한다. 

```bash 
$ cd books
```

todo 폴더에서 `yarn`명령어를 통해 실행한다. 

```bash  
$ yarn start
```

프로젝트가 실행되며 브라우저에서 http://localhost:3000번으로 접속되면 개발된 화면을 볼 수 있다. 



## 구성 요소 

- [Create React App](https://github.com/facebook/create-react-app)
- [semantic-ui-react](https://react.semantic-ui.com/)
- class based component



## 기능

### 	책 목록 출력

​	주어진 데이터를 파싱해 책 목록으로 출력한다. 

​	현재는 데이터를 주지만 데이터베이스를 추가하면 데이터베이스 기반으로 동작하도록 수정할 계획이다.

### 	책 세부정보 표시

​	책 목록에서 클릭 이벤트가 발생하면 해당 책의 세부 정보를 오른쪽에 띄워준다. 

### 	책 검색 

​	입력창에 들어온 값을 기준으로 대소문자를 구분하지 않고 책 제목을 검색한다. 



## 구조 

Books 앱은 이름과 검색창이 있는 위쪽과 책 정보가 있는 아래쪽으로 구분된다. 

아래쪽 화면이 메인으로 다시 `BookList`와 `BookDetail`로 나뉜다. 

### 	BookList

​	책 목록은 `props`로 받아와 JS의 map함수로 `BookItem`에 책 정보를 뿌려주는 역할을 한다. `BookItem`은 하나의 책 정	보를 표현하는 하나의 단위로 다시 `props`로 데이터를 받아와 컴포넌트를 구성한다.

### 	BookDetail

​	책 세부정보 데이터를 `props`로 받아 오른쪽 화면에 표현한다. 왼쪽에 표현되는 목록과 다르게 카드 형태를 띄고 있으	며 부모 컴포넌트로부터 클릭 이벤트를 통해 변경 가능하도록 작성되었다. 

- 상위 컴포넌트를 중심으로 `BookList`와 `BookDetail`이 데이터를 주고 받기때문에 상위 컴포넌트에 `state`형태로 데이터를 수정할 수 있게 이벤트 함수와 함께 작성했다.
- 하위 컴포넌트(BookList, BookDetail)는 데이터를 받아서 수정하지 않기때문에 `props`형태로 사용할 수만 있게 작성했다.



## 추후 진행 일정

### 	백엔드 개발 

​	아직 미정이지만 `Python`-`Django/Flask` 프레임워크를 사용해 `REST` 형태의 백엔드를 개발해 연결할 예정이다. 

### 	데이터베이스 추가

​	REST 형태의 백엔드가 완성되면 RDMS(`MySQL/MariaDB`)를 데이터베이스로 사용할 예정이다. 