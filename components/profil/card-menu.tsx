import { Plus } from "lucide-react";
import { Button } from "../ui/button";



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