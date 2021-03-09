import { observable,action, makeObservable } from 'mobx';
class TodoStore {
    @observable todos = [];
    @observable todo = {
        id : '',
        name : '',
        checked : false,
        date : new Date()
    };

    constructor(){
        makeObservable(this);
    }

    @action
    setTodoProp=(key, value)=>{
        this.todo = {
            ...this.todo,
            [key]:value
        }
    }
    @action
    addTodo = () => {
        this.todos = this.todos.concat(this.todo);
        this.setTodoProp("name", '');
    }
    @action
    clearTodo = () => {
        this.todos = [];
    }
    @action
    removeTodo = (item) => {
        this.todos = this.todos.filter(todo => todo !== item);
    }
    @action
    changeTodoProp = (item, key, value) => {
        this.todos = this.todos.map(todo => 
            todo === item ? {...todo,[key]:value}:todo);
    }
    
}

export default new TodoStore();