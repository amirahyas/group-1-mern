import { Link } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";

function Favorites() {
  const { loading, data } = useQuery(QUERY_USER, {
    updateCache: function(cache) {
        cache.modify({
            fields: {
                someRootField: function(value, {INVALIDATE}) {
                    return INVALIDATE;
                }
            }
        })
    }
  });
  let user;

  if (data) {
    user = data.user;
    console.log(data)
  }

  return (
    <>
      <div className="container my-1">
        <Link to="/">← Back to Home</Link>

        {!loading ? (
          <>
            <h1>Favorited pets for {user.username}</h1>
            {user.favorites.map((favorite, index) => (
                <div key={index}>

                    <h1>{favorite.name}</h1>
                    <h2>{favorite.breed}</h2>
                    <h2>{favorite.age}</h2>
                </div>
            ) )

            }
            
          </>
        ) : <h2>Not working</h2>}
      </div>
    </>
  );
}

export default Favorites;
