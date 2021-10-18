import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  OnFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <h1>Hi There</h1>
        <form onSubmit={this.OnFormSubmit} className="ui form">
          <label>Image Search</label>
          <input
            type="text"
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
          />
        </form>
      </div>
    );
  }
}
export default SearchBar;
