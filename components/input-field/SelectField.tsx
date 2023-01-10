import { FormControl, FormErrorMessage, Select } from "@chakra-ui/react"
import { FormLabel } from "./FormLabel"
import { SelectOption } from "./SelectOption"

/**Represent option element */
export type Option = {
    value?: string | number // <option>'s value attribute
    label?: string // text that is displayed in <option>
}
// example
// {value: "opt1", label: "Option 1"} yield <option value="opt1">Option 1<option/>

// field contains label & input element
export type SelectFieldProps = {
    className?: string // wrapper select element className
    innerClassName?: string // className of input element

    name?: string // name of <select> element
    label?: string
    placeholder?: string
    value?: string | number // value of <select> element
    onChange?: React.ChangeEventHandler<HTMLSelectElement>
    onBlur?: React.FocusEventHandler<HTMLSelectElement>
    children?: React.ReactNode // option elements, ex. <option value="opt1">Option 1<option/>
    options?: Option[] // options in array of Option object, use this as an alternative to using children props

    isDisabled?: boolean
    isError?: boolean

    errorMessage?: string
    classNameLabel?: string
    rightIcon?: React.ReactElement
    dark?: boolean // dark mode
    required?: boolean
}

export const SelectField = (props: SelectFieldProps) => {
    return (
        <FormControl
            isInvalid={props.isError}
            className={` ${props.className}`}
        >
            <FormLabel>
                <span className={`${props.classNameLabel}`}>{props.label}</span>
            </FormLabel>
            <Select
                name={props.name}
                placeholder={props.placeholder}
                onChange={props.onChange}
                onBlur={props.onBlur}
                isDisabled={props.isDisabled}
                className={`cursor-pointer font-jakarta-sans ${props.innerClassName}`}
                icon={props.rightIcon}
                iconSize="17"
                value={props.value}
                required={props.required}
                bg={props.errorMessage ? "#f4e0e3" : ""}
            >
                {props.children ||
                    props.options?.map((option) => (
                        <SelectOption
                            value={option.value}
                            dark={props.dark}
                            key={option.value}
                        >
                            {option.label}
                        </SelectOption>
                    ))}
            </Select>
            {props.isError && (
                <FormErrorMessage>
                    <span className="ml-1"> {props.errorMessage}</span>
                </FormErrorMessage>
            )}
        </FormControl>
    )
}
