import { GoDot } from "react-icons/go";



export function CardMenu(props: {name: string, description: string, price: string}) {
    return (
        <div className="py-4">
                <div className="flex">
                    <img className="rounded-lg w-1/3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQgM2tUhqZvIXOir3U48l9pE86PqFaL1m4MyhJZ3ymNw&s" alt="" />
                    <div className="px-2">
                        <p className="text-sm font-medium text-slate-900 py-2">{props.name}</p>
                        <p className="text-sm text-slate-700 truncate max-w-[calc(100%-4rem)]">{props.description}</p>
                        <p className="py-2">Rp. {props.price}</p>
                    </div>
                </div>
            </div>
    )
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