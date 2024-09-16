import { Stack, TextField, InputAdornment} from "@mui/material"
import { useState } from "react"

const LessonTextField = () => {

  const [val, setVal] = useState("");

  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="adınız" variant="standard"/>
        <TextField label="soyadınız" variant="outlined" />
        <TextField label="soyadınız" variant="filled" />

        <TextField color="error" label="soyadınız" size="small" />

        <TextField color="success" helperText="lütfen yaşınızı giriniz" label="yaşınız" />
        <TextField helperText="lütfen şifreniz giriniz" type="password" label="şifreniz" />
        <TextField helperText="yazamazsın" disabled label="şifreniz" />
        <TextField InputProps={{readOnly: true}} label="şifreniz" />

        <TextField InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              TL
            </InputAdornment>
          )
        }} label="bütçeniz" type="number" />
      </Stack>

      <Stack direction="row" spacing={4}>
        <TextField 
          onChange={(e) => setVal(e.target.value)}          
          value={val}
          type="password"
          label="şifrenizi yazınız"
          variant="outlined"
          helperText={!val ? "lütfen şifrenizi girin" : "şifrenizi kimseyle paylaşmayın"}
        />
      </Stack>
    </Stack>
  )
}

export default LessonTextField

/*
Dökümantasyon:

1. `TextField` bileşeni:
   - `label`: TextField'in üzerinde görüntülenen etiketi belirtir.
   - `variant`: TextField stilini belirler. Seçenekler:
     - `standard`: Alt çizgili sade stil.
     - `outlined`: Çerçeveli stil.
     - `filled`: Dolgulu stil.
   - `color`: Renk stilini belirler. Örnek: `error`, `success`.
   - `helperText`: Kullanıcıya ek bilgi ya da yardım metni sağlar. 
   - `type`: Girdi tipini belirler. Örnek: `password`, `number`.
   - `disabled`: Giriş alanını devre dışı bırakır, kullanıcı giriş yapamaz.
   - `InputProps`: Girdi alanına ek özellikler verir. Örnek:
     - `readOnly`: Yalnızca okunabilir hale getirir.
     - `endAdornment`: Girdi alanının sonunda bir ikon veya metin ekler.

2. `useState` hook'u:
   - `val`: Şifre alanındaki değeri tutmak ve takip etmek için kullanılır.
   - `setVal`: Girdi değişikliklerini takip eder ve durumu günceller.

3. Stack bileşeni:
   - `spacing`: İçerikler arasındaki boşluğu ayarlamak için kullanılır.
   - `direction="row"`: Elemanları yatay olarak hizalar.
*/
