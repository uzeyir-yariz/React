import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <footer className="footer" 
      style={{
        display: "flex",
        flexDirection: "column"
      }}
    >
      <div className="content has-text-centered">
        <p>tüm haklar saklıdır 2024 - uzeyir-yariz</p>
      </div>
      <div className="content has-text-centered">
        <a className="mx-4" href="https://instagram.com/uzeyir-yariz" target="_blank" rel="noopener noreferrer">
          <InstagramIcon fontSize="large" />
        </a>
        <a className="mx-4" href="https://youtube.com/uzeyir-yariz" target="_blank" rel="noopener noreferrer">
          <YouTubeIcon fontSize="large" />
        </a>
        <a className="mx-4" href="https://github.com/uzeyir-yariz" target="_blank" rel="noopener noreferrer">
          <GitHubIcon fontSize="large" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
