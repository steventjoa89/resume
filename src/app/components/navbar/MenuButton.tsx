import { IoMenuSharp } from "react-icons/io5";

function MenuButton() {
  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <button
        type="button"
        className="relative rounded-full p-1 text-gray-200 cursor-pointer hover:bg-white/5 hover:text-white"
      >
        <span className="sr-only">View menu</span>
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <IoMenuSharp fontSize={28} />
        </div>
      </button>
    </div>
  );
}

export default MenuButton;
