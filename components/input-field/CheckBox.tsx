import { Checkbox, CheckboxGroup } from "@chakra-ui/react"

export type CheckBoxProps = {}

export const CheckBox = () => {
    return (
        <Checkbox colorScheme="green" size="lg">
            I agree to{" "}
            <a
                href="https://youtu.be/xvFZjo5PgG0"
                style={{ color: "blue", textDecoration: "underline" }}
            >
                Terms of Use and Privacy Policy
            </a>
        </Checkbox>
    )
}
