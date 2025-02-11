function Select({ options, setSelectValue }) {
  return (
    <select
      className="w-[200px] outline-none h-[56px] px-2 rounded-md shadow-md   dark:bg-[#2b3844] dark:text-[#848484] "
      onChange={(e) => setSelectValue(e.target.value)}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
