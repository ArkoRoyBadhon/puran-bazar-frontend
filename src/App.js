
import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Components/Routes/Routes';
import { otherContext } from './Context/FeatureContext';
import { Toaster } from 'react-hot-toast';


function App() {
  const { theme } = useContext(otherContext)

  return (
    <div data-theme={theme}>
        <RouterProvider router={router}>

        </RouterProvider>
        <Toaster />
    </div>
  );
}

export default App;
