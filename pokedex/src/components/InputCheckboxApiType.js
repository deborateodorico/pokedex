import React from 'react';

export default function InputCheckboxApiTypes({formData, onSelectType, selectedTypes}) {
  return (
    <div>
      {formData.types.map((type) => {
        return (
          <label key={type.name}>
          {type.name}
          <input type="checkbox" name="type" value={type.name} className="Input-types" checked={selectedTypes.includes(type.name)} onChange={onSelectType}/>
        </label>
        )
      })}
    </div>
  )
}
