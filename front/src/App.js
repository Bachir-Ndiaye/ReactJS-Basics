
import Header from './components/Header.js';
import Tasks from './components/Tasks.js';
import { useState } from 'react';


function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Learn React',
      day: 'Jan 27 at 5:24pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Learn Node',
      day: 'Jan 28 at 5:24pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Learn Express',
      day: 'Jan 29 at 5:24pm',
      reminder: true,
    }
  ]);

  
  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

/*class App extends React.Component {
  render(){
    return <h1>Hey working with classes</h1>
  }
}*/

export default App;