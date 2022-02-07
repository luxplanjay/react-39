import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Controls } from 'components/Controls';
import { Progress } from 'components/Progress';
import { Loader } from 'components/Loader';
import { Publication } from 'components/Publication';
import { useFetchItems } from 'hooks';

export const PreviewPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { items, loading } = useFetchItems();
  const currentItemPos = Number(searchParams.get('item'));

  console.log(currentItemPos);

  const changeIndex = value => {
    setSearchParams({ item: currentItemPos + value });
  };

  useEffect(() => {
    if (!currentItemPos) {
      setSearchParams({ item: 1 });
    }
  }, [currentItemPos, setSearchParams]);

  const totalItems = items.length;
  const currentItem = items[currentItemPos - 1];
  const showPlaceholder = !loading && totalItems === 0;
  const showReaderUI = !loading && totalItems > 0;

  return (
    <div>
      {loading && <Loader />}
      {showPlaceholder && <div>Еще нет публикаций!</div>}
      {showReaderUI && (
        <>
          <Controls
            current={currentItemPos}
            total={totalItems}
            onChange={changeIndex}
          />
          <Progress current={currentItemPos} total={totalItems} />
          {currentItem && <Publication item={currentItem} />}
        </>
      )}
    </div>
  );
};
