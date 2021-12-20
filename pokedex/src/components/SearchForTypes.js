import React from 'react';

export default function SearchForTypes({
  formData,
  onSelectType,
  selectedTypes,
}) {
  return (
    <div className='container-types'>
      <p className='type-paragraph'>Types</p>
      {formData.types.map((type) => {
        return (
          <label key={type.name} className='label-type'>
            <input
              type='checkbox'
              name='type'
              value={type.name}
              className='input-type'
              checked={selectedTypes.includes(type.name)}
              onChange={onSelectType}
            />
            <span className='type-value'>{type.name}</span>
          </label>
        );
      })}
    </div>
  );
}
