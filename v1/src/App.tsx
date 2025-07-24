import './App.css';
import aperolimg from "./assets/aperol.jpg";
import Biscottiimg from "./assets/Biscotti.webp";
import Bracioleimg from "./assets/Braciole.jpg";
import Margheritaimg from "./assets/Margherita.webp";
import cannoliimg from "./assets/cannoli.jpg";
import ProductCardComponent from './components/ProductCardComponent';

function App() {
  return (
    <>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>
        
        <ProductCardComponent
          name="Braciole"
          img={Bracioleimg}
          productDesc="An Italian dish of thinly sliced meat (often beef) rolled with fillings like cheese, herbs, and breadcrumbs, then braised."
          title="Italian  dish"
          price={99}
        />

        <ProductCardComponent
          name="Cannoli"
          img={cannoliimg}
          productDesc=" Crispy Sicilian pastry shells filled with sweet ricotta cream."
          title="Pastry"
          price={99}
        />

        <ProductCardComponent
          name="Aperol Spritz"
          img={aperolimg}
          productDesc="A refreshing Italian cocktail of Aperol, prosecco, soda, and orange slice."
          title="Drinks"
          price={99}
        />

        <ProductCardComponent
          name="Biscotti"
          img={Biscottiimg}
          productDesc="Crunchy Italian almond cookies baked twice for a dry, twice-baked texture, perfect for dipping."
          title="Dessert"
          price={109}
        />

        <ProductCardComponent
          name="Margherita Pizza"
          img={Margheritaimg}
          productDesc="A classic Italian pizza topped with tomato sauce, mozzarella, and fresh basil."
          title="Snack"
          price={149}
        />
      </div>
    </>
  );
}

export default App;
