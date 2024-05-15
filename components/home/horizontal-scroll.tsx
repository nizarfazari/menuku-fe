

const list = [
    "All Menu",
    "Food",
    "Drink",
    "Snack",
    "Dessert",
    "Cosan Specials",
    "Non Coffee"
];

export function HorizontalScroll() {
      return (
        <div>
            <ul className="flex flex-row gap-4 overflow-y-auto">
                {
                    list.map((item) => (
                    <li className="px-4 py-1 bg-slate-800 rounded-full text-white">
                        {item}
                    </li>  
                    ))
                }
            </ul>
        </div>
      );

}
