import { Box, MenuItem, TextField, Typography } from '@mui/material'
import { useState } from 'react'

const LessonSelect = () => {
  const [val, setVal] = useState<string>("");
  return (
    <Box>
      <TextField disabled={!!val} label="dondurma seçin" select fullWidth value={val} onChange={(e) => setVal(e.target.value)}>
        <MenuItem value="chocolate">çikolatalı</MenuItem>
        <MenuItem value="vanilla">vanilyalı</MenuItem>
        <MenuItem value="strawberry">çilekli</MenuItem>
      </TextField>
      {
        val && <Typography variant="body1">seçilen dondurma : {val}</Typography>
      }
    </Box>
  )
}

export default LessonSelect

/*
Dökümantasyon:

1. `useState` hook'u:
   - `val`: Seçilen dondurma değerini tutar. Başlangıçta boş bir string ("") olarak ayarlanmış.
   - `setVal`: Kullanıcı bir dondurma seçtiğinde, seçilen değeri günceller.

2. `Box` bileşeni:
   - Birden fazla bileşeni sarmalamak için kullanılan bir düzen bileşeni. `Box` bileşeni, MUI'da içerikleri düzenlemeye yardımcı olur.

3. `TextField` bileşeni:
   - Etiketli bir giriş alanı sağlar. Burada, bir "select" (açılır menü) olarak kullanılmış.
   - `disabled={!!val}`: Eğer bir dondurma seçilmişse (`val` doluysa), giriş alanı devre dışı bırakılır.
   - `label`: Giriş alanının üstünde görüntülenen metin ("dondurma seçin").
   - `select`: `TextField` bileşeninin bir açılır menü olmasını sağlar.
   - `fullWidth`: Giriş alanının tam genişlikte olmasını sağlar.
   - `value={val}`: Seçili dondurmayı temsil eder. Kullanıcının yaptığı seçime göre güncellenir.
   - `onChange={(e) => setVal(e.target.value)}`: Kullanıcı bir dondurma seçtiğinde, `setVal` fonksiyonu ile bu seçim durumu güncellenir.

4. `MenuItem` bileşeni:
   - Açılır menüde bir seçenek olarak kullanılan bileşen. Her bir `MenuItem`, bir dondurma seçeneğini temsil eder.
   - `value`: Seçildiğinde bu değeri `TextField`'a gönderir. Örneğin, "çikolatalı" seçildiğinde `val` "chocolate" olarak güncellenir.

5. `Typography` bileşeni:
   - Seçilen dondurmayı kullanıcıya göstermek için kullanılır. Eğer bir değer (`val`) seçilmişse görüntülenir.
   - `variant="body1"`: Yazı tipinin boyutunu belirler. Bu örnekte, "body1" stilinde bir metin oluşturulmuştur.
   - `val &&`: Eğer `val` boş değilse, yani bir dondurma seçilmişse, bu metin gösterilir. Seçilen dondurmayı gösteren bir mesaj oluşturur.

6. Kullanım Senaryosu:
   - Kullanıcı bir dondurma seçtiğinde, seçim açılır menüden yapılır. Seçim yapıldığında `TextField` devre dışı bırakılır ve altta seçilen dondurma bilgisi görüntülenir.
*/
