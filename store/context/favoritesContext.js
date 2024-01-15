import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorites: () => {},
  removeFavorites: () => {},
});

function FavoritesContextProvider({ children }) {
  //state
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  //fucn
  const addFavorites = (id) => {
    // console.log(id, "adddd");
    setFavoriteMealIds((prev) => [...prev, id]);
  };
  const removeFavorites = (id) => {
    const filteredArr = favoriteMealIds.filter((i) => i !== id);
    // console.log({ filteredArr, id }, "removed");
    setFavoriteMealIds(filteredArr);
  };

  //
  const value = {
    ids: favoriteMealIds,
    addFavorites,
    removeFavorites,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
