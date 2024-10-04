const Footer = () => {
  return (
    <footer className="text-light w-100 position-absolute bottom-0">
      <p className="text-center">
        <a
          href="https://uzeyir-yariz.com.tr"
          className="link-info"
          target="_blank"
        >
          uzeyir-yariz
        </a>
        &copy; {new Date().getFullYear()} Web sitem
      </p>
    </footer>
  );
};

export default Footer;
