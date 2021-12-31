import React, { useState } from 'react';

export default function SearchFilters({
  filters,
  onCheckboxChange,
  selectedFilters,
  filterName,
}) {
  const [formData, setFormData] = useState({
    search: '',
  });

  const searchInputvalue = (event) => {
    setFormData({
      ...formData,
      search: event.target.value,
    });
  };

  const filteredFilters = filters.filter((item) => {
    const includesSearch = item.name.includes(formData.search);
    return includesSearch;
  });

  return (
    <div>
      <div className='search'>
        <p className='search__name'>{filterName}</p>
        <input
          type='text'
          name='input-search'
          value={formData.search}
          placeholder='Search...'
          onChange={searchInputvalue}
          className='search__filters'
        />
      </div>
      <div className='filter'>
        {filteredFilters.map((item) => {
          return (
            <div>
              <label key={item.name} className='filter__label'>
                <input
                  type='checkbox'
                  name='item-filtered'
                  value={item.name}
                  className='filter__label__input-filtered'
                  checked={selectedFilters.includes(item.name)}
                  onChange={onCheckboxChange}
                />
                <span className='filter__label__value'>{item.name}</span>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
