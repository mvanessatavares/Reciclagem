import { Image, View } from 'react-native';

import organico from '../../assets/kindOfTrash/organic.png';
import plastico from '../../assets/kindOfTrash/plastic.png';
import vidro from '../../assets/kindOfTrash/glass.png';
import bateria from '../../assets/kindOfTrash/battery.png';
import papel from '../../assets/kindOfTrash/paper.png';
import metal from '../../assets/kindOfTrash/metal.png';

type ITipoLixo = {
  num: number
}
export const Garbage = ({num}: ITipoLixo) => {
  const tipos = [organico, plastico, vidro, bateria, papel, metal];

  return (
    <Image
      source={tipos[num]}
      style={{
          width: 20,
          height: 20,
      }}
    />
  );
};
