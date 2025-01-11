import { useState } from 'react';
    import { FiSearch } from 'react-icons/fi';

    export default function SearchBar() {
      const [query, setQuery] = useState('');

      const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // Implement search logic
      };

      return (
        <form className="search-bar" onSubmit={handleSearch}>
          <div className="search-input">
            <FiSearch />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search staff by name, skills..."
            />
          </div>
          <button type="submit" className="btn-primary">
            Search
          </button>
        </form>
      );
    }
