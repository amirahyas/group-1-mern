import { useQuery, useMutation } from "@apollo/client";
import { QUERY_PETS, QUERY_USER } from "../../utils/queries";
import { ADD_FAVORITES } from "../../utils/mutations";
import {useEffect} from 'react';
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

const Home = () => {
  
  const { loading, error, data, refetch } = useQuery(QUERY_PETS, {
    refetchQueries: [
      QUERY_USER,
      'getUser'
    ]
  });
  const [addFavorite, {error: mutationError}] = useMutation(ADD_FAVORITES);
  console.log(mutationError);
  const pets = data?.pets || [];
  console.log(error);
  
  async function handleFavorite(e) {
    const petId = e.target.dataset.id
    // console.log(e.target.dataset.id);
    const {data} = await addFavorite({
      variables: {
        pets: petId
      } 
    })
    console.log(data);
    // window.location.reload();
  }

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/favorites" onClick={refetch}>Favorites</Link>
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
        <>
          {pets.map((pet) => (
            <div key={pet.id}>
              <h2>{pet.name}</h2>
              <h4>{pet.breed}</h4>
              <h4>{pet.age}</h4>
              <img alt='test' src={`/images/${pet.image}`} />
              <button data-id={pet.id} onClick={handleFavorite}>Add to Favorites</button>
              </div>
          ))}
          </>
      )}
    </>
  );
};

export default Home;
