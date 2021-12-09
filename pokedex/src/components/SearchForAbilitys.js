import React from 'react';

export default function SearchForAbilitys({
  abilitys,
  onCheckboxAbilitysChange,
  selectedAbilitys,
  onSearchValue,
  search,
}) {
  console.log(abilitys);
  const filteredAbilitys = abilitys.filter((item) => {
    const includesSearch = item.name.includes(search);
    return includesSearch;
  });

  return (
    <>
      <p>Abilitys</p>
      <input
        type='text'
        name='input-search-ability'
        placeholder='Search abilitys...'
        onChange={onSearchValue}
      />
      <div className='abilitys-container'>
        {filteredAbilitys.map((ability) => {
          return (
            <div>
              <label key={ability.name}>
                {ability.name}
                <input
                  type='checkbox'
                  name='ability'
                  value={ability.name}
                  className='input-abilitys'
                  checked={selectedAbilitys.includes(ability.name)}
                  onChange={onCheckboxAbilitysChange}
                />
              </label>
            </div>
          );
        })}
      </div>
    </>
  );
}
