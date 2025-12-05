const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpened = hour <= closeHour && hour >= openHour;

  return (
    <footer className="bg-[#2990FF] text-white text-center py-4 mt-12">
      {isOpened && (
        <p className="text-sm">
          We're open from 12:00 to 22:00. Come visit us or order online.
        </p>
      )}
    </footer>
  );
};

export default Footer;
