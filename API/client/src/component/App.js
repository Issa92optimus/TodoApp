import React from 'react';
import Login from './Login';
import "./App.css";
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import Header from './Header';
import TaskListContextProvider from '../context/TaskListContext';


function App () {
  return (
    <TaskListContextProvider>
      <Login />
    <div className='container'>
      <div className='app-wrapper'>
        <div className='main'>
          <Header />
          <TaskForm />
          <TaskList />
        </div>
      </div>
    </div>
    </TaskListContextProvider>
  );
  }

export default App;
