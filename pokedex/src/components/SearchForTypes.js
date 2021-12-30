import React from 'react';

export default function SearchForTypes({
  formData,
  onSelectType,
  selectedTypes,
}) {
  return (
    <div className='types'>
      <p className='types__paragraph'>Types</p>
      {formData.types.map((type) => {
        return (
          <label key={type.name} className='types__section'>
            <input
              type='checkbox'
              name='type'
              value={type.name}
              className='types__section__input'
              checked={selectedTypes.includes(type.name)}
              onChange={onSelectType}
            />
            <span className='types__section__value'>{type.name}</span>
          </label>
        );
      })}
    </div>
  );
}
