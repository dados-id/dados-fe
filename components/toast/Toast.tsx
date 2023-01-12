import React from "react"
import { TOAST_PRESETS } from "./Toast.presets"
import { Box, useToast } from "@chakra-ui/react"
import { Header } from "@components"
import { XMarkIcon } from "@heroicons/react/20/solid"

export type ToastProps = {
    preset: "error" | "warning" | "success"
    message: React.ReactNode | string
}

export const Toast = ({ preset, message }: ToastProps) => {
    const toast = useToast({
        position: "top",
        duration: 6000,
        render: ({ onClose }) => {
            return (
                <Box
                    className={`
          transition-all flex justify-between items-center gap-2 py-3 px-2 text-center 
          ${TOAST_PRESETS[preset].text} font-semibold z-50
          ${TOAST_PRESETS[preset].border} 
          ${TOAST_PRESETS[preset].borderWidth} 
          ${TOAST_PRESETS[preset].borderColor}
          ${TOAST_PRESETS[preset].color}`}
                >
                    <>
                        {TOAST_PRESETS[preset].leftIcon}
                        <Header preset="h5" className="font-bold">
                            {message}
                        </Header>
                        <button onClick={onClose}>
                            <XMarkIcon className="h-6 w-6" />
                        </button>
                    </>
                </Box>
            )
        },
    })

    return toast
}
