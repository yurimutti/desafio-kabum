import MainBanner from "./MainBanner";
import CampaignOffers from "./CampaignOffers";
import BottomBanners from "./BottomBanners";

import { MainElement } from './styles'

const Main = (): JSX.Element => {
  return (
    <>
      <MainElement >
        <div className="mainWrapper">
          <MainBanner />
          <CampaignOffers /> 
          <BottomBanners />
        </div>
      </MainElement>
    </>
  )
};

export default Main



