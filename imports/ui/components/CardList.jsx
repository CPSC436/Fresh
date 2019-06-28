import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./Card";
import SelectBar from "./SelectBar";

class CardList extends Component {
  constructor() {
    super();
  }

  render() {
    const items = this.props.items.items;

    return (
      <div id="CardList">
        <SelectBar className="search-bar" />
        {/* TODO: add filter */}
        {items.map(post => {
          return <Card key={post._id} post={post} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { items: state.items };
};

export default connect(mapStateToProps)(CardList);
