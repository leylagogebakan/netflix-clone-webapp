import Navbar from '../components/Navbar/Navbar';
import './home.scss';
import Featured from '../components/Featured/Featured';
import List from '../components/List/List';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured type="series" />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
