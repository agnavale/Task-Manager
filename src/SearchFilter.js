import React from "react";

const SearchFilter = ({ search, setSearch, filter, setFilter }) => {
  return (
    <div className="search-filter">
      <input type="text" placeholder="Search tasks..." value={search} onChange={e => setSearch(e.target.value)} />
      <select value={filter} onChange={e => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="High">High Priority</option>
        <option value="Medium">Medium Priority</option>
        <option value="Low">Low Priority</option>
      </select>
    </div>
  );
};

export default SearchFilter;
