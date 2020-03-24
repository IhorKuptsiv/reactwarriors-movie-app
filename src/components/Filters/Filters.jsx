import React from "react";

export default class Filters extends React.Component {
  render() {
    const {filters: {sort_by,primary_release_year},
    page,
    onChangeFilters,
    onChangePage
  
  } = this.props;
    return (
      <form className="mb-3">
        <div className="form-group">
          <label htmlFor="sort_by">Сортировать по:</label>
          <select className="form-control" 
          id="sort_by"
          value={sort_by} 
          name="sort_by"
          onChange={onChangeFilters}>
            <option value="popularity.desc">Популярные по убыванию</option>
            <option value="popularity.asc">Популярные по возростанию</option>
            <option value="vote_average.desc">Рейтинг по убыванию</option>
            <option value="vote_average.asc">Рейтинг по возростанию</option>
          </select>
        </div>

                                      {/*   primary_release_year */}
        <div className="form-group">
        <label htmlFor="primary_release_year">Сортировать по году:</label>
        <select className="form-control" 
        id="primary_release_year"
        value={primary_release_year} 
        name="primary_release_year"
        onChange={onChangeFilters}>
          <option value="primary_release_year">Выберите год</option>
          
        </select>
      </div>


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
