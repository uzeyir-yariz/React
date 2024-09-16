import { ButtonGroup, Stack, Button } from "@mui/material"

const LessonButtonsGroup = () => {
  return (
    <Stack direction="row">
      <ButtonGroup variant="text" >
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>

      <ButtonGroup variant="contained" orientation="vertical" >
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>
    </Stack>
  )
}

export default LessonButtonsGroup

/*
Dökümantasyon:

1. ButtonGroup bileşeni:
   - `variant`: Buton grubunun stilini belirler. Seçenekler:
     - `text`: Dolgusuz ve şeffaf butonlar.
     - `contained`: Tam dolgulu butonlar.
     - `outlined`: Sadece dış hatları olan butonlar.
   - `orientation`: Buton grubunun yönünü belirler. Seçenekler:
     - `horizontal`: Yatay düzenleme (varsayılan).
     - `vertical`: Dikey düzenleme.

2. Stack bileşeni:
   - `Stack`: Elemanları bir yığın halinde düzenler. `direction="row"` ile elemanlar yatay olarak dizilir.

3. Button bileşeni:
   - `Button`: Her bir buton elemanı. İçeriğine göre "Button 1", "Button 2", "Button 3" gibi butonlar oluşturulmuştur.
*/
