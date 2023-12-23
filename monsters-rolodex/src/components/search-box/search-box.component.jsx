import React from "react";
import { Component} from "react";
import "./search-box.styles.css"

class SearchBox extends Component {
  
  render() {
    const {onChangeHandler, placeholder, className} = this.props;
    return (
      <input
        className={` input search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler} />
    );
  }
}

export default SearchBox;
