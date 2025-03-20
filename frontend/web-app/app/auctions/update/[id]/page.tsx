import Heading from "@/app/components/Heading";
import React from "react";
import AuctionForm from "../../AuctionForm";
import { getDetailedViewData } from "@/app/actions/auctionActions";

export default async function Update({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;

  if (!resolvedParams?.id) {
    throw new Error("ID parameter is missing!");
  }

  const data = await getDetailedViewData(resolvedParams.id);

  return (
    <div className="mx-auto max-w-[75%] shadow-lg bg-white rounded-lg p-4 space-y-4">
      <Heading title="Update your auction" subtitle="Please update the details of your car" />
      <AuctionForm auction={data} />
    </div>
  );
}