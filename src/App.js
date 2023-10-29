import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Todo from './Components/TodoApp/TodoApp';
import WeatherApp from './Components/WeatherApp/WeatherApp';
import Blog from './Components/BlogApp/Blog';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/weather' element={<WeatherApp />}></Route>
          <Route path='/todo' element={<Todo />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
