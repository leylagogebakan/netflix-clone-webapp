import Navbar from '../components/Navbar/Navbar';
import './home.scss';
import profile from '../assets/profile.webp';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <img width="100%" src={profile} alt="Profile" />
    </div>
  );
};

export default Home;
