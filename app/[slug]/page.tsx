"use client"

import { CardMenu } from "@/components/home/card-menu";
import { CarouselVoucher } from "@/components/home/carousel-voucher";
import { capitalizeFirstLetterOfEachWord } from "@/lib/utils";
import useSWR from "swr";

type DetailMitraProps = { params: {slug: string} };

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type MitraType = {
    id: number,
    username: string,
    name: string,
    email: string,
    image_url: string,
}

type MitraMenu = {
    id: number,
    name: string,
    description: string,
    price: string,
    image_url: string,
    mitra_id: number,
    category: CategoryMenu,
}

type CategoryMenu = {
    id: number,
    name: string,
    spcategory_id: number,
}

type CategoryWithMenu = {
    id: number,
    name: string,
    spcategory_id: number,
    menus: MitraMenu[],
}

export default function DetailMitra(props: DetailMitraProps){

    const {params} = props;

    const { data, error, isLoading } = useSWR(`https://menuku.beneboba.me/api/mitra/${params.slug}`, fetcher)
    
    const categoryMenu = data?.data.categories.map((category: CategoryMenu) => {
        return {
            id: category.id,
            name: category.name,
            spcategory_id: category.spcategory_id,
            menus: data.data.menus.filter((menu: MitraMenu) => menu.category.id === category.id)
        }
    });

    return (
        <div className="container max-w-md mx-auto">
            <div>
                 <img className="rounded-b-lg shadow-md" src={isLoading? 'https://source.unsplash.com/600x400' :data.data.mitra.image_url} alt="Hero" />
            </div>
            <div className="py-6">
                <h5 className="text-slate-500">Cafe</h5>
                <h1 className="text-xl font-bold text-slate-800">{isLoading? '': capitalizeFirstLetterOfEachWord(data.data.mitra.name)}</h1>
                <div className="flex mt-2">
                    <ul className="flex ">
                        <li className="mr-4 text-slate-500">⭐ Stars</li>
                        <li className="mr-4 text-slate-500">🕐 Close 9 Pm</li>
                        <li className="mr-4 text-slate-500">📍 4.1 km</li>
                    </ul>
                </div>
            </div>
            <div className="py-2">
                <h2 className="font-bold text-slate-700">Voucher</h2>
                <CarouselVoucher/>
            </div>
            <div className="py-2">
                <h3 className="font-bold text-slate-700">Menu</h3>
                {/* {isLoading? 'Loading' : <CarouselSize categoryMenu={data.data.categories} />} */}
                <div className="py-2">
                </div>
                {
                isLoading ? 'Loading' :
                   categoryMenu.map((category: CategoryWithMenu, i: number) => (
                        <div key={i}>
                            <h4 className="text-sm font-semibold text-slate-500">{category.name}</h4>
                            <div className="flex flex-wrap">
                                {
                                    category.menus.map((menu: MitraMenu, i: number) => (
                                        <CardMenu key={i} name={menu.name} description={menu.description} price={menu.price}/>
                                    ))
                                }
                            </div>
                        </div>
                    )) 
                // data.data.menus.map((menu: MitraMenu, i: number) => (
                //     <CardMenu key={i} name={menu.name} description={menu.description} price={menu.price}/>
                // ))
                }  
            </div>
        </div>
    )
}