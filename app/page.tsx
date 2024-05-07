"use client"

import { CardMenu, CardMitra } from "@/components/profil/card-menu";
import { CarouselVoucher } from "@/components/profil/carousel-voucher";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { CiCoffeeCup, CiLocationOn } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";


export default function Home() {
  return (
    <main className="container max-w-md mx-auto">
            <div className="bg-red-400 px-5 relative pb-10">
              <h1 className="text-3xl text-white font-semibold pt-8">Cari dan Pesan Makanan Favoritmu</h1>
              <p className="mt-5 text-white">Location</p>
              <div>
                <div className="flex items-center text-white">
                  <CiLocationOn />
                  <p className="ml-2">Jalan Kaliurang, Yogyakarta</p>
                </div>
              </div>
              
              <div className="absolute inset-x-0 -bottom-5">
                <div className="mx-auto w-3/4 relative">
                  <Input id="name" className="w-full py-2 pl-10 pr-4 focus-visible:ring-0 rounded-2xl shadow-md" placeholder="Cari coffeshopp kesukaanmu" />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <IoIosSearch />
                  </div>
                </div>
              </div>

            </div>
            <div className="py-5 px-5 pt-10">
              <CarouselVoucher/>
              <div className="">
                  <h1 className="text-lg font-bold text-slate-800">Kategori</h1>
                  <div className="flex py-5">
                    {categories.map((value, index) => (
                      <div className="flex justify-center items-center mx-4" key={index}> {/* Add mx-4 for horizontal margin */}
                        <div className="w-8"> {/* Set a fixed width for the button container */}
                          <Button size="icon" className="bg-slate-200 justify-center items-center"> {/* Adjust the width of the button */}
                            <img src={value.path} alt="coffee" className="max-w-full max-h-full" />
                          </Button>
                          <p className="text-sm text-slate-800 text-center">{value.name}</p> {/* Center-align text */}
                        </div>
                      </div>
                    ))}
                  </div>
              </div>

              <div className="py-6">
                <h3 className="text-lg font-bold text-slate-800">Rekomendasi</h3>
                {Array.from({ length: 5 }).map((_, index) => (
                    <a href="/profil">
                      <CardMitra key={index}/>
                    </a>
                ))}  
                
              </div>
            </div>
    </main>
  );
}

const categories = [
  {
    name: "Coffee",
    path: "/coffee.svg",
  },
  {
    name: "Food",
    path: "/coffee.svg",
  },
  {
    name: "Snacks",
    path: "/coffee.svg",
  },
  {
    name: "Dessert",
    path: "/coffee.svg",
  },
  {
    name: "Latte",
    path: "/coffee.svg",
  }
]