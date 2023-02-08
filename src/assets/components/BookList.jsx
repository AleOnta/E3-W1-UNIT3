import { Component } from "react";
import SingleBookAsClass from "./SingleBookAsClass";

class BookList extends Component {
  render() {
    return this.props.props.map((book, index) => <SingleBookAsClass key={index} data={book} />);
  }
}

export default BookList;
