interface Props {
  children: React.ReactNode;
}

const Button = ({ children }: Props) => {
  return (
    <button
      className="rounded-xl bg-indigo-600 px-5 py-3 font-medium text-white"
      style={{ boxShadow: '0px 7px 14px 0px rgba(0, 0, 0, 0.25)' }}
    >
      {children}
    </button>
  );
};

export default Button;
