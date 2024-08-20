/* eslint-disable react/prop-types */
const image_1 = "https://picsum.photos/id/21/200";
const image_2 = "https://picsum.photos/id/25/200";
const image_3 = "https://picsum.photos/id/22/200";
const image_4 = "https://picsum.photos/id/21/200";
const image_5 = "https://picsum.photos/id/16/200";

const courseMap = {
  image_1: image_1,
  image_2: image_2,
  image_3: image_3,    
  image_4: image_4,
  image_5: image_5
}

export const Course = ({courseName}) => {

  return (
    <figure>
      <img src={courseMap[courseName]} alt="" />
    </figure>
  )
}


/*
* eğer gönderilen veriler ile gelen veriler aynı şekilde yazılmış ise bu şekilde yazılabilir aksi taktirde yukarıda ki gibi yazılması gerekir
const courseMap = {
  image_1,
  image_2,
  image_3,    
  image_4,
  image_5
}
*/