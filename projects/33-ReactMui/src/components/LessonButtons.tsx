import { Button, Stack } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';

// button kullanacağım
// stack kullanacağım
// icons kullanacağım

const LessonButtons = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={4}>
        <Button variant="text">text</Button>
        <Button variant="outlined">outlined</Button>
        <Button variant="contained">contained</Button>
      </Stack>

      <Stack direction="row" spacing={4}>
        <Button variant="text" color="primary">primary</Button>
        <Button variant="text" color="secondary">secondary</Button>
        <Button variant="text" color="info">info</Button>
        <Button variant="text" color="error">error</Button>
        <Button variant="text" color="warning">warning</Button>
        <Button variant="text" color="success">success</Button>
      </Stack>

      <Stack direction="row" spacing={4}>
        <Button variant="contained" color="error" startIcon={<DeleteIcon/>} >delete it</Button>
        <Button variant="contained" endIcon={<SendIcon/>} >send it</Button>
      </Stack>
    </Stack>
  )
}

export default LessonButtons

/*
Dökümantasyon:

1. Button bileşeni:
   - `variant`: Butonun stilini belirler. Üç seçenek vardır:
     - `text`: Dolgusuz ve şeffaf buton.
     - `outlined`: Sadece dış hatları olan buton.
     - `contained`: Tam dolgulu, arka planı olan buton.
   - `color`: Butonun rengini belirler. Seçenekler: 
     - `primary`, `secondary`, `info`, `error`, `warning`, `success`.
     - Renkler Material UI'nin temasına göre şekillenir.

2. Stack bileşeni:
   - `Stack`: Elemanları bir yığın halinde düzenler. `direction` özelliği ile yatay (`row`) veya dikey (`column`) yığın oluşturulabilir.
   - `spacing`: Yığın içindeki elemanlar arasındaki boşlukları ayarlar. Örneğin, `spacing={4}` ifadesi elemanlar arasında 4 birim boşluk bırakır.

3. Icon bileşenleri:
   - Material UI simgeleri (icons) olarak `SendIcon` ve `DeleteIcon` kullanılmıştır.
   - `startIcon`: Butonun başında simge kullanmak için.
   - `endIcon`: Butonun sonunda simge kullanmak için.
*/