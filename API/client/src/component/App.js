import React from 'react';
import Login from './Login';
import "./App.css";
import Navbar from './Navbar';
import Signup from './Signup';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import Header from './Header';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import TaskListContextProvider from '../context/TaskListContext';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/sign-up" element={<Signup/>}/>
        <Route path="/login" element={<Login/>} />
      </Routes>
        <TaskListContextProvider>
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
    </BrowserRouter>

  );

}

export default App