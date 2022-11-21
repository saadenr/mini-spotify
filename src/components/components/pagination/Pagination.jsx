import React, { useState } from "react";

import "./Pagination.css";

const Pagination = (albums) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts =
    albums && albums.length ? albums.slice(firstPostIndex, lastPostIndex) : [];

  let pages = [];

  for (let i = 1; i <= Math.ceil(albums && albums.length / postsPerPage); i++) {
    pages.push(i);
  }

  return {
    data: currentPosts,
    render: (
      <div className="pagination">
        {pages.map((page, index) => {
          return (
            <button
              key={index}
              onClick={() => setCurrentPage(page)}
              className={page === currentPage ? "active" : ""}
            >
              {page}
            </button>
          );
        })}
      </div>
    ),
  };
};

export default Pagination;
