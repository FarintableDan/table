import React, { useState } from 'react';

import { getCurrentPage, getMaxPage } from "../helpers";
import { fieldsToRender, ITEMS_ON_PAGE } from "../constants";
import { useSortableData } from "../hooks";

import { Pagination } from "./Pagination";
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";

import { ReactComponent as TrashIcon } from '../icons/trash.svg';

export const Table = ({ data, header }) => {
  const [ page, setPage ] = useState(0);
  const maxPage = getMaxPage(data, ITEMS_ON_PAGE);
  const { items, requestSort, sortConfig } = useSortableData(data);

  const resetFilter = () => {
    requestSort(null)
  }

  const currentPage = getCurrentPage(items, page);

  return (
    <div className="table">
      <TableHeader
        setFilter={requestSort}
        header={header}
        filter={sortConfig}
      />
      {currentPage.map(item => (
        <TableRow
          item={item}
          fieldsToRender={fieldsToRender}
          key={item.id}
        />
      ))}
      <div className="table__footer">
        <Pagination
          maxPage={maxPage}
          setPage={setPage}
          activePage={page}
        />
        <button
          className="button button_reset"
          onClick={() => resetFilter()}
        >
          <span>
            <TrashIcon />
          </span>
          Сбросить
        </button>
      </div>
    </div>
  )
}