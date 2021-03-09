import { useState } from "react";
import { Menu } from "semantic-ui-react";
import BookPage from "./view/BookPage";
import TodoPage from "./view/TodoPage";

function App() {
  const [activeItem, setActiveItem] = useState('Home');
  const handleItemClick = (e, { name }) => setActiveItem(name)

  return (
    <div className="App">
        <Menu >
          <Menu.Item
          name='Home'
          active={activeItem === 'Home'}
          onClick={handleItemClick}>
            Home
          </Menu.Item>
          <Menu.Item
          name='Books'
          active={activeItem === 'Books'}
          onClick={handleItemClick}>
            Books
          </Menu.Item>
          <Menu.Item
          name='Todo'
          active={activeItem === 'Todo'}
          onClick={handleItemClick}>
            Todo
          </Menu.Item>
        </Menu>
        {activeItem === "Home" && <h1>Hello!</h1>}
        {activeItem === "Books" && <BookPage/>}
        {activeItem === "Todo" && <TodoPage/>}
        
    </div>
  );
}

export default App;
