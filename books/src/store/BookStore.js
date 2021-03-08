import Books from "../component/Books";
import {action, makeObservable, observable} from 'mobx';

class BookStore {
    //@observable : 관찰할 state 데이터
    @observable books = Books;
    @observable book = Books[0];

    //생성자 : state를 관찰하도록 생성
    constructor(){
        makeObservable(this);
    }

    //@computed 데이터를 반환하는 역할
    
    //@action : state를 변경하는 역할
    @action 
    select = (b) => { 
        this.book = b;
    }

    @action
    setInput = (e) => {
        const newBooks = Books.filter(abook => {
          return abook.title.toLowerCase().includes(e.target.value.toLowerCase());
        });
        this.books = newBooks;
        this.book = newBooks[0];
      }
}

export default BookStore;