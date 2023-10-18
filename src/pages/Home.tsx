import Button from '../components/Button';

const Home = () => {
  return (
    <div className="flex w-full flex-col items-center justify-between">
      <div className="mt-7 w-[5.5rem]">
        <img src="/images/logo-text.png" alt="logo-text" />
      </div>
      <div className="mt-9">
        <img src="/images/logo.svg" alt="logo" />
      </div>
      <div className="mt-4 text-center font-['SUIT'] text-base font-semibold text-[#979ADC]">
        회의에 솔루션을 더하다, 밋플
      </div>
      <h2 className="mt-6 text-2xl font-bold text-indigo-600">
        우리팀 회의, 뭐가 문제일까?
      </h2>
      <p className="mt-5 w-72 text-right text-xs font-medium text-[#495565]">
        <span className="text-gray-600">
          회의에서의 어려움을 느껴보셨다면, <br />
          회의의 솔루션을 알아보고싶다면, <br />
        </span>
        <span className="font-extrabold text-gray-600">‘밋플'&nbsp;</span>
        <span className="text-gray-600">하세요 !</span>
      </p>
      <button
        className="mb-10 mt-6 flex flex-col gap-5 rounded-lg p-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%239747FFFF' stroke-width='2' stroke-dasharray='14%2c 8' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
        }}
      >
        <Button>우리팀 회의는 뭐가 문제일까?</Button>
        <Button>우리팀 회의는 어떻게 개선하지?</Button>
        <Button>문의 & 의견 남기기</Button>
        <Button>밋플 사전신청하기</Button>
      </button>
    </div>
  );
};

export default Home;
