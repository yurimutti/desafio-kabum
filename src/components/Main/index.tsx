import MainBanner from "./MainBanner";
import CampaignOffers from "./MainBanner";
import BottomBanner from "./MainBanner";

import { Main } from './styles'

function index() {
  return (
    <Main >
      <MainBanner />
      <CampaignOffers /> 
      <BottomBanner />
    </Main>
  )
}

export default index