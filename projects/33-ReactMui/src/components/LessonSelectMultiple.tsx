import { Box, MenuItem, TextField } from "@mui/material";
import { useState } from "react";

const LessonSelectMultiple = () => {
  const [val, setVal] = useState<string[]>([]);

  console.log(val);

  return (
    <Box>
      <TextField
        select
        label="dondurma seçin"
        SelectProps={{
          multiple: true
        }}
        fullWidth
        value={val}
        onChange={(e) => setVal(typeof e.target.value === "string" ? e.target.value.split(", ") : e.target.value)}
      >
        <MenuItem value="chocolate">çikolatalı</MenuItem>
        <MenuItem value="vanilla">vanilyalı</MenuItem>
        <MenuItem value="strawberry">çilekli</MenuItem>
      </TextField>
      {/* {val && <Typography variant="body1">seçilen dondurma : {val}</Typography>} */}
    </Box>
  );
};

export default LessonSelectMultiple;

/*
Dökümantasyon:

1. `useState` hook'u:
   - `val`: Seçilen dondurmaların değerlerini tutar. Başlangıçta boş bir dizi olarak ayarlanmış (`[]`).
   - `setVal`: Kullanıcı bir veya birden fazla dondurma seçtiğinde, seçilen dondurmaları günceller.

2. `Box` bileşeni:
   - İçerikleri düzenlemeye yardımcı olan bir bileşendir. `Box` bileşeni, MUI'da düzenleme ve hizalama için kullanılır.

3. `TextField` bileşeni:
   - Etiketli bir giriş alanı sağlar. Burada, çoklu seçim yapılabilen bir açılır menü olarak kullanılmış.
   - `select`: `TextField` bileşeninin bir açılır menü olmasını sağlar.
   - `SelectProps={{ multiple: true }}`: Açılır menünün birden fazla seçeneğin seçilmesine izin vermesini sağlar.
   - `fullWidth`: Giriş alanının tam genişlikte olmasını sağlar.
   - `value={val}`: Seçili dondurmaların değerlerini temsil eder. Kullanıcının yaptığı seçimlere göre güncellenir.
   - `onChange={(e) => setVal(typeof e.target.value === "string" ? e.target.value.split(", ") : e.target.value)}`:
     - Kullanıcı bir veya daha fazla dondurma seçtiğinde, `setVal` fonksiyonu ile `val` güncellenir.
     - Eğer `e.target.value` bir string ise, bu değeri virgüllerle ayrılmış diziye dönüştürür (`split(", ")`).
     - Eğer `e.target.value` bir dizi ise, doğrudan `setVal` ile güncellenir.

4. `MenuItem` bileşeni:
   - Açılır menüde bir seçenek olarak kullanılan bileşendir. Her bir `MenuItem`, bir dondurma seçeneğini temsil eder.
   - `value`: Seçildiğinde bu değeri `TextField`'a gönderir. Örneğin, "çikolatalı" seçildiğinde `val` "chocolate" olarak güncellenir.

5. Kullanım Senaryosu:
   - Kullanıcı birden fazla dondurma seçebilir. Seçilen dondurmalar bir dizi olarak `val` içinde tutulur.
   - `TextField`, çoklu seçimleri destekler ve seçilen dondurmaları `val` dizisinde saklar.
   - `console.log(val)`: Seçilen dondurmaları tarayıcı konsolunda gösterir.
   - Kodda yorum satırı olarak bırakılan `Typography` bileşeni, seçilen dondurmaları kullanıcıya göstermek için kullanılabilir.
*/
