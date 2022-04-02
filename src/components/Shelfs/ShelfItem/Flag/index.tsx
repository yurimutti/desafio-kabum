import { Flag } from './styles'
import BoxSvg from './BoxSvg'
import CarSvg from './CarSvg'

type FlagProps = {
  name: string
}

const index = ({ name }: FlagProps) => {

  function renderIcon(name) {
    switch (name) {
      case 'FRETE GRÁTIS':
        return <CarSvg />
      case 'OPEN BOX':
        return <BoxSvg />
    }
  }

  return (
    <Flag>
      {renderIcon(name)}
      <span>{name}</span>
    </Flag>
  )
}

export default index