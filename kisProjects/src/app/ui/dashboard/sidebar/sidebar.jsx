import React from 'react'
import styles from "./sidebar.module.css"
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdLogout,
} from "react-icons/md";
import MenuLink from './menuLink/menuLink';
import Image from 'next/image';


const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Főoldal",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Rendelések",
        path: "/dashboard/orders",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Termékek",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Kollekciók",
        path: "/dashboard/collections",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Felhasználók",
        path: "/dashboard/users",
        icon: <MdWork />,
      },
      {
        title: "Statisztika",
        path: "/dashboard/statistics",
        icon: <MdAnalytics />,
      },
      {
        title: "Munkatársak",
        path: "/dashboard/staffs",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "Konfiguráció",
    list: [
      {
        title: "Beállitások",
        path: "/dashboard/options",
        icon: <MdOutlineSettings />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className="top-10 sticky ">
      <div className={styles.user}>
        <Image className={styles.userImage} src="/noavatar.png" alt="" width="50" height="50" />
        <div className={styles.userDetail}>
            <span className={styles.userName}>John Joe</span>
            <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map(cat=>(
          <li key={cat.title}>
          <span className={styles.cat}>{cat.title}</span>
            {cat.list.map(item=>(
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <button className={styles.logout}>
        <MdLogout /> Logout
      </button>
    </div>
  )
}

export default Sidebar