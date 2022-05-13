import React from 'react';

import { ReactComponent as FilterIcon } from '../icons/filter.svg';

export const TableHeader = ({header, setFilter, filter}) => {
  return (
    <div className="table__header">
      <div className="table__row">
        {Object.keys(header).map(item => (
          <div
            key={item}
            onClick={() => header[item].controller && setFilter(item === filter ? null : item)}
            className={`table__cell ${filter && item === filter.key ? "table__cell_active" : ''}`}
          >
            {header[item].controller && (
              <span
                className={`table__row__icon ${filter ? `table__row__icon_${filter.direction}` : ''}`}
              >
                <FilterIcon />
              </span>
            )}
            <span>{header[item].title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}