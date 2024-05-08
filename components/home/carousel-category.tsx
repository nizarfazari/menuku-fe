import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "../ui/button"
import { useState } from "react";

export function CarouselSize() {
    const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm py-4"
    >
      <CarouselContent className="-ml-1">
        {categoryMenu.map((value, index) => (
          <CarouselItem key={index} className="pl-1 basis-1/3">
            <div className="">
              {/* <Card> */}
                {/* <CardContent className="pl-6">
                  <span className="text-sm font-semibold">Bene {index + 1}</span>
                </CardContent> */}
                <Button
                    className="bg-slate-900 text-white px-2"
                    onClick={handleClick}
                    >
                    <p>{value.name}</p>
                </Button>
              {/* </Card> */}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  )
}


const categoryMenu = [
    {
        name:"Coffee",
    },
    {
        name:"Signature",
    },
    {
        name:"Happy Awor",
    },
    {
        name:"Non Coffee",
    },
    {
        name:"Snacks",
    },
    {
        name:"Signature",
    },
    {
        name:"Happy Awor",
    },
]