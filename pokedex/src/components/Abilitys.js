import React, { useState } from 'react';
import SearchForAbilitys from './SearchForAbilitys';
import FetchFilter from './FetchFilter';

export default function Abilitys({ abilitys, onCheckboxAbilitysChange }) {
  const [formData, setFormData] = useState({
    search: '',
  });

  const handleSearchChange = (event) => {
    setFormData({
      ...formData,
      search: event.target.value,
    });
  };

  const apiAbilityUrl = process.env.REACT_APP_ABILITY_API_ADDRESS;

  return (
    <div>
      <FetchFilter apiFilter={apiAbilityUrl} />
      <SearchForAbilitys
        selectedAbilitys={abilitys}
        onCheckboxAbilitysChange={onCheckboxAbilitysChange}
        abilitys={abilitys}
        search={formData.search}
        onSearchValue={handleSearchChange}
      />
    </div>
  );
}
