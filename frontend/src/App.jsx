import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import HomeScreen from './Screen/HomeScreen';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <HomeScreen />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
