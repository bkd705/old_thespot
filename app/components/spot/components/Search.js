import React from 'react'

import { tags } from '../../../data/data'

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.addTagFilter = this.addTagFilter.bind(this)
  }
  doSearch() {
    let query = this.refs.searchInput.value;
    this.props.doSearch(query);
  }

  addTagFilter(tag) {
    this.refs.searchInput.value = tag;
    this.props.doSearch(tag);
  }

  render(){
    const taglist = tags.map((tag, key) => {
      return <li key={key} onClick={() => this.addTagFilter(tag)}>+{tag}</li>
    })
    return(
      <div className="search">
        <input type="text" className="search__input" ref="searchInput" name='filter' onChange={this.doSearch.bind(this)} placeholder="Search Spots..." />
        <section className="search__filter">
          <h5>Search By Filters:</h5>
          <ul>
            {taglist}
          </ul>
        </section>
      </div>
    )
  }
}

export default Search;
