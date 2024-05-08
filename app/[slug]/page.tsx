"use client"

import { CardMenu } from "@/components/home/card-menu";
import { CarouselSize } from "@/components/home/carousel-category";
import { CarouselVoucher } from "@/components/home/carousel-voucher";

type DetailMitraProps = { params: {slug: string} };

export default function DetailMitra(props: DetailMitraProps){

    const {params} = props;

    return (
        <div className="container max-w-md mx-auto">
            <div className="py-6">
                <h5 className="text-slate-500">Cafe</h5>
                <h1 className="text-xl font-bold text-slate-800">{params.slug}</h1>
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
                <h3 className="font-semibold text-slate-600">Menu</h3>
                <CarouselSize/>
                <div className="">
                </div>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CardMenu key={index}/>
                ))}  
            </div>
        </div>
    )
}