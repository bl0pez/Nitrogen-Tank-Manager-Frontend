"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
    title: string;
    href: string;
    icon: JSX.Element;
}

export const NavLink = ({href, icon, title}: Props) => {
  const path = usePathname();
  return (
      <Link
        key={title}
        href={href}
        className={clsx('flex gap-1 items-center py-1 px-4 transition-colors text-gray-500 hover:bg-primary/10 hover:text-primary rounded-md', {
          'bg-primary/10 text-primary': path === href
        })}
      >
        {icon}
        <span>{title}</span>
      </Link>
  )
}
