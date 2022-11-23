
import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Components/Routes/Routes';
import { otherContext } from './Context/FeatureContext';

function App() {
  const {theme} = useContext(otherContext)

  return (
    <div data-theme={theme}>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
