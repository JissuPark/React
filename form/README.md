# Form app

React의 함수기반 컴포넌트와 클래스기반 컴포넌트로 작성된 앱으로 동일한 기능을 하는 두개의 앱을 탭으로 구분했다. 

React에서 Form 데이터를 처리하는 방식을 이해하기 위해 작성된 앱이지만 아직 백엔드와 연결되지 않아 `alert`외의 다른 동작은 없고 데이터를 받아 화면에 추가해주는 것으로 대체되어있다. 

![image](https://user-images.githubusercontent.com/42437443/110212272-f4828a00-7edd-11eb-8463-da3dd71e95e1.png)

## 실행 방법

프로젝트를 다운받은 후, `form`폴더로 이동한다. 

```bash 
$ cd form
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
- class based component
  - state



## 기능

### 탭 선택

​	함수기반으로 작성된 코드와 클래스기반으로 작성된 코드를 둘 다 확인해볼 수 있도록 탭으로 구분되어있고 탭을 클릭하면 Form 입력창의 색이 변경되며 바뀐 것을 확인할 수 있다. 

### 	Form 데이터 입력

​	`input`, `select`, `checkbox` 등의 Form 데이터를 입력할 수 있다. 

​	submit 버튼은 존재하지만 `alert`창에 입력한 정보를 띄워주는 기능만 작동한다.

### 	Welcome Card 생성

​	정보가 입력되면 입력되는 대로 오른쪽에 있는 환영 인사가 담긴 카드를 구성해준다. 

​	카드 위에 있는 안내 문구 이름이 바뀌고 나머지 데이터는 카드내에서 변경되는 것을 볼 수 있다. 



## 구조 

Form 앱의 구조는 탭을 기준으로 `class`형태와 `function`형태 두가지로 나뉘는데 둘 다 동일한 구조와 기능을 가진다. 

디렉토리 구조로 나타내면 다음과 같다. 

- App.js
- component
  - class
    - Panel, Result, Text, TextArea, Select, MultiInput (js)
  - function
    - Panel, Result, Text, TextArea, Select, MultiInput (js)

탭을 구성하는 Panel이 앱을 구성하는 각 input 컴포넌트와 결과 화면을 가지는 형태이다.

 화면은 왼쪽 Form 화면과 오른쪽 Welcome Card 화면으로 나뉘어진다. 

### 	Form 화면

​	Form 화면은 위에서부터 `Text`, `TextArea`, `Select`, `MultiInput`(checkbox, number) 순으로 값을 입력할 수 있게 구성되어있다. 

### Welcome Card 화면 	

​	환영 인사 화면은 제일 위에 환영 메세지를 중심으로 내용은 변하지 않지만 구성 요소와 아래쪽에 있는 카드가 사용자의 입력에 따라 변경되도록 구성되어있다. 

- 데이터는 올바른 사용을 위해서 각 `Panel`에서 `state`형태로 이벤트 함수와 함께 관리할 수 있도록 작성했다. 
- `Panel`하위 컴포넌트들은 `props`형태로 데이터를 받아 처리하도록 했다. 
- Class 기반에서는 `state`와 `this.setState`를 사용했다.
- Function 기반에서는 `useState`를 사용했다. 
- 둘 다 `arrow function`을 사용해 함수를 작성했다.



## 추후 진행 일정

Routing을 적용해 Form 데이터가 전송되고 처리될 수 있도록 추가 개발을 진행할 예정이다. 

