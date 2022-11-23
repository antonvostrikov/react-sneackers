import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";

const db = [
  { id: 1, name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, img: '/img/sneackers/1.jpg' },
  { id: 2, name: 'Мужские Кроссовки Nike Air Max', price: 15600, img: '/img/sneackers/2.jpg' },
  { id: 3, name: 'Мужские Кроссовки Nike Air Max 2', price: 12900, img: '/img/sneackers/3.jpg' },
  { id: 4, name: 'Мужские Кроссовки Nike Air Max 3', price: 13400, img: '/img/sneackers/4.jpg' }
]

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex">
          { db.map(card => <Card key={card.id} name={card.name} price={card.price} img={card.img} />) }
        </div>
      </div> 
    </div>
  );
}

export default App;
