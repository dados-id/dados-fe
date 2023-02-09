import { Body, Header, Button, ReviewCard } from "@components";
import { Select, Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { Tag, TagLabel, TagLeftIcon, Icon } from "@chakra-ui/react"

type CourseTaughtProps = {
  reviews: any[] | undefined,
  className?: string,
}

const Review = ({ reviews, className }: CourseTaughtProps) => {
  return (
    <div className={`w-full font-hauora ${className}`}>
      <Header preset="h4">Reviews</Header>
      <Body preset="p2">Based on {10} ratings</Body>
      <div className="flex flex-row gap-6 w-full rounded-xl p-4 font-bold border  border-grey-200">
        <Select placeholder='All Courses'>
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
        </Select>
        <Select placeholder='All Ratings'>
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
        </Select>
        <Checkbox defaultChecked className="w-1/3">My Reviews</Checkbox>
      </div>
      <Body preset="p2" className="text-center pt-4">Showing 5 out of 100 reviews.</Body>
      <Button
        preset="primary"
        className="w-full"
        leftIcon={
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
        }
      >
        Latest
      </Button>
      <ReviewCard></ReviewCard>
      <div className="flex flex-col w-full rounded-xl p-3 bg-[#EAF0FF] gap-y-1">
        {/* {
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
        } */}

      </div>
    </div>
  )
}

export default Review;