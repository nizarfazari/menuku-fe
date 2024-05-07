import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { GoDot } from "react-icons/go";



export function CardMenu() {
    return (
        <div className="py-4">
                <div className="flex">
                    <img className="rounded-lg w-1/3" src="https://source.unsplash.com/600x400" alt="" />
                    <div className="px-2">
                        <p className="text-sm font-medium text-slate-800 py-2">Paket Ayam Chicken Nashville</p>
                        <p className="py-2">Rp. 21.000</p>
                    </div>
                    <Button size="icon" className="bg-slate-500 bottom-0">
                        <Plus className="h-4 w-4" />
                    </Button>
                </div>
            </div>
    )
}


export function CardMitra() {
    return (
        <div className="py-4">
                <div className="flex">
                <img className="rounded-lg w-1/3" src="https://source.unsplash.com/600x400" alt="" />
                <div className="px-2 w-2/3"> {/* Set a width for the container */}
                    <p className="text-lg font-bold text-slate-800 overflow-hidden whitespace-nowrap overflow-ellipsis">Cosan Coffee</p>
                    <div className="flex">
                    <p className="text-sm text-green-500">Buka</p>
                    <GoDot />
                    <p className="text-sm">Tutup 23.00 WIB</p>
                    </div>
                    <p>⭐ 4.8</p>
                </div>
                </div>
        </div>
    )
}