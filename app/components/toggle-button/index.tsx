import { PropsWithChildren } from 'react';
import { Switch } from '@headlessui/react';
interface ToggleButtonProps {
  enabled: boolean;
  handleToggle: () => void;
}
export function ToggleButton({
  enabled,
  handleToggle,
}: PropsWithChildren<ToggleButtonProps>) {
  return (
    <Switch
      checked={enabled}
      onChange={handleToggle}
      className="relative inline-flex h-7 w-14 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-primary transition-colors duration-default ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75  dark:bg-primary"
    >
      <span
        className={`${enabled ? 'translate-x-7' : 'translate-x-1 '} 
           pointer-events-none inline-block size-5 rounded-full bg-white ring-0 transition duration-default ease-in-out dark:bg-white`}
      />
    </Switch>
  );
}
