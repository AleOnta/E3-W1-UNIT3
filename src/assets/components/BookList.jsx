import { Component } from "react";
import SingleBook from "./SingleBook";

class BookList extends Component {
  render() {
    return this.props.props.map((book) => <SingleBook data={book} />);
  }
}

export default BookList;
