import React from 'react';

export default function InputCheckbox({weights, heights, onCheckboxWeightsChange, onCheckboxHeightsChange}) {

    return (
        <div>
        <div>
          <p>weights</p>
          <label>
            1
            <input type="checkbox" name="pokemon-weigths" value="1" checked={weights.includes("1")} onChange={onCheckboxWeightsChange}/>
          </label>
          <label>
            2
            <input type="checkbox" name="pokemon-weigths" value="2" checked={weights.includes("2")} onChange={onCheckboxWeightsChange}/>
          </label>
          <label>
            3
            <input type="checkbox" name="pokemon-weigths" value="3" checked={weights.includes("3")} onChange={onCheckboxWeightsChange}/>
          </label>
          <label>
            4
            <input type="checkbox" name="pokemon-weigths" value="4" checked={weights.includes("4")} onChange={onCheckboxWeightsChange}/>
          </label>
          <label>
            5
            <input type="checkbox" name="pokemon-weigths" value="5" checked={weights.includes("5")} onChange={onCheckboxWeightsChange}/>
          </label>
        </div>
        <div>
          <p>heights</p>
          <label>
            1
            <input type="checkbox" name="pokemon-heights" value="1" checked={heights.includes("1")} onChange={onCheckboxHeightsChange}/>
          </label>
          <label>
            2
            <input type="checkbox" name="pokemon-heights" value="2" checked={heights.includes("2")} onChange={onCheckboxHeightsChange}/>
          </label>
          <label>
            3
            <input type="checkbox" name="pokemon-heights" value="3" checked={heights.includes("3")} onChange={onCheckboxHeightsChange}/>
          </label>
          <label>
            4
            <input type="checkbox" name="pokemon-heights" value="4" checked={heights.includes("4")} onChange={onCheckboxHeightsChange}/>
          </label>
          <label>
            5
            <input type="checkbox" name="pokemon-heights" value="5" checked={heights.includes("5")} onChange={onCheckboxHeightsChange}/>
          </label>
        </div>
      </div>
    )
}
