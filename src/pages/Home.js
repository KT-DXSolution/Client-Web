import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Hello World</p>
      <ul>
        <li>
          <Link to="/RouterTestPage">RouterTestPage</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
