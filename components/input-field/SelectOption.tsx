import type { OptionHTMLAttributes } from "react"
interface SelectOptionProps extends OptionHTMLAttributes<HTMLOptionElement> {
    dark?: boolean // dark mode
}

/**Custom styled <option> that supports dark mode */
export const SelectOption = ({ dark, ...props }: SelectOptionProps) => {
    return (
        <option
            {...props}
            // className={`${dark ? "bg-denim-dark text-totalwhite" : ""} ${className}`}
            style={dark ? { backgroundColor: "black", color: "white" } : {}}
        />
    )
}
