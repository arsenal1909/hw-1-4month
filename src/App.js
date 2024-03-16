
import './App.css';
import Header from './Header'
import Heade from './Heade';
import Card from './Card';
import data from'./data/data.json'

function App() {
  return (

    <div className="App">
      <Heade />
      <div className='container'>


{
  data.map((item)=> <Card
   price={item.price}
   oldPrise={item.oldPrice}
   deseprition={item.description}
   title={item.title}
   img={item.image}
 />
 
 )
  

}

      </div>
      < Header />

    </div>

  );
}

export default App;
