type ButtonStyleProps = {
    color: string
    text: string
    border: string
    hover: string
}

type ButtonPresetProps = {
    [key: string]: ButtonStyleProps
}

export const BUTTON_PRESETS: ButtonPresetProps = {
    primary: {
        border: "rounded-lg",
        color: "bg-blue-gradient",
        hover: "hover:shadow-md",
        text: "text-white",
    },
    secondary: {
        border: "rounded-lg",
        color: "bg-cream-gradient",
        hover: "hover:shadow-md hover:shadow-[#AAAC4B]",
        text: "text-ultra-marine",
    },
    link: {
        border: "rounded-lg",
        color: "bg-[transparent]",
        hover: "hover:text-mariana",
        text: "text-cobalt",
    },
}
