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
    <div>
      <div className='search-container'>
        <p className='filter-name'>{filterName}</p>
        <input
          type='text'
          name='input-search'
          placeholder='Search...'
          onChange={handleSearchChange}
          className='search-filters'
        />
      </div>
      <div className='filter-container'>
        {filteredFilters.map((item) => {
          return (
            <div>
              <label key={item.name} className='label-search'>
                <input
                  type='checkbox'
                  name='item-filtered'
                  value={item.name}
                  className='input-filtered'
                  checked={selectedFilters.includes(item.name)}
                  onChange={onCheckboxChange}
                />
                <span className='search-value'>{item.name}</span>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
