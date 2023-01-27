import { ReactNode } from "react"
import { Tag, TagLabel, TagLeftIcon, Icon } from "@chakra-ui/react"
import { Body } from "components/typography"
type ChipProps = {
    children?: ReactNode
    icon: any
}
export const Chip = ({ children, icon }: ChipProps) => {
    return (
        <Tag size="lg" variant="outline" colorScheme="violet">
            {children ? (
                <>
                    <TagLeftIcon as={icon} />
                    <TagLabel>
                        <Body preset="p4" className="font-bold">
                            {children}
                        </Body>
                    </TagLabel>{" "}
                </>
            ) : (
                <Icon as={icon} />
            )}
        </Tag>
    )
}
