import Link from "next/link";
import { MdOutlineDashboard, MdHistory } from "react-icons/md";
import { TbTableOptions } from "react-icons/tb";
import { CgLogOut } from "react-icons/cg";
import { SlLocationPin } from "react-icons/sl";
import { NavLink } from "./NavLink";

const Links = [
  {
    title: "Dashboard",
    href: "/",
    icon: <MdOutlineDashboard size={20} />,
  },
  {
    title: "Termo nitrógeno",
    href: "/nitrogen-tank",
    icon: <TbTableOptions size={20} />,
  },
  {
    title: "Historial",
    href: "/history",
    icon: <MdHistory size={20} />,
  },
  {
    title: "Ubicaciones",
    href: "/locations",
    icon: <SlLocationPin size={20} />,
  },
];

export const Sidebar = () => {
  return (
    <aside className="h-full p-2 bg-white shadow flex flex-col">

      <h2 className="text-xl font-bold text-gray-800 text-center">
        Adm
      </h2>

      <nav className="flex gap-2 flex-col flex-1 pt-3">
        {Links.map((link) => (
          <NavLink key={link.title} {...link} />
        ))}
      </nav>

      <button
        className="flex gap-1 items-center py-1 px-4 transition-colors text-gray-500 hover:bg-primary/10 hover:text-destructive rounded-md w-full"
      >
        <CgLogOut size={20} />
        Cerrar sesión
      </button>

    </aside>
  );
};
