import React from 'react'
import classnames from 'classnames'

import { tags } from '../../../data/data'

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hideDelete: true
    }

    this.addTagFilter = this.addTagFilter.bind(this)
  }

  doSearch() {
    this.refs.searchInput.value.length === 0 ? this.setState({ hideDelete: true }) : this.setState({ hideDelete: false })
    const query = this.refs.searchInput.value;
    this.props.doSearch(query);
  }

  addTagFilter(tag) {
    this.refs.searchInput.value = tag;
    this.props.doSearch(tag);
  }

  _emptyField() {
    this.refs.searchInput.value = ''
    this.doSearch()
    this.setState({
      hideDelete: true
    })
  }

  render(){
    const taglist = tags.map((tag, key) => {
      return <li key={key} onClick={() => this.addTagFilter(tag)}>+{tag}</li>
    })

    const { hideDelete } = this.state
    return(
      <div style={{position: 'relative'}} className='search'>
        <input type="text" className="search__input" ref="searchInput" name='filter' onChange={this.doSearch.bind(this)} placeholder="Search by Feature or Name" />
        <span className={classnames('search-delete', { 'delete-hidden': hideDelete})} onClick={this._emptyField.bind(this)}>&times;</span>
        <section className="search__filter">
          <h5>Popular Tags:</h5>
          <ul>
            {taglist}
          </ul>
        </section>
      </div>
    )
  }
}

export default Search;
