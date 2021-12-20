import React, { useState } from 'react';

export default function SearchFilters({
  filters,
  onCheckboxChange,
  selectedFilters,
  filterName,
}) {
  const [searchData, setSearchData] = useState({
    search: '',
  });

  const handleSearchChange = (event) => {
    setSearchData({
      ...searchData,
      search: event.target.value,
    });
  };
  const filteredFilters = filters.filter((item) => {
    const includesSearch = item.name.includes(searchData.search);
    return includesSearch;
  });

  return (
    <>
      <p>{filterName}</p>
      <input
        type='text'
        name='input-search'
        placeholder='Search filter...'
        onChange={handleSearchChange}
        className='search-filters'
      />
      <div className='filter-container'>
        {filteredFilters.map((item) => {
          return (
            <div>
              <label key={item.name}>
                {item.name}
                <input
                  type='checkbox'
                  name='item-filtered'
                  value={item.name}
                  className='input-filtered'
                  checked={selectedFilters.includes(item.name)}
                  onChange={onCheckboxChange}
                />
              </label>
            </div>
          );
        })}
      </div>
    </>
  );
}
