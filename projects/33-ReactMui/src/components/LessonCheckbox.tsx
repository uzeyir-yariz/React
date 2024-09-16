import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from "@mui/material"
import React, { useState } from "react"

const LessonCheckbox = () => {

  const [isAccept, setIsAccept] = useState<boolean>(false);
  const [knowledge, setKnowledge] = useState<string[]>([]);

  const handleKnowledgeChange = (event:React.SyntheticEvent<Element, Event>, checked: boolean) => {
    const value = (event.target as HTMLInputElement).value;
    if (checked) {
      setKnowledge([...knowledge, value]); // Seçili ise ekle
    } else {
      setKnowledge(knowledge.filter(item => item !== value)); // Seçili değilse çıkar
    }
  }

  console.log(knowledge);

  return (
    <>
    <Box>
      <FormControl>
        <FormLabel>oynadığın oyunlar</FormLabel>
        <FormGroup>
          <FormControlLabel control={<Checkbox/> } label="Far cry 3" />
          <FormControlLabel control={<Checkbox/>} label="Arma 2" />
          <FormControlLabel control={<Checkbox/>} label="rimworld" />
          <FormControlLabel control={<Checkbox/>} label="Assasin creed 2" />
        </FormGroup>
      </FormControl>
    </Box>
    <Box>
      <FormControl>
        <FormLabel>kullanım koşulları</FormLabel>
        <FormGroup>
          <FormControlLabel control={<Checkbox/>} checked={isAccept} onChange={(e) => setIsAccept((e.target as HTMLInputElement).checked)} label="kabul ediyorum" />
        </FormGroup>
      </FormControl>
    </Box>
    <Box>
      <FormControl>
        <FormLabel>Front End'de neleri biliyorsun ?</FormLabel>
        <FormGroup>
            <FormControlLabel 
              onChange={handleKnowledgeChange} 
              checked={knowledge.includes("react")} 
              control={<Checkbox />} 
              label="React" 
              value="react" 
            />
            <FormControlLabel 
              onChange={handleKnowledgeChange} 
              checked={knowledge.includes("vue")} 
              control={<Checkbox />} 
              label="Vue" 
              value="vue" 
            />
            <FormControlLabel 
              onChange={handleKnowledgeChange} 
              checked={knowledge.includes("anguler")} 
              control={<Checkbox />} 
              label="Anguler" 
              value="anguler" 
            />
          </FormGroup>
      </FormControl>
    </Box>
    </>
  )
}

export default LessonCheckbox
