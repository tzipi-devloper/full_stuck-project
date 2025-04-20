import { RouterProvider } from 'react-router'
import Routes from './routes/Routes';
import './App.css'
import { Provider } from 'react-redux';
import store from './app/store';

function App() {
  return (
    <>
    <Provider store={store}>
    <RouterProvider router={Routes}/> 
    </Provider>
     

    </>
  )
}
export default App
