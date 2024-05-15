import { GoDot } from "react-icons/go";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Currency } from "lucide-react";


export function CardMenu(props: {name: string, description: string, price: string}) {
    return (
        <div className="py-4">
            <Dialog>
      <DialogTrigger asChild>
      <div className="flex">
                <img className="rounded-lg w-1/3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQgM2tUhqZvIXOir3U48l9pE86PqFaL1m4MyhJZ3ymNw&s" alt="" />
                <div className="px-2">
                    <p className="text-sm font-medium text-slate-900 py-2">{props.name}</p>
                    <p className="text-sm text-slate-700 truncate max-w-[calc(100%-4rem)]">{props.description}</p>
                    <p className="py-2">Rp. {formatNumberWithCommas(props.price)}</p>
                </div>
            </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
            <DialogTitle>{props.name}</DialogTitle>
            <DialogDescription>
                {props.description}
            </DialogDescription>
            <DialogTitle className="py-2">Rp. {formatNumberWithCommas(props.price)}</DialogTitle>
        </DialogHeader>
        {/* <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div> */}
        {/* <DialogFooter>
          <Button type="submit"></Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
        </div>
    )
}

function formatNumberWithCommas(num: string): string {
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
{/* <Button size="icon" className="bg-slate-500 bottom-0">
    <Plus className="h-4 w-4" />
</Button> */}


export function CardMitra(props: {name: string, image: string}) {

    return (
        <div className="py-4">
                <div className="flex">
                <img className="rounded-lg w-1/3" src={props.image} alt={props.name} />
                <div className="px-2 w-2/3"> {/* Set a width for the container */}
                    <p className="text-lg font-bold text-slate-800 overflow-hidden whitespace-nowrap overflow-ellipsis">{props.name}</p>
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