import { GlobalStyle } from './GlobalStyle';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <GlobalStyle />

      <Filter
        isOpen
        searchable
        options={[
          { value: 'xs', label: 'Очень маленький' },
          { value: 'sm', label: 'Маленький' },
          { value: 'md', label: 'Средний' },
          { value: 'lg', label: 'Большой' },
          { value: 'xl', label: 'Очень большой' },
        ]}
      />
    </div>
  );
};
