import GenreCard from "@/components/genreBox";
import { useState } from "react";
import {
  Headphones,
  Music,
  Radio,
  Sparkles,
  Disc,
  Mic,
  Guitar,
  Piano,
  Drum,
} from "lucide-react";

const allGenres = [
  {
    id: 1,
    name: "Hip Hop",
    description: "Rhythmic music with rapping and beats",
    icon: <Mic className="h-10 w-10" />,
    color: "from-amber-500 to-orange-600",
    popular: true,
  },
  {
    id: 2,
    name: "Rock",
    description: "Guitar-driven sound with strong beats",
    icon: <Guitar className="h-10 w-10" />,
    color: "from-red-500 to-red-600",
    popular: true,
  },
  {
    id: 3,
    name: "Electronic",
    description: "Computer-generated sounds and beats",
    icon: <Sparkles className="h-10 w-10" />,
    color: "from-cyan-500 to-blue-600",
    popular: true,
  },
  {
    id: 4,
    name: "Pop",
    description: "Catchy melodies and contemporary lyrics",
    icon: <Music className="h-10 w-10" />,
    color: "from-pink-500 to-purple-600",
    popular: true,
  },
  {
    id: 5,
    name: "Jazz",
    description: "Improvisation, swing and blue notes",
    icon: <Piano className="h-10 w-10" />,
    color: "from-blue-500 to-indigo-600",
    popular: false,
  },
  {
    id: 6,
    name: "Classical",
    description: "Orchestral music from the Western tradition",
    icon: <Piano className="h-10 w-10" />,
    color: "from-emerald-500 to-teal-600",
    popular: false,
  },
  {
    id: 7,
    name: "R&B",
    description: "Rhythm and blues with soulful vocals",
    icon: <Headphones className="h-10 w-10" />,
    color: "from-violet-500 to-purple-600",
    popular: true,
  },
  {
    id: 8,
    name: "Reggae",
    description: "Jamaican music with offbeat rhythms",
    icon: <Radio className="h-10 w-10" />,
    color: "from-green-500 to-lime-600",
    popular: false,
  },
  {
    id: 9,
    name: "Country",
    description: "Folk-inspired music with string instruments",
    icon: <Guitar className="h-10 w-10" />,
    color: "from-yellow-500 to-amber-600",
    popular: false,
  },
  {
    id: 10,
    name: "Metal",
    description: "Heavy, powerful sound with distorted guitars",
    icon: <Guitar className="h-10 w-10" />,
    color: "from-slate-600 to-slate-800",
    popular: false,
  },
  {
    id: 11,
    name: "Indie",
    description: "Independent music with alternative sounds",
    icon: <Disc className="h-10 w-10" />,
    color: "from-rose-500 to-pink-600",
    popular: true,
  },
  {
    id: 12,
    name: "Funk",
    description: "Rhythmic music with emphasis on bass and drums",
    icon: <Drum className="h-10 w-10" />,
    color: "from-purple-500 to-fuchsia-600",
    popular: false,
  },
];
export default function GenresPage() {
  return (
    <div>
      <h3 className="text-3xl mb-5 font-black">Tags</h3>
      <div className="grid grid-cols-4 gap-4">
        {allGenres.slice(4, 8).map((genre) => (
          <GenreCard key={genre.id} genre={genre} />
        ))}
      </div>
    </div>
  );
}
