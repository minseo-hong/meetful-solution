import { Link } from 'react-router-dom';

interface Props {
  path?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ path, className, children, onClick, ...rest }: Props) => {
  const style = {
    className: `rounded-xl bg-indigo-600 px-5 py-3 text-center font-medium text-white${
      className ? ` ${className}` : ''
    }`,
    style: { boxShadow: '0px 7px 14px 0px rgba(0, 0, 0, 0.25)' },
  };

  if (path) {
    return (
      <Link to={path} onClick={onClick} {...style} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} {...style} {...rest}>
      {children}
    </button>
  );
};

export default Button;
