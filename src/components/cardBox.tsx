export default function CardBox() {
  return (
    <div className="flex flex-col gap-2 rounded-md bg-zinc-900 p-4 transition-all hover:bg-zinc-800 cursor-pointer">
      <div className="aspect-square w-full rounded-md bg-zinc-800"></div>
      <div className="mt-2">
        <h3 className="font-semibold">Playlist Title</h3>
        <p className="text-sm text-zinc-400">Artist • Album</p>
      </div>
    </div>
  );
}
