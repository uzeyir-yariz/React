import { Divider, Stack } from "@mui/material"

const LessonStack = () => {
  return (
    <Stack
      direction={{
        xs: 'column',
        sm: 'row'
      }}
      spacing={2}
      divider={<Divider orientation="vertical" flexItem/>}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </Stack>
  )
}

export default LessonStack

/*
Dökümantasyon:

1. `Stack` bileşeni:
   - MUI'da, öğelerin yönünü ve aralarındaki boşlukları yönetmek için kullanılan bir düzenleyici bileşendir.
   - Bu örnekte `Stack`, öğeleri ekranda belirli bir düzene göre sıralar ve aralarına ayırıcı (`Divider`) ekler.

2. `direction` özelliği:
   - Ekran boyutuna bağlı olarak öğelerin sıralanma yönünü belirler.
   - `xs: 'column'`: Ekran küçükse (mobil cihazlar), öğeler dikey olarak sıralanır (bir sütun oluşturur).
   - `sm: 'row'`: Ekran daha büyükse (tablet veya masaüstü cihazlar), öğeler yatay olarak sıralanır (bir satır oluşturur).

3. `spacing` özelliği:
   - Öğeler arasındaki boşluğu belirtir. Bu örnekte `spacing={2}` kullanılarak, öğeler arasında standart bir boşluk bırakılmıştır.

4. `divider` özelliği:
   - Öğeler arasında bir ayırıcı çizgi eklemek için kullanılır.
   - `Divider` bileşeni, öğeleri ayırmak için kullanılan yatay veya dikey bir çizgidir.
   - `orientation="vertical"`: Ayırıcı çizginin dikey yönlü olacağını belirtir.
   - `flexItem`: Ayırıcı çizginin öğeler arasında tam olarak yer kaplamasını sağlar, yani öğelerin yüksekliği boyunca çizilir.

5. İçerik:
   - `Stack` içinde yer alan üç adet `div` öğesi sıralanır. Bu öğeler sırasıyla "1", "2", ve "3" içerir.

6. Kullanım Senaryosu:
   - Küçük ekranlarda (mobil) bu bileşen, öğeleri dikey olarak sıralar ve öğeler arasında boşluk bırakır.
   - Daha büyük ekranlarda (tablet veya masaüstü), öğeler yatay olarak sıralanır ve öğeler arasında dikey bir ayırıcı çizgi görünür.
*/
