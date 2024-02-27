import { useQuery } from "@apollo/client";
import { QUERY_PETS } from "../../utils/queries";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

const Home = () => {
  const { loading, error, data } = useQuery(QUERY_PETS);
  console.log(data);
  const pets = data?.pets || [];
  console.log(error);
  // console.log(pets);
  // console.log(data);
  // console.log(pets);

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/favorites">Favorites</Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="mx-1">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <>
      <header className="flex-row px-1">
        <nav>{showNavigation()}</nav>
      </header>

      <h1>Pets Available</h1>
      {loading ? (
        <p>...loading</p>
      ) : (
        <ul>
          {pets.map((pet) => (
            <>
              <h2>{pet.name}</h2>
              <h4>{pet.breed}</h4>
              <h4>{pet.age}</h4>
              <img alt='test' src={pet.image} />
            </>
          ))}
        </ul>
      )}
    </>
  );
};

export default Home;
