import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const TriggerButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 8px 12px;
  margin: 0;
  border: none;
  cursor: pointer;

  > svg {
    display: block;
    margin-left: 8px;
  }
`;

export const Popover = styled.div`
  position: absolute;
  border: 1px solid black;
  background-color: #fff;
`;

export const Options = styled.div`
  padding: 8px;
  max-height: 240px;
  overflow-y: auto;
`;

export const Option = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  white-space: nowrap;
`;

export const SearchBox = styled.div`
  position: relative;
  margin-bottom: 8px;

  > svg {
    position: absolute;
    top: 50%;
    right: 4px;
    transform: translateY(-50%);
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0 20px 0 0;
`;
