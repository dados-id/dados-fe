import { Body, Header } from "@components";
import Link from "next/link";
import { Tag, TagLabel } from "@chakra-ui/react"

type TopTagsProps = {
  tags: string[] | undefined,
  className?: string
}

const TopTags = ({tags, className}: TopTagsProps) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Header preset="h4">Top Tags</Header>
      <div className="flex flex-wrap gap-2 w-full ">
      {
        tags?.map((tag) => {
          return (
            <Tag size="lg" variant="outline" colorScheme="violet">
              <TagLabel>
                <Body preset="p3" className="font-bold">
                  {tag}
                </Body>
              </TagLabel>
            </Tag>
          )
        })
      }
      </div>
    </div>
  )
}

export default TopTags;