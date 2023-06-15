export function filterData(searchText, restaurants) {
    const filteredData = restaurants.filter((restaurant) =>
      restaurant?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
    );
    console.log('filtered:', filteredData);
    return filteredData;
};

export function filterUsersList(searchText, users) {
  const filteredData = users.filter((user) =>
    user?.firstname?.toLowerCase()?.includes(searchText?.toLowerCase())
  );
  console.log('filtered:', filteredData);
  return filteredData;
};