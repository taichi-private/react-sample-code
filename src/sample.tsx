import { useState } from 'react';

interface InitialData {
  categoryNo: number,
  text: string
}

const initialData: InitialData = {
  categoryNo: 0,
  text: ''
}

export const Sample = () => {
  const [data, setData] = useState<InitialData>(initialData);

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const newData = {...data, text: value};

    setData(newData);
  }

  const onChangeCategoryNo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const newData: InitialData = {...data, categoryNo: Number(value)};

    setData(newData);
  }

  return (
    <>
      <input type="text" value={data.text} onChange={(onChangeText)} />
      <input type="number" value={data.categoryNo} onChange={(onChangeCategoryNo)} />
      <p>{data.text}</p>
      <p>{data.categoryNo}</p>
    </>
  );
};
