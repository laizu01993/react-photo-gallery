import PhotoCard from './PhotoCard';

export default function Gallery({ photos, favourites, dispatch, loading, error }) {
  
    if (loading) return (
  <div className="flex justify-center items-center min-h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
  </div>
);

  if (error) return <p className="text-center p-4 text-red-500">{error}</p>;

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {photos.map((photo) => (
        <PhotoCard
          key={photo.id}
          photo={photo}
          isFavourite={favourites.some(fav => fav.id === photo.id)}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
}