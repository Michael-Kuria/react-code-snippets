import { useState } from "react";

const Dropdown = () => {
  const [selected, setSelected] = useState(0);
  const [values, setValues] = useState([
    {
      month: "January",
      year: "2023",
    },
    {
      month: "February",
      year: "2023",
    },
    {
      month: "March",
      year: "2023",
    },
    {
      month: "April",
      year: "2023",
    },
    {
      month: "May",
      year: "2023",
    },
  ]);

  /**
   * React batches up state updates, that's why states updated do not reflect immediately. This is to boot
   * the overall performance of the application since a state update will lead to a re-render of the components.
   *
   * Operations that need to be done after a state update can be done inside a useEffect hook with the state as
   * a dependancy.
   *
   * useEffect (() => {
   *  // your operation
   * },[state])
   * @param {} e
   */
  const handleOnChange = (e) => {
    const value = e.target.value;
    setSelected((prev) => e.target.value);
    console.log(value + " " + selected); // Selected and value will not have the same value.
  };

  return (
    <div className="dropdown__container">
      <select value={selected} onChange={handleOnChange}>
        {values.map((value, index) => (
          <option key={index} value={index}>
            {value.month}
          </option>
        ))}
      </select>
      <p>Selected : {selected}</p>
      <p>Selected Month : {values[selected].month}</p>
    </div>
  );
};

export default Dropdown;
