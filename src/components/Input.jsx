//react icons
import { FaSearch } from "react-icons/fa";

function Input({ name, placeholder, type, setInputValue }) {
  return (
    <label className="flex dark:bg-[#2b3844] items-center gap-6 py-4 px-8 shadow-md rounded-md">
      <FaSearch className="w-[18px] h-[18px] text-[#848484]" />
      <input
        onChange={(e) => setInputValue(e.target.value)}
        className="outline-none dark:bg-[#2b3844] dark:text-[#848484]  "
        type={type}
        placeholder={placeholder}
        name={name}
      />
    </label>
  );
}

export default Input;
