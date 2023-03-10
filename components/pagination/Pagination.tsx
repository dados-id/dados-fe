import { Button, Body } from "@components"
import { ChevronLeftIcon } from "@heroicons/react/20/solid"
type PaginationProps = {
    prev: (page: number) => void
    next: (page: number) => void
    currentPage: number
    maxPage: number
}
export const Pagination = ({
    prev,
    next,
    currentPage,
    maxPage,
}: PaginationProps) => {
    return (
        <div className="flex gap-6 justify-center items-center">
            <Button
                preset="primary"
                onClick={() => prev(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <ChevronLeftIcon className="w-6 h-6" />
            </Button>
            <Body preset="p2" className="font-bold">
                {currentPage}/{maxPage}
            </Body>
            <Button
                preset="primary"
                onClick={() => next(currentPage + 1)}
                disabled={currentPage === maxPage}
            >
                <ChevronLeftIcon className="w-6 h-6 rotate-180" />
            </Button>
        </div>
    )
}
