import { Component } from 'react';

export class Example2 extends Component {
  state = {
    page: 1,
  };

  loadMoreImages = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  componentDidUpdate(_, prevState) {
    if (prevState.page !== this.state.page) {
      console.log('Do stuff');
    }
  }

  render() {
    return (
      <>
        <h1>Example 2</h1>
        <button onClick={this.loadMoreImages}>Load more</button>
      </>
    );
  }
}
