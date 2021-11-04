import React, {useEffect, useState} from 'react';
import ErrorApiTypes from './ErrorApiTypes';
import LoadingApiTypes from './LoadingApiTypes';

export default function Types(){

  const [formData, setFormData] = useState({
    types: [],
  })
  const [TypesRequestState, setTypesRequestState] = useState({
    isLoading: false,
    error: false,
  })

  useEffect(() => {
    fetchApiType()
  }, []);
    
  const fetchApiType = async () => {
    const apiTypeUrl = process.env.REACT_APP_TYPE_API_ADRESS;
    try {
      setTypesRequestState({
        ...TypesRequestState,
        isLoading: true,
      })
    const response = await fetch(apiTypeUrl);
    setTypesRequestState({
      ...TypesRequestState,
      isLoading: false,
    })
    const typeData = await response.json();
    setFormData({
      ...formData,
      types: typeData.results,
    })
    } catch(error){
      setTypesRequestState({
          ...TypesRequestState,
          error: true,
          isLoading: false,
        })
    }
  }
  return (
    <div>
        {formData.types.map((type) => {
          return (
            <label>
            {type.name}
            <input type="checkbox" name="type" className="Input-types"/>
          </label>
          )
        })}
      {TypesRequestState.error && <ErrorApiTypes />}
      {TypesRequestState.isLoading && <LoadingApiTypes />}
      </div>
  )
}
