export function filterData(searchText, restaurants) {
    const filteredData = restaurants.filter((restaurant) =>
      restaurant?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
    );
    console.log('filtered:', filteredData);
    return filteredData;
};