const sortItems = (items, sortText, isAscending) => {
  if (!sortText) return items;
  return items?.map((collection) =>
    [...collection]?.sort(
      (itemA, itemB) =>
        (itemA[sortText] > itemB[sortText] ? 1 : -1) * (isAscending ? 1 : -1),
    ),
  );
};

export default sortItems;
