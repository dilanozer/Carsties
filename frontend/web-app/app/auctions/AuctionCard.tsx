import { Auction } from "@/types";
import CarImage from "./CarImage";
import CountdownTimer from "./CountdownTimer";
import Link from "next/link";

type Props = {
  auction: Auction
}

export default function AuctionCard({ auction }: Props) {
  return (
    <Link href={`/auctions/details/${auction.id}`} className="group block mb-6 mr-2">
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
    </Link>
  )
}
