import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <header>
        <Navbar />
      </header>
      <main className='container mx-auto px-3 pt-30 md:pt-36'>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
