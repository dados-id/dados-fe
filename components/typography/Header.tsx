type HeaderProps = {
    className?: string
    preset: "decorative" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
    children: React.ReactNode
}

export const Header = ({ className, preset, children }: HeaderProps) => {
    return (
        <h1
            className={`font-hauora ${
                preset === "decorative" ? "font-extrabold" : "font-bold"
            } ${
                preset === "h1"
                    ? "desktop:text-[4rem] mobile:text-[1.75rem]"
                    : preset === "h2"
                    ? "desktop:text-[3rem] mobile:text-[1.5rem]"
                    : preset === "h3"
                    ? "desktop:text-[2rem] mobile:text-[1.25rem]"
                    : preset === "h4"
                    ? "desktop:text-[1.5rem] mobile:text-[1.125rem]"
                    : preset === "h5"
                    ? "desktop:text-[1.25rem] mobile:text-[1rem]"
                    : preset === "h6"
                    ? "desktop:text-[1.rem] mobile:text-[0.875rem]"
                    : "desktop:text-[4rem] mobile:text-[1.75rem]"
            } ${className}`}
        >
            {children}
        </h1>
    )
}
