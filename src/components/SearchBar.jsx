export default function SearchBar({ value, onChange }) {
  return (
    <div className="p-4 text-center">
      <input
        type="text"
        placeholder="Search by author"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full md:w-1/2 p-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
}