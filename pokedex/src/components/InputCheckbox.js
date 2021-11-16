import React from 'react';

export default function InputCheckbox({weights, heights, checkboxWeights, checkboxHeights}) {

    return (
        <div>
        <div>
          <p>weights</p>
          <label>
            1
            <input type="checkbox" name="pokemon-weigths" value="1" checked={weights.includes("1")} onChange={checkboxWeights}/>
          </label>
          <label>
            2
            <input type="checkbox" name="pokemon-weigths" value="2" checked={weights.includes("2")} onChange={checkboxWeights}/>
          </label>
          <label>
            3
            <input type="checkbox" name="pokemon-weigths" value="3" checked={weights.includes("3")} onChange={checkboxWeights}/>
          </label>
          <label>
            4
            <input type="checkbox" name="pokemon-weigths" value="4" checked={weights.includes("4")} onChange={checkboxWeights}/>
          </label>
          <label>
            5
            <input type="checkbox" name="pokemon-weigths" value="5" checked={weights.includes("5")} onChange={checkboxWeights}/>
          </label>
        </div>
        <div>
          <p>heights</p>
          <label>
            1
            <input type="checkbox" name="pokemon-heights" value="1" checked={heights.includes("1")} onChange={checkboxHeights}/>
          </label>
          <label>
            2
            <input type="checkbox" name="pokemon-heights" value="2" checked={heights.includes("2")} onChange={checkboxHeights}/>
          </label>
          <label>
            3
            <input type="checkbox" name="pokemon-heights" value="3" checked={heights.includes("3")} onChange={checkboxHeights}/>
          </label>
          <label>
            4
            <input type="checkbox" name="pokemon-heights" value="4" checked={heights.includes("4")} onChange={checkboxHeights}/>
          </label>
          <label>
            5
            <input type="checkbox" name="pokemon-heights" value="5" checked={heights.includes("5")} onChange={checkboxHeights}/>
          </label>
        </div>
      </div>
    )
}
