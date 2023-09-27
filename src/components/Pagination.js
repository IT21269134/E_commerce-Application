import "./Pagination.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Function to handle previous page click
  const handlePreviousClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  // Function to handle next page click
  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };
  return (
    <footer className="pagination2">
      <div className="showing-1-6-from1">Showing 1-6 from {totalPages}</div>
      <ol className="pagination3">
        <div className="button2">
          <div className="icon21" onClick={handlePreviousClick}>
            <img
              className="fi-rr-caret-left-icon1"
              alt=""
              src="/firrcaretleft1.svg"
            />
          </div>
        </div>

        {pageNumbers.map((pageNumber) => (
          <div className="number6">
            <div className="button2" onClick={() => onPageChange(pageNumber)}>
              <li
                key={pageNumber}
                className={`number6 ${
                  currentPage === pageNumber ? "active" : ""
                }`}
              >
                <div className="div18">{pageNumber}</div>
              </li>
            </div>
          </div>
        ))}
        <div className="button2">
          <div className="div18">...</div>
        </div>
        <div className="button2">
          <div className="icon21" onClick={handleNextClick}>
            <img
              className="fi-rr-caret-left-icon1"
              alt=""
              src="/fisrcaretright2.svg"
            />
          </div>
        </div>
      </ol>
    </footer>
  );
};

export default Pagination;
