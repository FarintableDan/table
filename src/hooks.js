import React from "react";

export const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (Number(a[sortConfig.key]) < Number(b[sortConfig.key])) {
          return sortConfig.direction === 'increase' ? -1 : 1;
        }
        if (Number(a[sortConfig.key]) > Number(b[sortConfig.key])) {
          return sortConfig.direction === 'increase' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'increase';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'increase'
    ) {
      direction = 'dicrease';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};