export default function PhotoCard({ photo, isFavourite, dispatch }) {
  const toggleFavourite = () => {
    dispatch({
      type: isFavourite ? 'REMOVE_FAVOURITE' : 'ADD_FAVOURITE',
      payload: photo,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
      <img
        src={photo.download_url}
        alt={photo.author}
        className="w-full h-48 object-cover"
      />
      <div className="p-2 flex justify-between items-center">
        <p className="text-sm font-medium">{photo.author}</p>
        <button
          onClick={toggleFavourite}
          className={`text-2xl ${isFavourite ? 'text-red-500' : 'text-gray-500'}`}
        >
          ♥
        </button>
      </div>
    </div>
  );
}