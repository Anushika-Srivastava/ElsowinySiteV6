import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import logo from './logo.svg';
import HomePage from './pages/Home';
import './App.css';

const HOME = process.env.PUBLIC_URL;

function App() {
  function test(){
    console.log('test');
    console.log(process.env.REACT_APP_GOOGLE_VERIFY_CAPTCHA)
  }
  test();
  return (
    <BrowserRouter basename={'/'} element={<HomePage />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route exact path={`${HOME}/`} component={HomePage}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
