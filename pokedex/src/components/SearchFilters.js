import React from 'react';

export default function SearchFilters({
  filters,
  onCheckboxChange,
  selectedFilters,
  onSearchValue,
  search,
}) {
  const filteredFilters = filters.filter((item) => {
    const includesSearch = item.name.includes(search);
    return includesSearch;
  });

  return (
    <>
      <p>Moves</p>
      <input
        type='text'
        name='input-search'
        placeholder='Search filter...'
        onChange={onSearchValue}
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
