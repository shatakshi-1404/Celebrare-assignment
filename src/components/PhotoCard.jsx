export default function PhotoCard({ photo, isFav, toggleFav }) {
  return (
    <div className="bg-white shadow rounded p-2 hover:scale-105 transition-transform duration-200">


      <img
  src={photo.download_url}
  alt={photo.author}
  loading="lazy"
  className="w-full h-48 object-cover rounded"
/>


      <div className="flex justify-between items-center mt-2">

        <p className="text-sm font-medium">{photo.author}</p>

        <button
          onClick={() => toggleFav(photo.id)}
          className="text-xl"
        >
          {isFav ? "❤️" : "🤍"}
        </button>

      </div>
    </div>
  );
}
