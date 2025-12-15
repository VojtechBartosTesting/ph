"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-gray-900 border-b border-gray-800 p-4">
      <div className="max-w-4xl mx-auto flex gap-6">
        <Link
          href="/"
          className={`transition-colors ${
            isActive("/") ? "text-white" : "text-gray-300 hover:text-white"
          }`}
        >
          Home
        </Link>
        <Link
          href="/health"
          className={`transition-colors ${
            isActive("/health")
              ? "text-white"
              : "text-gray-300 hover:text-white"
          }`}
        >
          Health
        </Link>
        <Link
          href="/status"
          className={`transition-colors ${
            isActive("/status") ? "text-white" : "text-gray-300 hover:text-white"
          }`}
        >
          Status
        </Link>
      </div>
    </nav>
  );
}

