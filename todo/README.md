# To Do app

React의 함수기반 컴포넌트로 작성된 일정 관리 앱이다. 기본적인 추가, 삭제 등의 기능을 가지고 있고 현재는 프론트로만 개발된 상태이다.

![image](https://user-images.githubusercontent.com/42437443/110210541-73bf9000-7ed5-11eb-9816-b183a03f0d9e.png)

## 실행 방법

프로젝트를 다운받은 후, `todo`폴더로 이동한다. 

```bash 
$ cd todo
```

todo 폴더에서 `yarn`명령어를 통해 실행한다. 

```bash  
$ yarn start
```

프로젝트가 실행되며 브라우저에서 http://localhost:3000번으로 접속되면 개발된 화면을 볼 수 있다. 



## 구성 요소 

- [Create React App](https://github.com/facebook/create-react-app)
- [semantic-ui-react](https://react.semantic-ui.com/)
- function based component
- hook
- [mobx](https://mobx.js.org/README.html)⭐UPDATE⭐



## 기능

### 		할일 추가

​	`What to do ?`라고 적힌 입력창에 해야할 일을 적고 `+`버튼을 누르면 아래 List에 할 일이 추가된다. 추가된 할 일은 아래 기능을 통해서 관리가 가능하다. 

### 		할일 제거

​	목록에 있는 할 일은 오른쪽에 빨간색 지우개 버튼을 가진다. 지우개 버튼을 클릭해 해당 할 일을 지울 수 있다. 

### 		완료 목록 표시

​	할 일 왼쪽에 `ㅁ`모양 체크박스가 있다. 클릭하면 배경이 녹색으로 변하며 글자에 취소선이 그어진다. 

### 	전체 목록 제거

​	목록 아래쪽을 보면 빨간 박스 모양의 `Clear All` 버튼이 있다. 이 버튼을 누르면 목록이 전부 삭제된다. 



## 구조 ⭐(udpate)⭐

Todo 앱의 구조는 크게 `Divider`를 기준으로 위쪽을 `TodoHeader` , 아래쪽을 `TodoBody`로 구성했다. 

### 	TodoHeader 

​	TodoHeader는 앱의 이름과 입력창으로 구성된다. 

- [x] 개발과정에서 코드가 길지 않아 세부 컴포넌트로 나누지 않았지만 클린 코드 작성을 위해 컴포넌트로 분리할 계획이다.

### 	TodoBody	

​	TodoBody는 할 일 목록과 전체 삭제 버튼으로 구성된다. 

- [x] 역시 컴포넌트가 많지 않아서 나누지 않았지만 분리 예정이다. 

  => `TodoList`로 분리 후 최적화를 위해 다시 `TodoItem`으로 할 일 단위로 분리했다.

- 컴포넌트간 데이터 전달을 위해서 `useState`로 state를 전달했다.
- 상태 변화에 따라 컴포넌트의 속성 변경을 위해서는 `삼항 연산자`를 사용했다. 
- 가능한 함수는 `arrow function`을 사용해서 작성했고 컴포넌트 업데이트를 위해 set함수가 들어가도록 구성했다.
- ⭐`mobx`를 사용해 상태 관리할 수 있도록 전체적인 리팩토링을 진행했다. ⭐



## 추후 진행 일정

### 	백엔드 개발 

​	아직 미정이지만 `Java`-`Spring` 프레임워크를 사용해 `REST` 형태의 백엔드를 개발해 연결할 예정이다. 

### 	데이터베이스 추가

​	REST 형태의 백엔드가 완성되면 `Mongo DB`를 데이터베이스로 사용할 예정이다. 

