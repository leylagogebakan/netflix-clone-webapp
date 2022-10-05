import Navbar from '../components/Navbar/Navbar';
import './home.scss';
import Featured from '../components/Featured/Featured';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured type="series" />
    </div>
  );
};

export default Home;
