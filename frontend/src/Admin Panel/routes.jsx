import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, OrganicItems } from "@/pages/Admin Dashboard";
import ItemsCatagory from "@/pages/Admin Dashboard/Products/productOptions/ItemsCatagory";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import Events from "@/pages/Admin Dashboard/Events";


const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <FontAwesomeIcon icon={faLeaf} {...icon} />,
        name: "Organic Items",
        path: "/products",
        element: <OrganicItems />
      },
      {
        icon: <FontAwesomeIcon icon={faLeaf} {...icon} />,
        name: "Events",
        path: "/events",
        element: <Events />
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },
    ],
  },

];

export default routes;
