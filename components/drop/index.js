import React, { Component } from "react";
import { SlideDown } from "react-slidedown";
class Dropdown extends Component {
  render() {
    let render = this.props.open;
    let closed = false;
    if (this.props.alwaysRender) {
      render = true;
      closed = !this.props.open;
    }
    return <SlideDown className=""closed={closed}>{render && this.renderList(this.props.itemCount)}</SlideDown>;
  }
  renderList(itemCount) {
    return <div><ul className="">{itemCount}</ul></div>;
  }
}
export default Dropdown
