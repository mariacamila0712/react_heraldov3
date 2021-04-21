import "./App.css";
import Alert from './Components/Alert/Alert';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Contents from './Components/Contents/Contents';
import Suscription from './Components/Suscription/Suscription';
import Pagination from './Components/Pagination/Pagination';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Alert/>
        <Header />
        <Navbar />
        <Contents/>
        <Suscription/>
        <Pagination />
        <Footer />
      </header>
    </div>
  );
}

export default App;
