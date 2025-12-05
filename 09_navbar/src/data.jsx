import { FaFacebook, FaTwitter, FaLinkedin, FaBehance } from "react-icons/fa";

export const links = [
  { id: 1, url: "/home", text: "Home" },
  { id: 2, url: "/about", text: "About" },
  { id: 3, url: "/projects", text: "Projects" },
  { id: 4, url: "/contact", text: "Contact" },
  { id: 5, url: "/profile", text: "Profile" },
];

export const icons = [
  {
    id: 1,
    url: "https://www.facebook.com",
    icon: <FaFacebook className="text-blue-600 text-md hover:text-blue-800" />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: (
      <FaTwitter className="text-blue-600 text-md hover:text-blue-800 ml-1" />
    ),
  },
  {
    id: 3,
    url: "https://www.linkedin.com",
    icon: (
      <FaLinkedin className="text-blue-600 text-md hover:text-blue-800 ml-1" />
    ),
  },
  {
    id: 4,
    url: "https://www.behance.net",
    icon: (
      <FaBehance className="text-blue-600 text-md hover:text-blue-800 ml-1" />
    ),
  },
];
