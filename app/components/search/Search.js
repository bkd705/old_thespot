import React from 'react'

class Search extends React.Component {
  render(){
    return(
      <div className="search">
        <input type="text" className="search__input" placeholder="Search Spots..." />
        <section className="search__filter">
          <h5>Search By Filters:</h5>
          <ul>
            <li>+Wifi</li>
            <li>+Juke Box</li>
            <li>+Dancing</li>
            <li>+Hot Drinks</li>
            <li>+Alcohol</li>
          </ul>
        </section>
      </div>
    );
  }
}

export default Search;
