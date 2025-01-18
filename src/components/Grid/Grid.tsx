import React, { ReactNode, useState, Children } from 'react';
import './Grid.css';

interface Props {
  children: ReactNode;
}

const Grid: React.FC<Props> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [childrenPerPage] = useState<number>(8);
  const totalChildren = Children.count(children);
  const totalPages = Math.ceil(totalChildren / childrenPerPage);

  const handlePageChange = (increment: number) => {
    setCurrentPage(currentPage + increment);
  };

  const paginatedChildren = React.Children.toArray(children).slice(
    (currentPage - 1) * childrenPerPage,
    currentPage * childrenPerPage
  );

  const paginationButtons = (
    <div className="pagination">
      <button onClick={() => handlePageChange(-1)} disabled={currentPage <= 1}>
        previous
      </button>
      <button
        onClick={() => handlePageChange(1)}
        disabled={currentPage >= totalPages}
      >
        next
      </button>
    </div>
  );

  return (
    <div>
      {totalPages > 1 && paginationButtons}
      <div className="grid">{paginatedChildren}</div>
    </div>
  );
};

export default Grid;
