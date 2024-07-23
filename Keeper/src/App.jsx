import './App.css'
import Header from './Components/Header';
import Note from './Components/Note';
import Footer from './Components/Footer';
import API_DATA from './data';

function App() {

  return (
    <main>
    <Header/>

    {API_DATA.map(data =>(<Note key={data.id} myData={data} />))}

    <Footer/>
    </main>  
  )
}

export default App
