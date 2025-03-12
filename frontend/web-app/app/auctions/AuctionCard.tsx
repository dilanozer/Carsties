import { Auction } from "@/types";
import CarImage from "./CarImage";
import CountdownTimer from "./CountdownTimer";

type Props = {
  auction: Auction
}

export default function AuctionCard({ auction }: Props) {
  return (
    <a href="#" className="group block mb-6 mr-2">
      <div className="relative w-full bg-gray-200 rounded-lg overflow-hidden" style={{ aspectRatio: '16/10' }}>
        <CarImage imageUrl={auction.imageUrl} />
        <div className="flex justify-start items-end absolute inset-0 p-2">
          <CountdownTimer auctionEnd={auction.auctionEnd} />
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <h3 className="text-gray-700">{auction.make} {auction.model}</h3>
        <p className="font-semibold text-sm">{auction.year}</p>
      </div>
    </a>
  )
}
