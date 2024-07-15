// import React, { useState } from 'react';

// function SearchBar({ onSearch }) {
//   const [city, setCity] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onSearch(city);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//         placeholder="Enter a city..."
//         required
//       />
//       <button type="submit">Search</button>
//     </form>
//   );
// }

// export default SearchBar;



import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [city, setCity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(city);
  };

  return (
    <form className="col" onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={e => setCity(e.target.value)}
        placeholder="Search city..."
        className="search-form"
        autoComplete="off"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
