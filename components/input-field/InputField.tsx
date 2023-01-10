import {
    FormControl,
    FormErrorMessage,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
} from "@chakra-ui/react"
import { HTMLInputTypeAttribute } from "react"
import { FormLabel } from "./FormLabel"

// field contains label & input element
export type InputFieldProps = {
    className?: string // className of field element
    innerClassName?: string // className of input element

    type?: HTMLInputTypeAttribute
    name?: string // field name, ex. firstname, password
    label?: string

    value?: string | number // input value
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    onBlur?: React.FocusEventHandler<HTMLInputElement>

    placeholder?: string
    errorMessage?: string

    isDisabled?: boolean
    isError?: boolean

    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
    classNameLabel?: string
    dark?: boolean // use white font
    required?: boolean
}

export const InputField = (props: InputFieldProps) => {
    return (
        <FormControl
            isInvalid={props.isError}
            className={`text-grey  ${props.className}`}
        >
            <FormLabel>
                <span className={`${props.classNameLabel}`}>{props.label}</span>
            </FormLabel>
            <InputGroup>
                {props.leftIcon && (
                    <InputLeftElement pointerEvents="none">
                        <Icon isDisabled={props.isDisabled}>
                            {props.leftIcon}
                        </Icon>
                    </InputLeftElement>
                )}
                <Input
                    type={props.type}
                    name={props.name}
                    value={props.value}
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                    isDisabled={props.isDisabled}
                    className={`font-jakarta-sans ${props.innerClassName}`}
                    required={props.required}
                    onBlur={props.onBlur}
                    bg={props.errorMessage ? "#f4e0e3" : ""}
                />
                {props.rightIcon && (
                    <InputRightElement pointerEvents="none">
                        <Icon isDisabled={props.isDisabled}>
                            {props.rightIcon}
                        </Icon>
                    </InputRightElement>
                )}
            </InputGroup>

            {props.isError && (
                <FormErrorMessage>
                    <span className="ml-1">{props.errorMessage}</span>
                </FormErrorMessage>
            )}
        </FormControl>
    )
}

type IconPropsType = {
    isDisabled?: boolean
    children: React.ReactNode
}

function Icon(props: IconPropsType) {
    return (
        <div className={props.isDisabled ? "opacity-40" : ""}>
            {props.children}
        </div>
    )
}
