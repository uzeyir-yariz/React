import { Box } from "@mui/material"

const LessonBox = () => {
  return (
    <Box sx={{
      backgroundColor: 'primary.main',
      width: "100px",
      height: "100px",
      color: "white",
      padding: "1rem",
      cursor: "pointer",
      transition: "ease-in-out 500ms",
      borderRadius: "5px",
      '&:hover':{
        backgroundColor: "#FF9100"
      }
    }}>
      kutu
    </Box>
  )
}

export default LessonBox
