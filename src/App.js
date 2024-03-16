
import './App.css';
import Header from './Header'

import Heade from './Heade';
import Card from './Card';

function App() {
  return (

    <div className="App">
      <Heade />
      <div className='container'>

        <Card
          price={213}
          oldPrise={21332}
          deseprition={'mvkerw hwivhc iwv wnbcu '}
          title={'Dead people'}
          img src={'https://shedevrum.ai/post/0e40edb447e111ee9bda5a1112d6d6c5/'}
        />

<Card
          price={65}
          oldPrise={54}
          deseprition={'mvkerw hwijwerjewkj '}
          title={'Arrows'}
          img src={'https://media.istockphoto.com/id/1332848841/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BD%D0%B0%D0%B1%D0%BE%D1%80-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%8B%D1%85-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%BE%D0%B2-%D1%81%D1%82%D1%80%D0%B5%D0%BB%D0%BE%D0%BA.jpg?s=2048x2048&w=is&k=20&c=E21hqdbXI-tJMlspHkXY_rjvqPI1gl2ebzpTdfq8QmA='}
        />

<Card
          price={653}
          oldPrise={742}
          deseprition={'wejn ewruhwi wi '}
          title={'Katans'}
          img src={'https://kartinki.pics/uploads/posts/2021-07/1625653536_43-kartinkin-com-p-katana-anime-anime-krasivo-52.jpg'}
        />

<Card
          price={475}
          oldPrise={382}
          deseprition={'erbewn iowe fior  '}
          title={'Kunay'}
          img src={' https://spirk.ru/files/e89/e8979c2fbabb16b3d4560c68a8ad01c1.jpg'}
        />


      </div>
      < Header />

    </div>

  );
}

export default App;
