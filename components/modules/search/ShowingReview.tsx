import { Body, Button, NoLecturerCard, QueryCard } from "@components"
import { useEffect, useState } from "react"
import { Select } from "@chakra-ui/react"
import { ChevronDownIcon, ArrowDownIcon } from "@heroicons/react/20/solid"
import axios from "axios"
import NotFoundImage from "@images/img_not_found.svg"
import { Professor, University } from "@models"
import Link from "next/link"
import { Pagination } from "components/pagination/Pagination"
import { useRouter } from "next/router"
type ShowingReviewProps = {
    slug?: string
    isProf: boolean
    name?: string
    profName: string
}
export const ShowingReview = ({
    slug,
    isProf,
    name,
    profName,
}: ShowingReviewProps) => {
    const [data, setData] = useState<any>()
    const [page, setPage] = useState<number>(1)
    const [faculties, setFaculties] = useState<any[]>([])
    const [selectFacultyId, setSelectFacultyId] = useState<any>()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [sortAscending, setSortAscending] = useState<boolean>(true)
    const [sortByName, setSortByName] = useState<boolean>(true)
    const [maxData, setMaxData] = useState<number>(1)
    const router = useRouter()

    useEffect(() => {
        if (isProf) {
            axios
                .get(`/api/university/faculty/${localStorage.getItem("uniId")}`)
                .then((response) => {
                    setFaculties(response.data)
                })

            if (name) {
                if (selectFacultyId) {
                    axios
                        .get(
                            `/api/professor/search/faculty/${slug}/${selectFacultyId}/${page}/${
                                sortAscending ? "asc" : "desc"
                            }/${sortByName ? "name" : "rating"}/${profName}`
                        )
                        .then((response) => {
                            setData(response.data)
                            setIsLoading(false)
                            setMaxData(response.headers["x-total-count"])
                        })
                } else {
                    axios
                        .get(
                            `/api/professor/search/${slug}/${page}/${
                                sortAscending ? "asc" : "desc"
                            }/${sortByName ? "name" : "rating"}/${profName} `
                        )
                        .then((response) => {
                            setData(response.data)
                            setIsLoading(false)
                            setMaxData(response.headers["x-total-count"])
                        })
                }
            } else {
                axios
                    .get(
                        `/api/professor/landing/${slug}/${page}/${
                            sortAscending ? "asc" : "desc"
                        }/${sortByName ? "name" : "rating"}`
                    )
                    .then((response) => {
                        setData(response.data)
                        setIsLoading(false)
                        setMaxData(response.headers["x-total-count"])
                    })
            }
        } else {
            axios
                .get(
                    `/api/university/landing/${slug}/${page}/${
                        sortAscending ? "asc" : "desc"
                    }/${sortByName ? "name" : "rating"}`
                )
                .then((response) => {
                    setData(response.data)
                    setIsLoading(false)
                    setMaxData(response.headers["x-total-count"])
                })
        }
    }, [page, isProf, sortAscending, sortByName, maxData, selectFacultyId])

    const handleRoute = (id: number, uniname?: string) => {
        setSortByName(true)
        setSortAscending(true)
        setPage(1)
        if (!isProf && uniname) {
            localStorage.setItem("uniName", uniname)
            localStorage.setItem("uniId", id.toString())
        }
        router.push(
            isProf
                ? `/professor/${id}`
                : `/search/${id}/?professor=true&university=${uniname}`
        )
    }

    if (isLoading) {
        return <p>loading...</p>
    }
    return (
        <div className="flex tablet:flex-row mobile:flex-col tablet:items-start mobile:items-center gap-7 w-full">
            <div className="w-full">
                {data?.length > 0 ? (
                    <>
                        {isProf && (
                            <Select
                                name="faculty"
                                placeholder="Filter by faculty"
                                color={"#909090"}
                                _focus={{ color: "#000000" }}
                                icon={
                                    <ChevronDownIcon className="fill-grey-600 w-3 h-2" />
                                }
                                onChange={(e) =>
                                    setSelectFacultyId(e.currentTarget.value)
                                }
                            >
                                {faculties.map((faculty, index) => (
                                    <option value={faculty.id} key={index}>
                                        {faculty.name}
                                    </option>
                                ))}
                            </Select>
                        )}

                        <Body preset="p2" className="text-center py-5">
                            Showing {data.length >= 5 ? 5 : maxData % 5} out of{" "}
                            {maxData}
                            {isProf
                                ? name
                                    ? " lecturers at"
                                    : " professors with"
                                : " schools with"}{" "}
                            <span className="font-bold">
                                {isProf ? (name ? name : slug) : slug}
                            </span>
                            {(!isProf || !name) && " in their name"}
                            {profName && (
                                <>
                                    {" "}
                                    with{" "}
                                    <span className="font-bold">
                                        {profName}
                                    </span>{" "}
                                    in their name
                                </>
                            )}
                        </Body>
                        <div
                            className={`h-10 w-full pl-14 pr-20 flex rounded-lg bg-cobalt ${
                                !isProf ? "justify-center" : "justify-between"
                            }`}
                        >
                            <div
                                className={`flex items-center gap-1 ${
                                    !sortByName && "opacity-40"
                                } cursor-pointer`}
                                onClick={() => {
                                    setSortAscending(!sortAscending),
                                        setSortByName(true)
                                }}
                            >
                                <ArrowDownIcon
                                    className={`w-4 h-4 fill-whipcream transform ${
                                        sortAscending && sortByName
                                            ? ""
                                            : "rotate-180"
                                    }`}
                                />
                                <Body
                                    preset="p2"
                                    className="font-bold text-whipcream"
                                >
                                    Name
                                </Body>
                            </div>
                            {isProf && (
                                <div
                                    className={`flex items-center gap-1 ${
                                        sortByName && "opacity-40"
                                    } cursor-pointer`}
                                    onClick={() => {
                                        setSortAscending(!sortAscending),
                                            setSortByName(false)
                                    }}
                                >
                                    <ArrowDownIcon
                                        className={`w-4 h-4 fill-whipcream transform ${
                                            sortAscending && !sortByName
                                                ? ""
                                                : "rotate-180"
                                        } `}
                                    />
                                    <Body
                                        preset="p2"
                                        className="font-bold text-whipcream"
                                    >
                                        Rating
                                    </Body>
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col gap-5 mt-5">
                            {data?.map((d: any, index: number) =>
                                isProf ? (
                                    <div
                                        onClick={() => handleRoute(d.id)}
                                        key={index}
                                        className="cursor-pointer"
                                    >
                                        <QueryCard
                                            isProf={isProf}
                                            key={index}
                                            rating={d.rating}
                                            name={`${d.firstName} ${d.lastName}`}
                                            university={d.schoolName}
                                            faculty={d.facultyName}
                                            id={d.id}
                                        />
                                    </div>
                                ) : (
                                    <div
                                        onClick={() =>
                                            handleRoute(d.id, d.name)
                                        }
                                        key={index}
                                        className="cursor-pointer"
                                    >
                                        <QueryCard
                                            isProf={isProf}
                                            key={index}
                                            rating={3.0}
                                            name={`${d.name}`}
                                            university={d.city}
                                            faculty={d.province}
                                            id={d.id}
                                        />
                                    </div>
                                )
                            )}
                        </div>
                        <div className="mt-10 tablet:mb-14 mobile:mb-10">
                            <Pagination
                                maxPage={Math.ceil(maxData / 5)}
                                currentPage={page}
                                prev={setPage}
                                next={setPage}
                            />
                            {Math.ceil(maxData / 5) === page && (
                                <div className="mt-10">
                                    <NoLecturerCard />
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    <div className="flex flex-col items-center justify-center w-full mb-52">
                        <Body preset="p2" className="">
                            Sorry, we can’t find any{" "}
                            {isProf ? (
                                <span>
                                    lecturers at{" "}
                                    <span className="font-bold">{name}</span>
                                    {profName && (
                                        <>
                                            {" "}
                                            with{" "}
                                            <span className="font-bold">
                                                {profName}
                                            </span>{" "}
                                            in their name
                                        </>
                                    )}
                                </span>
                            ) : (
                                <span>
                                    schools with{" "}
                                    <span className="font-bold">{slug}</span> in
                                    their name
                                </span>
                            )}
                        </Body>
                        <NotFoundImage className="mt-10" />
                        <Link href="#">
                            <Button preset="primary" className="mt-7">
                                {isProf ? "Add a lecturer" : "Add school"}
                            </Button>
                        </Link>
                    </div>
                )}
            </div>
            {data?.length > 0 && (
                <div className="tablet:w-40 tablet:h-[600px] mobile:w-[300px] mobile:h-[50px] bg-grey-400 mobile:mb-4 tablet:mb-0"></div>
            )}
        </div>
    )
}
