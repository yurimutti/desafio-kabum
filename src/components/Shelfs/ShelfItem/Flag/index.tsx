import { FlagElement } from './styles'
import BoxSvg from './BoxSvg'
import CarSvg from './CarSvg'

type FlagProps = {
  name: string
}

const Flag = ({ name }: FlagProps) => {

  function renderIcon(name) {
    switch (name) {
      case 'FRETE GRÁTIS':
        return <CarSvg />
      case 'OPEN BOX':
        return <BoxSvg />
    }
  }

  return (
    <FlagElement>
      {renderIcon(name)}
      <span>{name}</span>
    </FlagElement>
  )
}

export default Flag