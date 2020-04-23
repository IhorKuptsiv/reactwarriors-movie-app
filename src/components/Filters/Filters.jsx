import React from "react";
import SortBy from "./SortBy";
import ReleaseYear from "./ReleaseYear";
import Pagination from "./Pagination";

export default class Filters extends React.Component {
  render() {
    const {
      filters: { sort_by, primary_release_year},
      page,
      onChangeFilters,
      onChangePage,
      onChangeReset
      
    } = this.props;
    return (
      <form className="mb-3">
      <div>
      <button type="button" className="btn btn-light" onClick={onChangeReset}>
        Сбросить фильтры
      </button>
    </div>
   
        <SortBy sort_by={sort_by} onChangeFilters={onChangeFilters} />
        <ReleaseYear primary_release_year={primary_release_year} onChangeFilters={onChangeFilters} />
       
        <div className="btn-group">
        <button
          type="button"
          className="btn btn-light"
          disabled={page === 1}
          onClick={onChangePage.bind(null, page - 1)}
        >
          Назад
        </button>
        <button
          type="button"
          className="btn btn-light"
          onClick={onChangePage.bind(null, page + 1)}
        >
          Вперед
        </button>

        
      </div>
      
      </form>
    );
  }
}
