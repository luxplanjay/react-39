import { Component } from 'react';
import { Controls } from 'components/Reader/Controls';
import { Progress } from 'components/Reader/Progress';
import { Publication } from 'components/Reader/Publication';
import { getPublications, deletePublication } from 'services/publicationsApi';

// const LS_KEY = 'reader_item_index';

export class Reader extends Component {
  state = {
    index: 0,
    items: [],
    isLoading: false,
  };

  changeIndex = value => {
    this.setState(state => ({ index: state.index + value }));
  };

  deleteItem = async () => {
    const { index, items } = this.state;
    const currentItem = items[index];
    try {
      await deletePublication(currentItem.id);
      this.setState(state => ({
        items: state.items.filter(item => item.id !== currentItem.id),
      }));
    } catch (error) {
      console.log(error);
    }
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const items = await getPublications();
      this.setState({ isLoading: false, items });
    } catch (error) {
      console.log(error);
    }
  }

  // componentDidMount() {
  //   const savedState = localStorage.getItem(LS_KEY);
  //   if (savedState) {
  //     this.setState({ index: Number(savedState) });
  //   }
  // }

  // componentDidUpdate(_, prevState) {
  //   if (prevState.index !== this.state.index) {
  //     localStorage.setItem(LS_KEY, this.state.index);
  //   }
  // }

  render() {
    const { index, items, isLoading } = this.state;
    const totalItems = items.length;
    const currentItem = items[index];
    const showPlaceholder = !isLoading && totalItems === 0;
    const showReaderUI = !isLoading && totalItems > 0;

    return (
      <div>
        {isLoading && <div>Загрузка...</div>}
        {showPlaceholder && <div>Еще нет публикаций!</div>}
        {showReaderUI && (
          <>
            <button type="button" onClick={this.deleteItem}>
              Delete publication
            </button>
            <Controls
              current={index + 1}
              total={totalItems}
              onChange={this.changeIndex}
            />
            <Progress current={index + 1} total={totalItems} />
            {currentItem && <Publication item={currentItem} />}
          </>
        )}
      </div>
    );
  }
}
