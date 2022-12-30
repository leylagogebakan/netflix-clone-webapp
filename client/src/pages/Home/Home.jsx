import Navbar from '../../components/Navbar/Navbar';
import './home.scss';
import Featured from '../../components/Featured/Featured';
import List from '../../components/List/List';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  // Whenever we change type & genre it's gonna call this useEffect
  useEffect(() => {
    const getRandomLists = async () => {
      try {
        // url is list with type either series or movies and if we have genre as query
        const res = await axios.get(
          `lists${type ? '?type=' + type : ''}${
            genre ? '&genre=' + genre : ''
          }`,
          {
            headers: {
              token:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWIyMzM2OThmMzg4NmJlOGMzMmU1ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MjQxNjcxNSwiZXhwIjoxNjcyODQ4NzE1fQ.fDEXYMQPkx_6FkRIMyOkIE5Mb5-Y_XH4SSQsnirg9jw',
            },
          }
        );
        // console.log(res);
        setLists(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list, i) => (
        <List key={i} list={list} />
      ))}
    </div>
  );
};

export default Home;
