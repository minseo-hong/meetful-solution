import Button from '../../components/Button';
import { Link } from 'react-router-dom';

interface Props {
  input: string;
  onNextButton: () => void;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

const Name = ({ input, onNextButton, setInput }: Props) => {
  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-between">
      <div className="flex flex-col items-center justify-center">
        <Link className="mt-7 w-[5.5rem]" to="/">
          <img src="/images/logo-text.png" alt="logo-text" />
        </Link>
        <div className="mt-28 flex h-12 flex-col justify-end text-center font-medium text-[#979ADC]">
          안녕하세요, 저희가 뭐라고 부르면 좋을까요!
          <br />
          이름이 부담스럽다면 별명도 좋아요!
        </div>
        <h2 className="mt-6 text-2xl font-bold text-indigo-600">
          이름을 알려주세요!
        </h2>
        <input
          type="text"
          className="mt-8 h-[42px] w-[216px] rounded-xl bg-white px-4 py-2 text-center text-black outline-none"
          value={input}
          onChange={handleNameInput}
        />
      </div>
      <Button className="mb-16 w-56" onClick={onNextButton}>
        다음
      </Button>
    </div>
  );
};

export default Name;
