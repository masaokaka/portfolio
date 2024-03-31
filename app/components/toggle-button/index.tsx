export function ToggleButton({
  isChecked,
  handleCheck,
}: {
  isChecked: boolean;
  handleCheck: () => void;
}) {
  return (
    <>
      <input
        type="checkbox"
        value=""
        className="peer sr-only"
        checked={isChecked}
      />
      <button
        type="button"
        onClick={handleCheck}
        className="peer relative h-7 w-14 rounded-full bg-gray-200 shadow-lg duration-500 after:absolute after:start-[8px] after:top-1 after:size-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:duration-500 after:content-[''] peer-checked:bg-blue-600 peer-checked:duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"
      />
    </>
  );
}
