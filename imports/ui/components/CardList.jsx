import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./Card";
import Search from "./Search";

class CardList extends Component {
  constructor() {
    super();
  }

  render() {
    const items = this.props.items.items;

    return (
      <div id="CardList">
        <Search className="search-bar" />
        {/* TODO: add filter */}
        {items.map(post => {
          return <Card key={post.uuid} post={post} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { items: state.items };
};

export default connect(mapStateToProps)(CardList);
