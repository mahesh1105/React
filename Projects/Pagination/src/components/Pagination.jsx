import React from "react";

const Pagination = ({currentPage, numberOfPages, leftClickFunc, rightClickFunc, pageChangeFunc}) => {

    return (
      <div className="pagination-cont">
        <button 
          disabled={currentPage === 0} 
          className='page-number' 
          onClick={() => leftClickFunc()} 
        >
          ◀️
        </button>

        {...Array(numberOfPages).keys().map((num) => {
          return (
            <button 
              key={num} 
              className={`page-number ${currentPage === num ? 'active' : ''}`}
              onClick={() => pageChangeFunc(num)}
            >
              {num}
            </button>
          )
        })}

        <button 
          disabled={currentPage === numberOfPages-1} 
          className='page-number' 
          onClick={() => rightClickFunc()} 
        >
          ▶️
        </button>
      </div>
    );
}

export default Pagination;