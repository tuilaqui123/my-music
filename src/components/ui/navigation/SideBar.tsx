import Link from "next/link";
import { navigationGroup } from "@/data/sidebardef";

export default function SideBar() {
  return (
    <nav className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:flex-col lg:w-[15%] border-r">
      <div className="bg-green-400 h-[10%] flex items-center justify-center">
        SIDE BAR TOP
      </div>

      {/* GROUP NAVIGATE */}
      <div className="overflow-y-auto h-full space-y-6 px-2 py-4">
        {navigationGroup.map((group, index) => (
          <div key={index}>
            <p className="text-xs text-gray-300 uppercase font-semibold mb-2 px-2">
              {group.name}
            </p>
            <div className="space-y-1">
              {group.children.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Link key={idx} href={item.href}>
                    <div
                      className={`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-blue-500 text-white cursor-pointer ${
                        item.active ? "bg-blue-600 font-semibold" : ""
                      }`}>
                      {Icon && <Icon className="w-4 h-4" />}
                      <span className="text-sm">{item.name}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
}
