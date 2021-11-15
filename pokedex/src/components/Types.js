import React, {useEffect, useState} from 'react';
import ErrorApiTypes from './ErrorApiTypes';
import LoadingApiTypes from './LoadingApiTypes';
import InputCheckboxApiTypes from './InputCheckboxApiType';

export default function Types({ onTypeChange }){
  const [formData, setFormData] = useState({
    types: [],
    selectedTypes: [],
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

  const handleClickSelectedTypes = (event) => {
    const selectedTypessValue = event.target.value;
    if (formData.selectedTypes.includes(selectedTypessValue)){
      setFormData((prevState) => {
        const valorParaRemover = selectedTypessValue;
        const indexDoValorParaRemover = formData.selectedTypes.indexOf(valorParaRemover)
        
        prevState.selectedTypes.splice(indexDoValorParaRemover, 1)

        onTypeChange(prevState.selectedTypes)
  
        return {
          ...prevState,
          selectedTypes: prevState.selectedTypes
        }
      })
    } else {
      setFormData((prevState) => {
        onTypeChange([...prevState.selectedTypes, event.target.value])
        return {
          ...prevState,
          selectedTypes: [...prevState.selectedTypes, event.target.value]
        }
      })                    
    }
  }
  return (
    <div>
      <InputCheckboxApiTypes formData={formData} onSelectType={handleClickSelectedTypes}/>
      {TypesRequestState.isLoading && <LoadingApiTypes />}
      {TypesRequestState.error && !TypesRequestState.isLoading && <ErrorApiTypes fetchApiType={fetchApiType} />}
    </div>
  )
}
