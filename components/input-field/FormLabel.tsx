import { FormLabel as FormLabelTemplate } from "@chakra-ui/react"

type FormLabelProps = {
    children: React.ReactNode
    className?: string
    [props: string]: any
}

/**
 *
 * Custom Styled Form Label
 * used in InputField & SelectField
 */

export const FormLabel = ({
    children,
    className,
    ...props
}: FormLabelProps) => {
    return (
        <FormLabelTemplate className={`font-jakarta-sans`} {...props}>
            {children}
        </FormLabelTemplate>
    )
}
