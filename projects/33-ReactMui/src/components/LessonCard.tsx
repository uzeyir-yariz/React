import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const LessonCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://picsum.photos/200/300"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default LessonCard;

/*
Dökümantasyon:

1. `Card` Bileşeni:
   - MUI'de bir kart bileşeni, görsel ve metin içeriklerini belirli bir düzen içinde göstermeye yarayan bir bileşendir.
   - `sx={{ maxWidth: 345 }}` özelliği ile kartın maksimum genişliği 345px olarak ayarlanmıştır.

2. `CardMedia` Bileşeni:
   - Kartın baş kısmında görsel gösterimi sağlar.
   - `image` özelliği: Kart üzerinde gösterilecek görselin URL'sini belirtir. Bu örnekte `https://picsum.photos/200/300` görseli kullanılmıştır.
   - `title`: Görsele alternatif metin (alt text) ekler. Erişilebilirlik açısından önemlidir.
   - `sx={{ height: 140 }}` özelliği ile görselin yüksekliği 140px olarak belirlenmiştir.

3. `CardContent` Bileşeni:
   - Kartın içerik kısmıdır. Metin ve diğer içerikler burada gösterilir.
   - İçerikte:
     - `Typography` ile başlık (`h5`) ve gövde (`body2`) stiliyle iki ayrı metin gösterimi yapılmıştır.
     - `gutterBottom` özelliği, başlığın altında ekstra bir boşluk bırakır.
     - `sx={{ color: "text.secondary" }}` özelliği, metnin rengini tema içerisindeki ikincil metin rengine ayarlar.

4. `CardActions` Bileşeni:
   - Kartın alt kısmında yer alan butonlar veya etkileşimli elemanlar için kullanılır.
   - İçerisinde iki adet `Button` bileşeni bulunmaktadır:
     - `Share`: İçeriği paylaşmak için.
     - `Learn More`: Daha fazla bilgi almak için.

5. Kullanım:
   - Bu kart bileşeni, görsel içerik (resim), başlık, açıklama ve etkileşimli butonlar içeren bir kart örneğidir.
   - Kartın içinde tipik bir medya görseli (`CardMedia`), açıklama kısmı (`CardContent`) ve buton aksiyonları (`CardActions`) yer alır.

6. Örnek Senaryo:
   - Bu bileşen, bir hayvanla ilgili kısa bir bilgi içeren, paylaşılabilir ve daha fazla bilgi almayı sağlayan bir kart bileşenidir.
   - Görsel boyutu ve kartın düzeni tamamen responsive olacak şekilde yapılandırılmıştır.
*/
