import './App.css';
import React from 'react';
import Header from './Components/Header';
import TodoList from './Components/TodoList';
import Footer from './Components/Footer';

const App = () => {
  return (
      <section className="todoapp">
        <Header/>
        <TodoList/>
        <Footer/>
      </section>
    );
}

export default App;
