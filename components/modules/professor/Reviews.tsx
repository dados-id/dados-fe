import { Body, Header, Button, ReviewCard } from "@components"
import { Select, Checkbox, CheckboxGroup } from "@chakra-ui/react"
import { Tag, TagLabel, TagLeftIcon, Icon } from "@chakra-ui/react"

type CourseTaughtProps = {
    reviews: any[] | undefined
    className?: string
    allCourses?: any[] | undefined
}

export const Reviews = ({
    reviews,
    className,
    allCourses,
}: CourseTaughtProps) => {
    return (
        <div className={`w-full font-hauora ${className}`}>
            <Header preset="h4">Reviews</Header>
            <Body preset="p2">Based on {10} ratings</Body>
            <div className="flex flex-row gap-6 w-full rounded-xl p-4 font-bold border  border-grey-200">
                <Select placeholder="All Courses">
                    {allCourses?.map((course, index) => {
                        return (
                            <option value={course} key={index}>
                                {course}
                            </option>
                        )
                    })}
                </Select>
                <Select placeholder="All Ratings">
                    <option value="option1">1</option>
                    <option value="option2">2</option>
                    <option value="option3">3</option>
                    <option value="option3">4</option>
                    <option value="option3">5</option>
                </Select>
                <Checkbox defaultChecked className="w-1/3">
                    My Reviews
                </Checkbox>
            </div>
            <Body preset="p2" className="text-center pt-4">
                Showing 5 out of 100 reviews.
            </Body>
            <Button
                preset="primary"
                className="w-full my-4"
                leftIcon={
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-4 h-4"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                        />
                    </svg>
                }
            >
                Latest
            </Button>
            <ReviewCard></ReviewCard>
            {/* <div className="flex flex-col w-full rounded-xl p-3 bg-[#EAF0FF] gap-y-1">
        {
          reviews?.map((course) => {
            return (
              <div className="flex flex-row justify-between items-center">
                <Body preset="p2" className="font-bold">
                  {course}
                </Body>
                <Tag size="lg" variant="outline" colorScheme="violet">
                  <TagLabel>
                    <Body preset="p3" className="font-bold">
                      {course}
                    </Body>
                  </TagLabel>
                </Tag>
              </div>
            )
          })
        }

      </div> */}
            <div className="w-full flex items-center justify-between pt-4">
                <div className="flex items-center gap-2">
                    <Body preset="p2">Results per page</Body>
                    <Select placeholder="5" width={20}>
                        <option value="option1">10</option>
                        <option value="option2">25</option>
                        <option value="option3">50</option>
                    </Select>
                </div>
                <div className="flex items-center gap-4">
                    <Button preset="primary" className="w-8">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4 h-4"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </Button>
                    <Body preset="p2" className="font-bold">
                        1/{10}{" "}
                    </Body>
                    <Button preset="primary" className="w-8">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4 h-4"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </Button>
                </div>
            </div>
        </div>
    )
}
