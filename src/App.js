import { ToastContainer } from 'react-toastify';
import './App.css';
import Todo from './components/Todo';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Todo />
      <ToastContainer />
    </div>
  );
}

export default App;
