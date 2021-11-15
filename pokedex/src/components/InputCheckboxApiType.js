import React from 'react';

export default function InputCheckboxApiTypes({formData, onSelectType, types}) {
  return (
    <div>
      {formData.types.map((type) => {
        return (
          <label key={type.name}>
          {type.name}
          <input type="checkbox" name="type" value={type.name} className="Input-types" onChange={onSelectType}/>
        </label>
        )
      })}
    </div>
  )
}
