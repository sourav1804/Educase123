import { BrowserRouter,Routes, Route } from 'react-router-dom';

import Main from './Main';
import Signup  from './Signup';
import  Login  from './Login';
import  Home from './home'

function App() {
  return (
    <>
    <BrowserRouter><Routes>
      <Route path="/" element={<Main />} />
      <Route path="/signup" element={<Signup />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/home" element={<Home />}/> {/* Define the About route */}
    </Routes></BrowserRouter>
      
    </>
  );
}

export default App;
