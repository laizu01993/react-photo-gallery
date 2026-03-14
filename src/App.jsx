import { useReducer, useState, useCallback, useMemo } from 'react';
import useFetchPhotos from './hooks/useFetchPhotos';
import { favouritesReducer, initialState } from './reducer/favouritesReducer';
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar';

function App() {
  const { photos, loading, error } = useFetchPhotos();
  const [search, setSearch] = useState('');
  const [favourites, dispatch] = useReducer(favouritesReducer, initialState);

  const handleSearch = useCallback((value) => setSearch(value), []);

  const filteredPhotos = useMemo(
    () => photos.filter(photo => photo.author.toLowerCase().includes(search.toLowerCase())),
    [photos, search]
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <SearchBar value={search} onChange={handleSearch} />
      <Gallery
        photos={filteredPhotos}
        favourites={favourites}
        dispatch={dispatch}
        loading={loading}
        error={error}
      />
    </div>
  );
}

export default App;