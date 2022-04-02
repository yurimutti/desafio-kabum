import BottomBanner from './BottomBanner'

import { BottomBanners } from './styles'

function index() {
  return (
    <BottomBanners>
      <BottomBanner title="VENDA O SEU PRODUTO" description="Venda o seu produto usado em nosso marketplace." img="images/marketplace-thumb.jpg" alt="Foto de dois processadores intel i7" />
      <BottomBanner title="CONHEÇA OS PRODUTOS PRIME" description="Fique por dentro de todos os nossoa benefícios." img="images/prime-thumb.jpg" alt="Foto do ninja da KaBuM!" />
      <BottomBanner title="CONHEÇA NOSSOS PRODUTOS DE LEILÃO" description="As melhores oportunidades de compra." img="images/auction-thumb.jpg" alt="Dois notebooks da marca razer, um aberto e outro fechado." />
    </BottomBanners>
  )
}

export default index