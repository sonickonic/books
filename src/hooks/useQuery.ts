import { useLocation } from 'react-router-dom';

export const DEFAULT_PAGE = 1;
export const DEFAULT_ITEMS_PER_PAGE = 10;

export const useQuery = () => {
  const query = new URLSearchParams(useLocation().search);

  const page = Number(query.get('page')) || DEFAULT_PAGE;
  const itemsPerPage =
    Number(query.get('itemsPerPage')) || DEFAULT_ITEMS_PER_PAGE;

  const filtersValues = new Array(query.get('q')).filter(Boolean) as string[];
  const filters = filtersValues.length
    ? [{ type: 'all', values: filtersValues }]
    : [];

  if (filters.length) return { page, itemsPerPage, filters };

  return { page, itemsPerPage };
};
