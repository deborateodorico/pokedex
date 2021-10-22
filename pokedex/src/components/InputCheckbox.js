import React from 'react';

export default function InputCheckbox({weigths, heights, checkboxWeigths, checkboxHeights}) {
    return (
        <div>
        <div>
          <p>weights</p>
          <label>
            1
            <input type="checkbox" name="pokemon-weigths" value="1" checked={weigths === "1"} onChange={checkboxWeigths}/>
          </label>
          <label>
            2
            <input type="checkbox" name="pokemon-weigths" value="2" checked={weigths === "2"} onChange={checkboxWeigths}/>
          </label>
          <label>
            3
            <input type="checkbox" name="pokemon-weigths" value="3" checked={weigths === "3"} onChange={checkboxWeigths}/>
          </label>
          <label>
            4
            <input type="checkbox" name="pokemon-weigths" value="4" checked={weigths === "4"} onChange={checkboxWeigths}/>
          </label>
          <label>
            5
            <input type="checkbox" name="pokemon-weigths" value="5" checked={weigths === "5"} onChange={checkboxWeigths}/>
          </label>
        </div>
        <div>
          <p>heights</p>
          <label>
            1
            <input type="checkbox" name="pokemon-heights" value="1" checked={heights === "1"} onChange={checkboxHeights}/>
          </label>
          <label>
            2
            <input type="checkbox" name="pokemon-heights" value="2" checked={heights === "2"} onChange={checkboxHeights}/>
          </label>
          <label>
            3
            <input type="checkbox" name="pokemon-heights" value="3" checked={heights === "3"} onChange={checkboxHeights}/>
          </label>
          <label>
            4
            <input type="checkbox" name="pokemon-heights" value="4" checked={heights === "4"} onChange={checkboxHeights}/>
          </label>
          <label>
            5
            <input type="checkbox" name="pokemon-heights" value="5" checked={heights === "5"} onChange={checkboxHeights}/>
          </label>
        </div>
      </div>
    )
}
