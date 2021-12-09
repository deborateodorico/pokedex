import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import Error from './Error';
import SearchForAbilitys from './SearchForAbilitys';

export default function Abilitys({ abilitys, onCheckboxAbilitysChange }) {
  const [formData, setFormData] = useState({
    abilitys: [],
    search: '',
  });
  const [abilitysRequestState, setAbilitysRequestState] = useState({
    isLoading: false,
    error: false,
  });

  useEffect(() => {
    fetchApiAbilitys();
  }, []);

  const apiAbilityUrl = process.env.REACT_APP_ABILITY_API_ADDRESS;

  const handleSearchChange = (event) => {
    setFormData({
      ...formData,
      search: event.target.value,
    });
  };

  const fetchApiAbilitys = async () => {
    try {
      setAbilitysRequestState({
        ...abilitysRequestState,
        isLoading: true,
      });
      const response = await fetch(apiAbilityUrl);
      setAbilitysRequestState({
        ...abilitysRequestState,
        isLoading: false,
      });
      const abilityData = await response.json();
      setFormData({
        ...formData,
        abilitys: abilityData.results,
      });
    } catch (error) {
      setAbilitysRequestState({
        ...abilitysRequestState,
        error: true,
        isLoading: false,
      });
    }
  };
  return (
    <div>
      {abilitysRequestState.isLoading && <Loading />}
      {abilitysRequestState.error && !abilitysRequestState.isLoading && (
        <Error fetch={apiAbilityUrl} />
      )}
      <SearchForAbilitys
        selectedAbilitys={abilitys}
        onCheckboxAbilitysChange={onCheckboxAbilitysChange}
        abilitys={formData.abilitys}
        search={formData.search}
        onSearchValue={handleSearchChange}
      />
    </div>
  );
}
