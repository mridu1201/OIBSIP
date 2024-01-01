import React, { useState } from 'react';
import './todoapp.css';
import AddIcon from '@mui/icons-material/Add';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      const now = new Date();
      const formattedDate = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false, date: formattedDate }]);
      setNewTask('');
    }
  };

  const editTask = (id, newText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const pendingTasks = filteredTasks.filter((task) => !task.completed);
  const completedTasks = filteredTasks.filter((task) => task.completed);

  return (
    <div className='todo-app'>
        <h1 className='title'>Todo App</h1>
        <hr/>
      <div className='inputs'>
        <div className="task-input">
            <input
            type="text"
            placeholder="Add a new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className='add-input'
            />
            <button onClick={addTask} className='add-btn'><AddIcon/></button>
        </div>
        <div className="search-bar">
            <input
            type="text"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
      </div>
      <div className="task-section">
        <h2>Pending Tasks</h2>
        <hr/>
        {pendingTasks.length === 0 ? (
          <p className='info'>No pending tasks left</p>
        ) : (
          <ul className="task-list">
            {pendingTasks.map((task) => (
              <li key={task.id} className={task.completed ? 'completed' : ''}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleComplete(task.id)}
                />
                <span>
                  {task.text} - {task.date}
                </span>
                <div className="task-actions">
                  <button onClick={() => editTask(task.id, prompt('Edit task:', task.text))}>
                    <EditOutlinedIcon
                    style={{
                      color:'darkorange'
                    }}
                    />
                  </button>
                  <button onClick={() => deleteTask(task.id)}><DeleteIcon
                  style={{
                    color:'crimson'
                  }}
                  /></button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="task-section">
        <h2>Completed Tasks</h2>
        <hr/>
        {completedTasks.length === 0 ? (
          <p className='info'>No tasks are completed</p>
        ) : (
          <ul className="task-list">
            {completedTasks.map((task) => (
              <li key={task.id} className={task.completed ? 'completed' : ''}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleComplete(task.id)}
                />
                <span>
                  {task.text} - {task.date}
                </span>
                <div className="task-actions">
                  <button onClick={() => editTask(task.id, prompt('Edit task:', task.text))}>
                    <EditOutlinedIcon
                    style={{
                      color:'darkorange'
                    }}
                    />
                  </button>
                  <button onClick={() => deleteTask(task.id)}><DeleteIcon
                  style={{
                    color:'crimson'
                  }}
                  /></button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TodoApp;
