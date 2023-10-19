import { Link } from 'react-router-dom';

interface Props {
  path?: string;
  children: React.ReactNode;
}

const Button = ({ path, children }: Props) => {
  const style = {
    className:
      'rounded-xl bg-indigo-600 px-5 py-3 text-center font-medium text-white',
    style: { boxShadow: '0px 7px 14px 0px rgba(0, 0, 0, 0.25)' },
  };

  if (path) {
    return (
      <Link to={path} {...style}>
        {children}
      </Link>
    );
  }

  return <button {...style}>{children}</button>;
};

export default Button;
