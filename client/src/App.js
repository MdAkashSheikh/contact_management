import './App.css';
import FormPage from './components/FormPage';
import NavBar from './components/NavBar';
import ShowData from './components/ShowData';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <FormPage/>
        <ShowData/>
    </div>
  );
}

export default App;
