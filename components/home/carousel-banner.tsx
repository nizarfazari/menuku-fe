import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export function CarouselBanner() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <Carousel className="w-full max-w-sm py-2"
    plugins={[plugin.current]} onMouseEnter={plugin.current.stop}
    onMouseLeave={plugin.current.reset}>
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1">
            <div className="p-1">
            <img className="rounded-lg shadow-md object-cover w-full h-36" src="/banner-example.png" alt="Hero" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
