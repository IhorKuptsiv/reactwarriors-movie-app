import React from "react";
import PropTypes from "prop-types";

const years = [];
for (let i = 2020; i>1950; i--){
years.push(i);
//console.log(years);
}

export default class ReleaseYear extends React.Component {
    static propTypes = {
        primary_release_year: PropTypes.string.isRequired,
        onChangeFilters: PropTypes.func.isRequired
      };

      render() {
const {onChangeFilters,primary_release_year} = this.props;
return(
    <div className="form-group">
        <label htmlFor="primary_release_year">Год релиза:</label>
        <select
          id="primary_release_year"
          className="form-control"
          name="primary_release_year"
          value={primary_release_year}
          onChange={onChangeFilters}
        >
        
        {years.map(year => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
     

        </select>
      </div>

);


      }
}

