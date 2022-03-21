import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Design from './components/Main/Design-Theory/Design';
import Main from './components/Main/Main';
import Posts from './components/Main/Posts/Posts';
import Typography from './components/Main/Typography/Typography';
import Ui from './components/Main/Ui/Ui';
import Ux from './components/Main/Ux/Ux';
import Footer from './components/Footer/Footer'
import Info from './components/Main/Info/Info';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/info'>
          <Route path='/info/:userId' element={<Info/>} />
        </Route>
        <Route path='/design' element={<Design />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/typography' element={<Typography />} />
        <Route path='/ux' element={<Ux />} />
        <Route path='/ui' element={<Ui />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
