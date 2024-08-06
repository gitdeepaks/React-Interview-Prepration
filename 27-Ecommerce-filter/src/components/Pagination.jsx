function Pagination({ products, page, setPage, maxVisiblePage = 5 }) {
  const totalPages = Math.ceil(products.length / 10);
  function selectPageHandler(selectedPage) {
    if (
      selectedPage >= 1 &&
      selectedPage <= products.length / 10 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  }

  function renderPageKey(currPage, key) {
    return (
      <span
        key={key}
        className={page === currPage ? "pagination__selected" : ""}
        onClick={() => selectPageHandler(currPage)}
      >
        {currPage}
      </span>
    );
  }

  function renderPageNumbers() {
    const pageNumber = [];
    if (totalPages <= maxVisiblePage) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumber.push(renderPageKey(i));
      }
    } else {
      // truncation logic
      const startPage = Math.max(1, page - Math.floor(maxVisiblePage / 2));
      const endPage = Math.min(totalPages, startPage + maxVisiblePage - 1);
      if (startPage > 1) {
        if (startPage > 2) pageNumber.push(renderPageKey(1));

        pageNumber.push(renderPageKey("...", "ellipsis-start"));
      }
      for (let i = startPage; i <= endPage; i++) {
        pageNumber.push(renderPageKey(i));
      }
      if (endPage < totalPages) {
        pageNumber.push(renderPageKey("...", "ellipsis-end"));
        if (endPage < totalPages - 1) {
          pageNumber.push(renderPageKey(totalPages));
        }
      }
    }
    return pageNumber;
  }
  return (
    <div className="pagination">
      <span
        onClick={() => selectPageHandler(page - 1)}
        className={page > 1 ? "" : "pagination__disable"}
      >
        ◀
      </span>

      {/* {[...Array(products.length / 10)].map((_, i) => {
        return (
          <span
            key={i}
            className={page === i + 1 ? "pagination__selected" : ""}
            onClick={() => selectPageHandler(i + 1)}
          >
            {i + 1}
          </span>
        );
      })} */}

      {renderPageNumbers()}

      <span
        onClick={() => selectPageHandler(page + 1)}
        className={page < products.length / 10 ? "" : "pagination__disable"}
      >
        ▶
      </span>
    </div>
  );
}
export default Pagination;
