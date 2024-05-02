"use client";

import { CardMenu } from "@/components/profil/card-menu";
import { CarouselVoucher } from "@/components/profil/carousel-voucher"
import { Button } from "@/components/ui/button";
import { BluetoothConnectedIcon, Plus } from "lucide-react";


export default function Profil() {
    return (
        <div className="container max-w-md mx-auto">
            <div className="py-6">
                <h5 className="text-slate-500">Cafe</h5>
                <h1 className="text-xl font-bold text-slate-800">Kupiku Coffee - Condong Catur</h1>
                <div className="flex mt-2">
                    <ul className="flex ">
                        <li className="mr-4 text-slate-500">⭐ Stars</li>
                        <li className="mr-4 text-slate-500">🕐 Close 9 Pm</li>
                        <li className="mr-4 text-slate-500">📍 4.1 km</li>
                    </ul>
                </div>
            </div>
            <div className="py-6">
                <h2 className="font-bold text-slate-700">Voucher</h2>
                <CarouselVoucher/>
            </div>
            <div className="py-6">
                <h3 className="font-semibold text-slate-600">Menu</h3>
                <div className="py-4">
                    
                </div>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CardMenu key={index}/>
                ))}  
                
            </div>
        </div>
    )
}