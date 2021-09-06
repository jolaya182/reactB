import Recipes from './Recipes';
import '../styles/index.scss';
import ballons from '../images/balloons.jpg';
import paw from '../images/paw.svg';

const App = () => {
  return (
    <div>
      <section className="hero"> </section>
      <main>
        <section>
          <h1>HI! react sdf </h1>
        </section>
        <img src={ballons} alt="ballons" width="250" />
        <img src={paw} alt="paw" width="250" />
        <Recipes />
      </main>
    </div>
  );
};

export default App;
