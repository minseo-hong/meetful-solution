import { Link } from 'react-router-dom';

import Button from '../../components/Button';

interface Props {
  input: string;
  onNextButton: () => void;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

const Job = ({ input, onNextButton, setInput }: Props) => {
  const handleJobInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-between">
      <div className="flex flex-col items-center justify-center">
        <Link className="mt-7 w-[5.5rem]" to="/">
          <img src="/images/logo-text.png" alt="logo-text" />
        </Link>
        <div className="mt-28 flex h-12 flex-col justify-end text-center font-medium text-[#979ADC]">
          예시) 직장인, 중학생, 취준생, 인턴 등
        </div>
        <h2 className="mt-6 text-2xl font-bold text-indigo-600">
          직업을 알려주세요!
        </h2>
        <input
          type="text"
          className="mt-8 h-[42px] w-[216px] rounded-xl bg-white px-4 py-2 text-center text-black outline-none"
          value={input}
          onChange={handleJobInput}
        />
      </div>
      <Button className="mb-16 w-56" onClick={onNextButton}>
        다음
      </Button>
    </div>
  );
};

export default Job;
