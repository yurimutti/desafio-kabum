import MainBanner from "./MainBanner";
import CampaignOffers from "./CampaignOffers";
import BottomBanner from "./BottomBanner";

import { Main, Container } from './styles'

function index() {
  return (
    <Main >
      <Container>
        <MainBanner />
        <CampaignOffers /> 
        <BottomBanner />
      </Container>
    </Main>
  )
}

export default index