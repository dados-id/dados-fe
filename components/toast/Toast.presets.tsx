import React from "react"
import {
    ExclamationTriangleIcon,
    CheckCircleIcon,
} from "@heroicons/react/24/outline"

type ToastStyleProps = {
    color: string
    text: string
    border: string
    borderWidth: string
    borderColor: string
    leftIcon?: React.SVGAttributes<SVGElement>
}

type ToastPresetProps = {
    [key: string]: ToastStyleProps
}

export const TOAST_PRESETS: ToastPresetProps = {
    error: {
        border: "rounded-lg",
        borderWidth: "border-2",
        color: "bg-[#B82D2D]/20  backdrop-blur-sm",
        text: "text-danger",
        borderColor: "border-danger",
        leftIcon: <ExclamationTriangleIcon className="w-6 h-6" />,
    },
    warning: {
        border: "rounded-lg",
        borderWidth: "border-2",
        color: "bg-[#DDC441]/20 backdrop-blur-sm",
        text: "text-warning",
        borderColor: "border-warning",
        leftIcon: <CheckCircleIcon className="w-6 h-6" />,
    },
    success: {
        border: "rounded-lg",
        borderWidth: "border-2",
        color: "bg-[#4AB261]/20 backdrop-blur-sm",
        text: "text-success",
        borderColor: "border-success",
        leftIcon: <CheckCircleIcon className="w-6 h-6" />,
    },
}
