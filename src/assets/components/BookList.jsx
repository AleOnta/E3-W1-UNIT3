import { Component } from "react";
import SingleBookAsClass from "./SingleBookAsClass";

class BookList extends Component {
  render() {
    return this.props.props.map((book) => <SingleBookAsClass key={book.asin} data={book} />);
  }
}

export default BookList;
