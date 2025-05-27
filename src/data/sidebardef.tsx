import {
  Home,
  Clock,
  Compass,
  Music,
  Tags,
  User,
  Album,
  ListMusic,
  Heart,
  PlusCircle,
  UploadCloud,
  FolderClosed,
} from "lucide-react";

export const navigationGroup = [
  {
    name: "General",
    comment: "Các mục cơ bản",
    children: [
      {
        name: "Home",
        href: "/",
        icon: Home,
        notifications: false,
        active: true,
      },
      {
        name: "History",
        href: "/history",
        icon: Clock,
        notifications: false,
        active: false,
      },
      {
        name: "Explore",
        href: "/explore",
        icon: Compass,
        notifications: false,
        active: false,
      },
    ],
  },
  {
    name: "Library",
    comment: "Thư viện nhạc của bạn",
    children: [
      {
        name: "Tracks",
        href: "/tracks",
        icon: Music,
        active: false,
      },
      {
        name: "Genres",
        href: "/genres",
        icon: Tags,
        active: false,
      },
      {
        name: "Artists",
        href: "/artists",
        icon: User,
        active: false,
      },
      {
        name: "Albums",
        href: "/albums",
        icon: Album,
        active: false,
      },
      {
        name: "Playlists",
        href: "/playlists",
        icon: ListMusic,
        active: false,
      },
      {
        name: "Favorites",
        href: "/favorites",
        icon: Heart,
        active: false,
      },
    ],
  },
  {
    name: "Personal",
    comment: "Tùy chỉnh cá nhân",
    children: [
      {
        name: "Recently Added",
        href: "/recently-added",
        icon: PlusCircle,
        active: false,
      },
      {
        name: "Uploads",
        href: "/uploads",
        icon: UploadCloud,
        active: false,
      },
      {
        name: "My Collections",
        href: "/collections",
        icon: FolderClosed,
        active: false,
      },
    ],
  },
];
