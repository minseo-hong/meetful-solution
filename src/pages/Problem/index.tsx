import { useEffect, useState } from 'react';

import Name from './Name';
import Job from './Job';
import Age from './Age';
import { useNavigate } from 'react-router-dom';

const Problem = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [input, setInput] = useState('');

  const handleNextButton = () => {
    if (input) {
      setPage(page + 1);
      setInput('');
    }
  };

  useEffect(() => {
    if (page > pageList.length - 1) {
      navigate(-1);
    }
  }, [page]);

  const pageList = [
    <Name input={input} onNextButton={handleNextButton} setInput={setInput} />,
    <Job input={input} onNextButton={handleNextButton} setInput={setInput} />,
    <Age input={input} onNextButton={handleNextButton} setInput={setInput} />,
  ];

  return pageList[page];
};

export default Problem;
