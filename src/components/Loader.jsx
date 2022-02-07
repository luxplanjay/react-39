import { TailSpin } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const sizes = {
  sm: 16,
  md: 24,
  lg: 32,
  xl: 48,
};

export const Loader = ({ size = 'md' }) => {
  return (
    <TailSpin
      height={sizes[size]}
      width={sizes[size]}
      color="black"
      ariaLabel="loading"
    />
  );
};
