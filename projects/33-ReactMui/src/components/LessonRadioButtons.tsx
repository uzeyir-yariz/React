import { FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from "@mui/material"
import { useState } from "react"

const LessonRadioButtons = () => {

  const [val, setVal] = useState<string | null>(null);

  return (
    <FormControl>
      <FormLabel>Maaş beklentisi</FormLabel>
      <RadioGroup row value={val} onChange={(e) => setVal(e.target.value)}>
        <FormControlLabel label="2000" value={2000} control={<Radio/>}/>
        <FormControlLabel label="4000" value={4000} control={<Radio/>}/>
        <FormControlLabel label="8000" value={8000} control={<Radio/>}/>
      </RadioGroup>
      <FormHelperText> { val ?  `maaş beklentiniz : ${val}` : "lütfen maaş seçin" } </FormHelperText>
    </FormControl>
  )
}

export default LessonRadioButtons
