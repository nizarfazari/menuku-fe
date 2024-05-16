import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function capitalizeFirstLetterOfEachWord(input: string): string {
  return input.replace(/\b\w/g, (char) => char.toUpperCase());
}