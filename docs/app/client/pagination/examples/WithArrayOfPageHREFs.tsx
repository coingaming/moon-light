"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { IconButton, Pagination } from "@heathmont/moon-core-tw";
import {
  ControlsChevronLeftSmall,
  ControlsChevronRightSmall,
} from "@heathmont/moon-icons-tw";

const WithArrayOfPageHREFs = () => {
  const [page, setPage] = useState<number>(0);
  const handlePageChange = useCallback((page: number) => {
    setPage(page);
  }, []);
  const hrefsArray = useMemo(() => {
    return Array.from({ length: 10 }, (_, i) => `#?${i + 1}`);
  }, []);
  useEffect(() => {
    // set initial route
    if (window.location.hash !== "") {
      setPage(parseInt(window.location.hash.slice(2) || "1") - 1);
    }
  }, []);

  return (
    <Pagination
      totalPages={hrefsArray.length}
      hrefsArray={hrefsArray}
      currentPage={page}
      setCurrentPage={handlePageChange}
    >
      <Pagination.PrevButton as="a" href={hrefsArray[page - 1]}>
        {({ disabled }) => (
          <IconButton
            icon={<ControlsChevronLeftSmall className="rtl:rotate-180" />}
            variant="outline"
            size="sm"
            disabled={disabled}
            aria-label="Previous"
          />
        )}
      </Pagination.PrevButton>
      <Pagination.Pages />
      <Pagination.NextButton as="a" href={hrefsArray[page + 1]}>
        {({ disabled }) => (
          <IconButton
            icon={<ControlsChevronRightSmall className="rtl:rotate-180" />}
            variant="outline"
            size="sm"
            disabled={disabled}
            aria-label="Next"
          />
        )}
      </Pagination.NextButton>
    </Pagination>
  );
};

export default WithArrayOfPageHREFs;
