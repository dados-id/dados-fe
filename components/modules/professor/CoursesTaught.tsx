import { Body, Header, Button, Chip } from "@components"
import Link from "next/link"
import { Tag, TagLabel, TagLeftIcon, Icon } from "@chakra-ui/react"

type CourseTaughtProps = {
    courses: any[] | undefined
    className?: string
}

export const CoursesTaught = ({ courses, className }: CourseTaughtProps) => {
    return (
        <div className={`w-full ${className}`}>
            <Header preset="h4">Courses Taught</Header>
            <div className="flex flex-col w-full rounded-xl p-3 bg-[#EAF0FF] gap-y-1">
                {courses?.map((course, index) => {
                    return (
                        <div
                            className="flex flex-row justify-between items-center"
                            key={index}
                        >
                            <Body preset="p2" className="font-bold">
                                {course}
                            </Body>
                            <Tag
                                size="lg"
                                variant="outline"
                                colorScheme="violet"
                            >
                                <TagLabel>
                                    <Body preset="p3" className="font-bold">
                                        {course}
                                    </Body>
                                </TagLabel>
                            </Tag>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
