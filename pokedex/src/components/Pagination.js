import React from 'react';

export default function Pagination() {
  return(
    <>
      <select name="paginates" id="paginates-select">
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      <button type="button">Previous Page</button>
      <button type="button">Next Page</button>
  </>
  )
}
