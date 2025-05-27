import CardBox from "@/components/cardBox";

export default function ArtistsPage() {
  return (
    <div>
      <h3 className="text-3xl mb-5 font-black">Artists</h3>
      <div className="grid grid-cols-4 gap-4">
        <CardBox />
        <CardBox />
        <CardBox />
        <CardBox />
        <CardBox />
        <CardBox />
        <CardBox />
        <CardBox />
      </div>
    </div>
  );
}
