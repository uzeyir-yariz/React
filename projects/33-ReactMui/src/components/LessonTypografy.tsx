import { Typography } from "@mui/material";

const LessonTypografy = () => {
  return (
    <div>
      <Typography variant="body1">
        body1, Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
        atque ratione, animi repudiandae aut nobis dolorem! Nam eaque cupiditate
        commodi quisquam nesciunt, possimus libero tempora cum expedita alias
        corporis praesentium!
      </Typography>

      <Typography variant="body2">
        body1, Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
        atque ratione, animi repudiandae aut nobis dolorem! Nam eaque cupiditate
        commodi quisquam nesciunt, possimus libero tempora cum expedita alias
        corporis praesentium!
      </Typography>

      <Typography variant="h1">başlık 1</Typography>
      <Typography variant="h2">başlık 2</Typography>
      <Typography variant="h3">başlık 3</Typography>
      <Typography variant="h4">başlık 4</Typography>
      <Typography variant="h5">başlık 5</Typography>
      <Typography variant="h6">başlık 6</Typography>

      <Typography variant="h1" component="h4">H1 görünümü</Typography> {/* H1 olarak görünür H4 olarak olur */}

      <Typography variant="h3" component="h4" align="right">sağ</Typography> {/* H3 olarak görünür H4 olarak olur */}
      <Typography variant="h3" component="h4" align="left">sol</Typography> {/* H3 olarak görünür H4 olarak olur */}

      <Typography variant="subtitle1">subtitle 1</Typography> 
      <Typography variant="subtitle2">subtitle 2</Typography> 
    </div>
  );
};

export default LessonTypografy;
