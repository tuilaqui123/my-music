"use client";

import type React from "react";
import { useState } from "react";
import { Play, Plus } from "lucide-react";

export default function GenreCard({ genre }: any) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group overflow-hidden border-zinc-800 bg-zinc-900/50 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div className="p-6">
        <div
          className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${genre.color} text-white`}>
          {genre.icon}
        </div>
        <h3 className="mb-2 text-xl font-bold text-white">{genre.name}</h3>
        <p className="text-sm text-zinc-400">{genre.description}</p>
      </div>
      <div className="border-t border-zinc-800 bg-black/20 p-4">
        <div className="flex w-full items-center justify-between">
          <div
            className={`rounded-full transition-all duration-300 ${
              isHovered
                ? "bg-white text-black"
                : "text-zinc-400 hover:text-white"
            }`}>
            <Play className="h-4 w-4" />
          </div>
          <div className="text-zinc-400 hover:text-white">
            <Plus className="h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
