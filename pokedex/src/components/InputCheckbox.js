import React from 'react';

export default function InputCheckbox({onCheckboxWeightsChange, onCheckboxHeightsChange}) {
const weightsOrHeights = [1,2,3,4,5];
    return (
      <>
        <div>
          <p>Weights</p>
          {weightsOrHeights.map((weight) => {
            return(
              <label key={weight}>
                {weight}
                <input type="checkbox" name="weight" value={weight} className="Input-weight" onChange={onCheckboxWeightsChange}/>
              </label>
            )
          })}
        </div>
        <div>
          <p>Heights</p>
            {weightsOrHeights.map((height) => {
              return(
                <label key={height}>
                  {height}
                  <input type="checkbox" name="weight" value={height} className="Input-weight" onChange={onCheckboxHeightsChange}/>
                </label>
              )
          })}
        </div>
      </>
    )
}
