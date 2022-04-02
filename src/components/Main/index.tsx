import MainBanner from "./MainBanner";
import CampaignOffers from "./CampaignOffers";
import BottomBanners from "./BottomBanners";

import { Main } from './styles'

function index() {
  return (
    <>
      <Main >
        <div className="mainWrapper">
          <MainBanner />
          <CampaignOffers /> 
          <BottomBanners />
        </div>
      </Main>
    </>
  )
}

export default index