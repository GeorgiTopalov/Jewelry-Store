import { usePagination } from "../../hooks/Pagination";

const PaginationComponent = ({ totalCount, pageSize, siblingCount, currentPage, onPageChange }) => {
    const paginationRange = usePagination({ totalCount, pageSize, siblingCount, currentPage });
  
    return (
      <nav>
        <ul>
          {paginationRange.map((pageNumber, index) => 
            pageNumber === '...' ? (
              <li key={index}>...</li>
            ) : (
              <li key={pageNumber}>
                <button
                  onClick={() => onPageChange(pageNumber)}
                  aria-current={pageNumber === currentPage ? 'page' : undefined}
                  aria-label={`Go to page ${pageNumber}`}
                >
                  {pageNumber}
                </button>
              </li>
            )
          )}
        </ul>
      </nav>
    );
  };

  export default PaginationComponent;