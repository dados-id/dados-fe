type BodyProps = {
    className?: string
    preset: "p1" | "p2" | "p3" | "p4"
    children: React.ReactNode
}

export const Body = ({ className, children, preset }: BodyProps) => {
    return (
        <p
            // change font later
            className={`font-hauora ${
                preset === "p1"
                    ? "tablet:text-[1.5rem] mobile:text-[1rem]"
                    : preset === "p2"
                    ? "tablet:text-[1rem] mobile:text-[0.75rem]"
                    : preset === "p3"
                    ? "tablet:text-[0.75rem] mobile:text-[0.5rem]"
                    : "tablet:text-[0.625rem] mobile:text-[0.375rem]"
            } ${className}`}
        >
            {children}
        </p>
    )
}
