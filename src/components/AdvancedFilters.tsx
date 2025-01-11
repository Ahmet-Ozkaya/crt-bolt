import { useState } from 'react';
    import { useAppContext } from '../context/AppContext';
    import { FiX } from 'react-icons/fi';

    export default function AdvancedFilters() {
      const { state, dispatch } = useAppContext();
      const [showFilters, setShowFilters] = useState(false);

      const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        dispatch({
          type: 'SET_FILTERS',
          payload: { [name]: value }
        });
      };

      return (
        <div className="filters-container">
          <button 
            className="toggle-filters"
            onClick={() => setShowFilters(!showFilters)}
          >
            {showFilters ? <FiX /> : 'Advanced Filters'}
          </button>

          {showFilters && (
            <div className="filters-panel">
              <div className="filter-group">
                <label>Skills</label>
                <input
                  type="text"
                  name="skills"
                  value={state.filters.skills.join(', ')}
                  onChange={(e) => 
                    dispatch({
                      type: 'SET_FILTERS',
                      payload: { skills: e.target.value.split(', ') }
                    })
                  }
                />
              </div>

              <div className="filter-group">
                <label>Rate Range</label>
                <div className="range-inputs">
                  <input
                    type="number"
                    name="minRate"
                    value={state.filters.rateRange[0]}
                    onChange={(e) =>
                      dispatch({
                        type: 'SET_FILTERS',
                        payload: { 
                          rateRange: [
                            Number(e.target.value),
                            state.filters.rateRange[1]
                          ]
                        }
                      })
                    }
                  />
                  <span>to</span>
                  <input
                    type="number"
                    name="maxRate"
                    value={state.filters.rateRange[1]}
                    onChange={(e) =>
                      dispatch({
                        type: 'SET_FILTERS',
                        payload: { 
                          rateRange: [
                            state.filters.rateRange[0],
                            Number(e.target.value)
                          ]
                        }
                      })
                    }
                  />
                </div>
              </div>

              <div className="filter-group">
                <label>Location</label>
                <input
                  type="text"
                  name="location"
                  value={state.filters.location}
                  onChange={handleFilterChange}
                />
              </div>
            </div>
          )}
        </div>
      );
    }
