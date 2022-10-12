import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesComponent from './pages/RoutesComponent';
import { DataProvider } from './components/DataContext';

function App() {
  
  return (
    <div className='App flexColCenterCenter'>
      <BrowserRouter>
        <DataProvider>
        <RoutesComponent/>
        </DataProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

