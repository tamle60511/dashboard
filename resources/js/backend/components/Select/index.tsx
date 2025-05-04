import { SelectOption } from '@/backend/types/select';
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import Icon from '../Icon';
import Tooltip from '../Tooltip';

type SelectProps = {
    className?: string;
    classButton?: string;
    label?: string;
    tooltip?: string;
    value: SelectOption | null;
    onChange: (value: SelectOption) => void;
    options: SelectOption[];
    isBlack?: boolean;
    placeholder?: string;
};

const Select = ({ className, classButton, label, tooltip, value = null, onChange, options, isBlack, placeholder }: SelectProps) => {
    return (
        <Listbox className={`${className || ''}`} value={value} onChange={onChange} as="div">
            {label && (
                <Label className="mb-4 flex items-center">
                    <div className="text-button">{label}</div>
                    {tooltip && <Tooltip className="ml-1.5" content={tooltip} />}
                </Label>
            )}
            <ListboxButton
                className={`group border-s-stroke2 text-body-2 text-t-primary fill-t-secondary data-[hover]:border-s-highlight data-[hover]:text-t-primary data-[open]:text-t-primary data-[open]:border-s-subtle flex h-12 w-full items-center justify-between rounded-3xl border pr-3 pl-4.5 transition-all data-[open]:rounded-b-none data-[open]:border-b-transparent ${
                    isBlack
                        ? '!text-t-light !fill-t-light dark:from-shade-10 border-transparent bg-linear-to-b from-[#2C2C2C] to-[#282828] dark:to-[#DEDEDE]'
                        : ''
                } ${classButton || ''}`}
            >
                {value?.name ? <div className="truncate">{value.name}</div> : <div className="text-t-secondary/50 truncate">{placeholder}</div>}
                <Icon className="ml-2 shrink-0 fill-inherit transition-transform group-[[data-open]]:rotate-180" name="chevron" />
            </ListboxButton>
            <ListboxOptions
                className={`bg-b-surface2 border-s-subtle shadow-depth z-100 w-[var(--button-width)] origin-top rounded-b-[1.25rem] border border-t-0 px-2.25 pb-2.25 transition duration-200 ease-out outline-none [--anchor-gap:-2px] data-[closed]:scale-95 data-[closed]:opacity-0 dark:shadow-[0px_2.15px_0.5px_-2px_rgba(0,0,0,0.25),0px_5px_1.5px_-4px_rgba(8,8,8,0.2),0px_6px_4px_-4px_rgba(8,8,8,0.16),0px_6px_13px_0px_rgba(8,8,8,0.12),0px_24px_24px_-16px_rgba(8,8,8,0.08)] ${
                    isBlack ? '!border-[#2C2C2C] pt-2' : ''
                }`}
                anchor="bottom"
                transition
            >
                {options.map((option) => (
                    <ListboxOption
                        className="text-body-2 text-t-secondary after:bg-t-blue data-[focus]:text-t-primary data-[selected]:bg-shade-08/50 data-[selected]:text-t-primary dark:data-[selected]:bg-shade-06/10 relative cursor-pointer rounded-lg py-2 pr-5.5 pl-2.25 transition-colors after:absolute after:top-1/2 after:right-2.5 after:size-2 after:-translate-y-1/2 after:rounded-full after:opacity-0 after:transition-opacity data-[selected]:after:opacity-100"
                        key={option.id}
                        value={option}
                    >
                        {option.name}
                    </ListboxOption>
                ))}
            </ListboxOptions>
        </Listbox>
    );
};

export default Select;
