import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...imput) => {
    return twMerge(clsx(imput));
};