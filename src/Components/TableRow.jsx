import React from 'react';

import { getInNested } from "../helpers";

export const TableRow = ({ item, fieldsToRender }) => {
  return (
    <div className="table__row">
      {fieldsToRender.map((field, index) => (
        <div key={index} className="table__cell">
          {Array.isArray(field) === true && (
            getInNested(item, field)
          )}
          {Array.isArray(field) === false && item[field] !== undefined && (
            item[field]
          )}
        </div>
      ))}
    </div>
  )
}