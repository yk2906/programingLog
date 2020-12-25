import { useState } from 'react';
import './App.css';
import Header from './components/Home/Header';

function App() {
  const initialState = {
    language: '',
    hour: '',
    minute: '',
    date: '',
    task: ''
  }

  const [content, setContent] = useState([initialState])
  const [editLanguage, setEditLanguage] = useState('')
  const [editHour, setEditHour] = useState('')
  const [editMinute, setEditMinute] = useState('')
  const [editDate, setEditDate] = useState('')
  const [editTask, setEditTask] = useState('')

  return (
      <div className="App">
        <Header />
      </div>
  );
}

export default App;
