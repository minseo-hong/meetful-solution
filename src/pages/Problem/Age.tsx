import Button from '../../components/Button';
import { Link } from 'react-router-dom';

interface Props {
  input: string;
  onNextButton: () => void;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

const Age = ({ onNextButton, setInput }: Props) => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-between">
      <div className="flex flex-col items-center justify-center">
        <Link className="mt-7 w-[5.5rem]" to="/">
          <img src="/images/logo-text.png" alt="logo-text" />
        </Link>
        <div className="mt-28 h-12"></div>
        <h2 className="mb-4 mt-6 text-2xl font-bold text-indigo-600">
          나이대를 알려주세요!
        </h2>
        <div className="grid grid-cols-2">
          <div
            className="mb-10 flex w-[165px] flex-col gap-5 rounded-lg p-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%239747FFFF' stroke-width='2' stroke-dasharray='14%2c 8' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
            }}
          >
            <div
              className="w-100% h-[42px] max-w-[216px] cursor-pointer rounded-xl bg-white px-4 py-2 text-center text-black"
              onClick={() => setInput('10대')}
            >
              10대
            </div>
            <div
              className="h-[42px] max-w-[216px] cursor-pointer rounded-xl bg-white px-4 py-2 text-center text-black"
              onClick={() => setInput('30대')}
            >
              30대
            </div>
          </div>
          <div
            className="mb-10 flex w-[165px] flex-col gap-5 rounded-lg p-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%239747FFFF' stroke-width='2' stroke-dasharray='14%2c 8' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
            }}
          >
            <div
              className="h-[42px] max-w-[216px] cursor-pointer rounded-xl bg-white px-4 py-2 text-center text-black"
              onClick={() => setInput('20대')}
            >
              20대
            </div>
            <div
              className="h-[42px] max-w-[216px] cursor-pointer rounded-xl bg-white px-4 py-2 text-center text-black"
              onClick={() => setInput('40대')}
            >
              40대
            </div>
          </div>
        </div>
      </div>
      <Button className="mb-16 w-56" onClick={onNextButton}>
        다음
      </Button>
    </div>
  );
};

export default Age;
