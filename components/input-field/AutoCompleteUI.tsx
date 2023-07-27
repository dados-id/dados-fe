import React, { useEffect } from "react"
import Select from "react-select"

export type autoCompleteProps = {
    options?: { value: string; label: string }[]
    value?: { value: string; label: string } | null
    onChange?: (selectedOption: { value: string; label: string } | null) => void
    isDisabled?: boolean
    clearValue?: () => void
}

const customStyles = {
    control: (provided) => ({
        ...provided,
        borderColor: "rgb(226, 232, 240)",
        "&:hover": {
            borderColor: "rgb(214, 222, 231)",
        },
    }),
}

export const AutoCompleteUI = (props: autoCompleteProps) => {
    const { options, value, onChange, isDisabled, clearValue } = props

    return (
        <Select
            options={options}
            styles={customStyles}
            value={value}
            onChange={onChange}
            isDisabled={isDisabled}
        />
    )
}
