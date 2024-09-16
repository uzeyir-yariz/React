import { Grid } from "@mui/material"


const LessonGrid = () => {
  return (
    <Grid container>
      <Grid xs={2} >2 birim tutuyor</Grid>
      <Grid xs={10} >4 birim tutuyor</Grid>
    </Grid>
  )
}

export default LessonGrid

/*
Dökümantasyon:

1. `Grid` bileşeni:
   - MUI'da, bir sayfa düzeni oluşturmak için kullanılan ızgara yapısını temsil eder.
   - Bu bileşen, responsive (duyarlı) bir düzen oluşturmak için sütunlara dayalı bir yapı sağlar.
   - `container` ve `item` olarak iki farklı kullanım şekli vardır:
     - `container`: Izgara düzeninin kapsayıcısıdır.
     - `item`: Izgara düzeninde bir öğeyi temsil eder.

2. `xs` özelliği:
   - Ekran boyutuna bağlı olarak, öğelerin yatayda ne kadar yer kaplayacağını belirler.
   - `xs={2}`: Küçük ekran boyutları için 12 sütunlu bir düzenin 2 sütununu kaplar.
   - `xs={10}`: Küçük ekran boyutları için 12 sütunlu bir düzenin 10 sütununu kaplar.
   - Toplam sütun sayısı 12 olduğundan, bu iki öğe yatayda toplam 12 sütunu doldurur.

3. Kullanım:
   - `Grid` bileşeni, responsive bir düzen oluşturmak için `container` olarak kullanılır.
   - İçerideki iki adet `Grid` öğesi `item` olarak tanımlanmıştır ve farklı sütunlar kaplar.
   - İlk `Grid` öğesi, genişliğin 2/12'sini (yani %16.67) kaplar.
   - İkinci `Grid` öğesi, genişliğin 10/12'sini (yani %83.33) kaplar.

4. Örnek Senaryo:
   - Bu örnek, iki öğenin küçük ekranlarda (%16.67 ve %83.33) yan yana sıralanacağı bir düzen oluşturur.
   - Responsive özelliği sayesinde ekran boyutu küçüldükçe bu düzen korunur.
*/
