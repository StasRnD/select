import { Select } from "./Select";
import React, { useState } from "react";
import { CustomOption } from "./customOption";

export interface CustomOptionProps {
  title: string;
  description: string;
}

const options: CustomOptionProps[] = [
  {
    title: "Школа 1",
    description: "Описание школа 1",
  },
  {
    title: "Школа 2",
    description: "Описание школа 2",
  },
  {
    title: "Школа 3",
    description: "Описание школа 3",
  },
  {
    title: "Школа 4",
    description: "Описание школа 4",
  },
];

function App() {
  const [selectValue, setSelectValue] = useState<CustomOptionProps | null>(
    null,
  );
  const getLabel = (userOption: CustomOptionProps | null): string => {
    if (userOption === null) {
      return "";
    } else {
      return userOption.title;
    }
  };

  const getValue = (userOption: CustomOptionProps | null): string | number => {
    if (userOption === null) {
      return "";
    } else {
      return userOption.description;
    }
  };

  return (
    <div className="App">
      <Select
        customOption={(props) => <CustomOption {...props} />}
        value={selectValue}
        getLabel={getLabel}
        getValue={getValue}
        onChange={setSelectValue}
        options={options}
        search
        multiple={false}
      />
    </div>
  );
}

export default App;
