import { FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from "@mui/material";
import { useState } from "react"

const LessonRadioButtonsExample = () => {
  const [val, setVal] = useState<boolean | null>(null);

  return (
    <form>
      <FormControl>
        <FormLabel>hangisi doğru cevap?</FormLabel>
        <RadioGroup value={val} onChange={(e) => setVal(e.target.value === "true")}>
          <FormControlLabel value={true} control={<Radio />} label="2 + 2 = 4" />
          <FormControlLabel value={false} control={<Radio />} label="2 + 2 = 5" />
        </RadioGroup>
        { val !== null && (
          <FormHelperText>
            {val ? "doğru cevap!" : "1984!!!"}
          </FormHelperText>
          )
        }
      </FormControl>
    </form>
  )
}

export default LessonRadioButtonsExample

/*
Dökümantasyon:

1. `useState` hook'u:
   - `val`: Radio buton grubunda seçilen değeri tutar. Başlangıçta `null` olarak ayarlanmış.
   - `setVal`: Seçilen değere göre `true` veya `false` olarak durumu günceller.

2. `FormControl` bileşeni:
   - Bir form bileşeni grubunu sarmalamak için kullanılır. İçerideki bileşenlerin birlikte çalışmasını sağlar.
   
3. `FormLabel` bileşeni:
   - Radio grubuna açıklayıcı bir başlık sağlar. Örnek: "hangisi doğru cevap?".

4. `RadioGroup` bileşeni:
   - Radio butonlarının gruplandırılmasını sağlar. `value` ve `onChange` ile seçilen butonun durumunu kontrol eder.
   - `onChange`: Seçilen değeri günceller. Burada `e.target.value === "true"` kontrolü ile boolean hale getirilmiş.

5. `FormControlLabel` bileşeni:
   - Bir `Radio` bileşenini etiketle birlikte kullanmak için kullanılır. 
   - `value`: Radio butonunun değeri. Burada `true` ve `false` değerleri atanmış.
   - `control`: Kullanılacak bileşen. Bu örnekte `<Radio />` kullanılıyor.
   - `label`: Radio butonunun yanında gösterilecek metni belirtir.

6. `FormHelperText` bileşeni:
   - Yardım veya açıklayıcı metin sağlar. Burada, doğru veya yanlış cevabı geri bildirmek için kullanılmış.
   - `val` değişkenine bağlı olarak metin değişir:
     - `true` ise "doğru cevap!" mesajı.
     - `false` ise "1984!!!" mesajı.

7. Kullanım Senaryosu:
   - Kullanıcı bir cevap seçtiğinde, seçilen değer `val` olarak güncellenir ve Radio butonlarının altında sonuç gösterilir.
*/
