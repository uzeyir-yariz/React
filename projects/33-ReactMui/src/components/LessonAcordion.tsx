import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const LessonAccordion = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem explicabo totam dolores debitis similique nostrum.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem explicabo totam dolores debitis similique nostrum.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem explicabo totam dolores debitis similique nostrum.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default LessonAccordion;

/*
Dökümantasyon:

1. `Accordion` Bileşeni:
   - MUI'de bir akordeon bileşeni, genişletilebilir ve daraltılabilir bölümler içerir.
   - Birden fazla `Accordion` bileşeni kullanılabilir ve her biri ayrı bir bölüm olarak işlev görür.

2. `AccordionSummary` Bileşeni:
   - Akordeon başlığını temsil eder ve genişletme/daraltma işlevi sağlar.
   - `expandIcon` özelliği ile genişletme/daraltma simgesi (örnekte `ExpandMoreIcon`) eklenmiştir.
   - `aria-controls` ve `id` özellikleri erişilebilirlik ve ekran okuyucular için önemlidir.
   - Başlık metni `Typography` bileşeni ile düzenlenir.

3. `AccordionDetails` Bileşeni:
   - Akordeonun içerik kısmını gösterir. Başlık kısmı genişletildiğinde görünür.
   - İçerik metni `Typography` bileşeni ile düzenlenir.

4. `ExpandMoreIcon`:
   - Akordeon başlığına tıklandığında genişletme/daraltma simgesi olarak kullanılır.
   - MUI `@mui/icons-material` paketinden getirilir.

5. Kullanım:
   - Her `Accordion` bileşeni bir başlık ve detay içerir.
   - Başlık tıklandığında, detay kısmı açılır veya kapanır.
   - Birden fazla `Accordion` bileşeni ardışık olarak kullanılabilir, her biri kendi başlığı ve içeriğiyle bağımsız olarak çalışır.

6. Örnek Senaryo:
   - Bu örnekte üç adet akordeon bileşeni bulunmaktadır:
     - `accordion 1`, `accordion 2`, ve `accordion 3` başlıklarıyla tanımlanmıştır.
     - Her başlığın altında kısa açıklama metinleri yer almaktadır.
   - Akordeon başlığına tıklandığında detay kısmı görünür ve içerik güncellenir.
*/
