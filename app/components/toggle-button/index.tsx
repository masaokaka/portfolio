import { Switch } from '@headlessui/react';

export function ToggleButton({
  enabled,
  handleToggle,
}: {
  enabled: boolean;
  handleToggle: () => void;
}) {
  return (
    <Switch
      checked={enabled}
      onChange={handleToggle}
      className={`${
        enabled ? 'bg-black shadow-lg' : 'bg-white'
      }  relative inline-flex h-7 w-14 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-300 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
    >
      <span
        className={`${enabled ? 'translate-x-7 bg-white shadow-lg' : 'translate-x-1 bg-black'} 
            pointer-events-none inline-block size-5 rounded-full ring-0 transition duration-300 ease-in-out`}
      />
    </Switch>
  );
}
