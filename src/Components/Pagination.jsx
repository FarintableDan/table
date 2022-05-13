import React from 'react';

export const Pagination = ({setPage, activePage, maxPage}) => {
  return (
    <div className="pagination">
      <button
        onClick={() => setPage(activePage - 1)}
        className="pagination__arrow pagination__prev"
        disabled={activePage === 0}
      >
        {'<'}
      </button>
      {[...Array(Math.ceil(maxPage))].map((page, index) => (
        <button
          onClick={() => setPage(index)}
          className={`pagination__button ${index === activePage ? "pagination__button_active" : ''}`}
          key={index}
        >
          <span>{index + 1}</span>
        </button>
      ))}
      <button
        onClick={() => setPage(activePage + 1)}
        className="pagination__arrow pagination__next"
        disabled={activePage === maxPage - 1}
      >
        {'>'}
      </button>
    </div>
  )
}