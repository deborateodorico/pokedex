import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import Error from './Error';
import SearchFilters from './SearchFilters';

export default function FetchFilter({
  apiFilter,
  selectedFilters,
  onCheckboxChange,
  filterName,
  searchInputValue,
  searchChange,
}) {
  const [formData, setFormData] = useState({
    filter: [],
  });

  const [filterRequestState, setFilterRequestState] = useState({
    isLoading: false,
    error: false,
  });

  useEffect(() => {
    handleFetchApiFilter();
  }, []);

  const handleFetchApiFilter = async () => {
    try {
      setFilterRequestState({
        ...filterRequestState,
        isLoading: true,
      });
      const response = await fetch(apiFilter);
      setFilterRequestState({
        ...filterRequestState,
        isLoading: false,
      });
      const filterData = await response.json();
      setFormData({
        ...formData,
        filter: filterData.results,
      });
    } catch (error) {
      setFilterRequestState({
        ...filterRequestState,
        error: true,
        isLoading: false,
      });
    }
  };

  return (
    <div>
      {filterRequestState.isLoading && <Loading />}
      {filterRequestState.error && !filterRequestState.isLoading && (
        <Error fetch={apiFilter} />
      )}
      <SearchFilters
        filters={formData.filter}
        selectedFilters={selectedFilters}
        onCheckboxChange={onCheckboxChange}
        filterName={filterName}
        searchInputValue={searchInputValue}
        searchChange={searchChange}
      />
    </div>
  );
}
