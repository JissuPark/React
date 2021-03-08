import { observable,action, makeObservable } from 'mobx';
class TodoStore {
    @observable inputValue = '';
    @observable todos = [];
    @observable checked = [];

    constructor(){
        makeObservable(this);
    }
    @action
    setInputValue = (value) => {
        this.inputValue = value;
    }
    @action
    addTodo = () => {
        this.todos = this.todos.concat(this.inputValue);
        this.checked = this.checked.concat(false);
        this.inputValue = '';
    }
    @action
    clearTodo = () => {
        this.todos = [];
        this.checked = [];
    }
    @action
    removeTodo = (idx) => {
        this.todos = this.todos.filter((t, i) => i !== idx);
        this.checked = this.checked.filter((t, i) => i !== idx);
    }
    @action
    changeCheck = (idx) => {
        this.checked = this.checked.map((c, i) => i === idx ? !c : c );
    }
}

export default new TodoStore();