import {
  Container,
  TriggerButton,
  Popover,
  Options,
  Option,
  SearchBox,
  SearchInput,
} from './Filter.styled';
import { FaChevronDown } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import PropTypes from 'prop-types';

export const Filter = ({ isOpen = false, searchable = false, options }) => {
  return (
    <Container>
      <TriggerButton type="button">
        Выбрано: 0 <FaChevronDown />
      </TriggerButton>

      {isOpen && (
        <Popover>
          {searchable && (
            <SearchBox>
              <SearchInput type="text" name="searchbox" />
              <HiX />
            </SearchBox>
          )}

          <Options>
            {options.map(({ value, label }) => (
              <Option key={value}>
                <input type="checkbox" name="option" value={value} />
                {label}
              </Option>
            ))}
          </Options>
        </Popover>
      )}
    </Container>
  );
};

Filter.propTypes = {
  isOpen: PropTypes.bool,
  searchable: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.exact({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};
