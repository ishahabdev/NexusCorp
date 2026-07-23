"use client"
import SaasFuture from './../components/home/SaasFuture';
import EnggFeature from "@/components/home/EnggFeature";
import ReadyToShip from "@/components/home/ReadyToShip";

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <SaasFuture />
      <EnggFeature />
      <ReadyToShip />

    </div>
  );
}
