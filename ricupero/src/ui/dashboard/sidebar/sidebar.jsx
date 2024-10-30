"use client"
import { AuthMe } from "@/pages/api/api";
import { useSignOut } from '@/pages/api/signOut';
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import { BsFillTruckFrontFill } from "react-icons/bs";
import { FaBuilding, FaHome, FaTruck } from "react-icons/fa";
import { FaRoad } from "react-icons/fa6";
import {
  FiChevronsRight,
} from "react-icons/fi";
import { GiMineTruck } from "react-icons/gi";
import { LuContainer } from "react-icons/lu";
import {
  MdDashboard,
} from "react-icons/md";

const menuItems = [

  {
    title: "Oldalak",
    icon: <MdDashboard />,
    subItems: [
      {
        title: "Főoldal",
        path: "/dashboard/main",
        icon: <FaHome />,
      },
      {
        title: "Géppark",
        path: "/dashboard/geppark",
        icon: <BsFillTruckFrontFill />,
      },
      {
        title: "Fuvarozás",
        path: "/dashboard/fuvarozas",
        icon: <FaTruck />,
      },
      {
        title: "Útépítés",
        path: "/dashboard/utepites",
        icon: <GiMineTruck />,
      },
      {
        title: "Útseprő",
        path: "/dashboard/utsepro",
        icon: <FaRoad />,
      },
      {
        title: "Konténerek",
        path: "/dashboard/kontener",
        icon: <LuContainer />,
      },
      {
        title: "Démász",
        path: "/dashboard/demasz",
        icon: <FaBuilding />,
      },
    ],
  },
];

const Sidebar = () => {
  const signOut = useSignOut();
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState("");
  const [subMenuOpen, setSubMenuOpen] = useState({});
  const router = useRouter();

  useEffect(() => {
    const currentPath = router.pathname;
    menuItems.forEach((item) => {
      const matchingSubItem = item.subItems.find((subItem) => subItem.path === currentPath);

      if (matchingSubItem) {
        setSelected(matchingSubItem.title);
        setSubMenuOpen((prev) => ({ ...prev, [item.title]: true }));
      }
    });
  }, [router.pathname]);

  const handleToggleSubMenu = (title) => {
    setSubMenuOpen((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <motion.nav
      layout
      className="sticky top-0 left-0 h-screen shrink-0 border-r border-slate-300 bg-white p-2"
      style={{
        width: open ? "225px" : "fit-content",
        height: "100vh",
      }}
    >
      <TitleSection open={open} />
      <div className='mb-3 border-b border-slate-300 pb-3'>
        <button
          onClick={signOut}
          className='text-gray-700 font-medium bg-transparent hover:bg-slate-600 hover:text-black transition-colors duration-200 rounded'>
          Kijelentkezés
        </button>
      </div>
      <div className="space-y-1 flex">
        {menuItems.map((item, index) => (
          <div key={index}>
            <Option
              Icon={() => item.icon}
              title={item.title}
              selected={selected}
              setSelected={setSelected}
              open={open}
              onToggle={() => handleToggleSubMenu(item.title)}
            />
            {subMenuOpen[item.title] && (
              <SubMenu open={open}>
                {item.subItems.map((subItem, subIndex) => (
                  <Option
                    key={subIndex}
                    Icon={() => subItem.icon}
                    title={subItem.title}
                    selected={selected}
                    setSelected={setSelected}
                    open={open}
                    href={subItem.path} // Pass the correct path
                  />
                ))}
              </SubMenu>
            )}
          </div>
        ))}
      </div>

      <ToggleClose open={open} setOpen={setOpen} />
    </motion.nav>
  );
};



const Option = ({ Icon, title, selected, setSelected, open, onToggle, href }) => {
  const buttonContent = (
    <motion.button
      layout
      onClick={() => {
        setSelected(title);
        if (onToggle) onToggle(); // Call onToggle if provided
      }}
      className={`relative flex h-10 w-full items-center rounded-md transition-colors ${selected === title ? "bg-indigo-100 text-indigo-800" : "text-slate-500 hover:bg-slate-100"
        }`}
    >
      <motion.div layout className="grid h-full w-10 place-content-center text-lg">
        <Icon />
      </motion.div>
      {open && (
        <motion.span
          layout
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.075 }}
          className="text-xs font-medium"
        >
          {title}
        </motion.span>
      )}
    </motion.button>
  );

  // Only wrap in Link if href is provided
  return href ? <Link href={href}>{buttonContent}</Link> : buttonContent;
};

const SubMenu = ({ open, children }) => {
  return (
    <motion.ul
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`pl-4 overflow-hidden pt-1 space-y-2`}
    >
      {children}
    </motion.ul>
  );
};

const TitleSection = ({ open }) => {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await AuthMe();
      if (userData.authenticated) {
        setUsername(userData.user.username); // A felhasználó nevét most az API válaszából kapjuk
      }
    };

    fetchUserData();
  }, []);
  return (
    <div className="mb-3 border-b border-slate-300 pb-3">
      <div className="flex cursor-pointer items-center justify-between rounded-md transition-colors hover:bg-slate-100">
        <div className="flex items-center gap-2">
          <Logo />
          {open && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.125 }}
            >
              <span className="text-xs text-slate-500">{username || 'Név nem elérhető'}</span> {/* Itt írjuk ki a felhasználó nevét */}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

const Logo = () => {
  return (
    <motion.div
      layout
      className="grid size-12 shrink-0 place-content-center rounded-md"
    >
      <Image
        src='/riclogo.jpg'
        alt='logo'
        width={70}
        height={100}
      />
    </motion.div>
  );
};

const ToggleClose = ({ open, setOpen }) => {
  return (
    <motion.button
      layout
      onClick={() => setOpen((pv) => !pv)} // Az open állapot megfordítása
      className="absolute bottom-0 left-0 right-0 border-t border-slate-300 transition-colors hover:bg-slate-100"
    >
      <div className="flex items-center p-2">
        <motion.div className="grid size-10 place-content-center text-lg">
          <FiChevronsRight
            className={`text-black transition-transform duration-500 ${open && "rotate-180"}`}
          />
        </motion.div>
      </div>
    </motion.button>
  );
};

export default Sidebar;