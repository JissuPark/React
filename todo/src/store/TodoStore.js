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

    setInitProp = () => {
        this.todo = {
            id: '',
            name: '',
            checked: false,
            date: new Date()
        }
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
        this.setInitProp();
    }
    @action
    clearTodo = () => {
        this.todos = [];
        this.setInitProp();
    }
    @action
    removeTodo = (item) => {
        this.todos = this.todos.filter(todo => todo !== item);
        this.setInitProp();
    }
    @action
    changeTodoProp = (item, key, value) => {
        this.todos = this.todos.map(todo => 
            todo === item ? {...todo,[key]:value}:todo);
    }
    
}

export default new TodoStore();