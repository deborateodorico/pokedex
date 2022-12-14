import React, { useEffect, useState } from 'react';
import Error from './Error';
import Loading from './Loading';
import SearchForTypes from './SearchForTypes';

export default function Types({ onSelectType, selectedTypes }) {
  const [formData, setFormData] = useState({
    types: [],
  });
  const [TypesRequestState, setTypesRequestState] = useState({
    isLoading: false,
    error: false,
  });

  useEffect(() => {
    fetchApiType();
  }, []);

  const fetchApiType = async () => {
    const apiTypeUrl = process.env.REACT_APP_TYPE_API_ADDRESS;
    try {
      setTypesRequestState({
        ...TypesRequestState,
        isLoading: true,
      });
      const response = await fetch(apiTypeUrl);
      setTypesRequestState({
        ...TypesRequestState,
        isLoading: false,
      });
      const typeData = await response.json();
      setFormData({
        ...formData,
        types: typeData.results,
      });
    } catch (error) {
      setTypesRequestState({
        ...TypesRequestState,
        error: true,
        isLoading: false,
      });
    }
  };

  return (
    <div>
      <SearchForTypes
        formData={formData}
        onSelectType={onSelectType}
        selectedTypes={selectedTypes}
      />
      {TypesRequestState.isLoading && <Loading />}
      {TypesRequestState.error && !TypesRequestState.isLoading && (
        <Error fetch={fetchApiType} />
      )}
    </div>
  );
}
