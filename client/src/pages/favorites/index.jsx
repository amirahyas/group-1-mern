import { Link } from "react-router-dom";
import { REMOVE_FAVORITES } from "../../utils/mutations";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";
import "bootstrap/dist/css/bootstrap.min.css";

function Favorites() {
  const { loading, data } = useQuery(QUERY_USER, {
    updateCache: function (cache) {
      cache.modify({
        fields: {
          someRootField: function (value, { INVALIDATE }) {
            return INVALIDATE;
          },
        },
      });
    },
  });

  const [removeFavorite, { error: mutationError }] =
    useMutation(REMOVE_FAVORITES);
  console.log(mutationError);
  const pets = data?.pets || [];
  // console.log(error);

  async function handleFavorite(e) {
    const petId = e.target.dataset.id;
    console.log(e.target.dataset);
    const { data } = await removeFavorite({
      variables: {
        pets: petId,
      },
    });
    console.log(data);
    // window.location.reload();
  }

  let user;

  if (data) {
    user = data.user;
    console.log(data);
  }

  return (
    <>
      <div className="container">
        <Link to="/">← Back to Home</Link>

        {!loading ? (
          <div className="row text-center">
            <h3>{user.username}'s favorites list</h3>
            {user.favorites.map((favorite, index) => (
              <div className="pet-card col-5 mt-3 mx-5" key={index}>
                <h3 className="font-weight-bold">{favorite.name}</h3>
                <h4 className="text-warning">{favorite.breed}</h4>
                <h3>{favorite.age} years old</h3>
                <img alt="test" src={`/images/${favorite.image}`} />
                <button
                  className="mt-2 mb-3"
                  data-id={index}
                  onClick={handleFavorite}
                >
                  Remove from favorites
                </button>
              </div>
            ))}
          </div>
        ) : (
          <h2>Not working</h2>
        )}
      </div>
    </>
  );
}

export default Favorites;
