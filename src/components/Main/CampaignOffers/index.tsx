import Shelfs from "../../Shelfs"
import CountdownTimer from "./CountdownTimer"

import { CampaingOffersElement } from "./styles"

const CampaingOffers = (): JSX.Element => {
  return (
    <CampaingOffersElement>
      <CountdownTimer />
      <Shelfs />
    </CampaingOffersElement>
  )
};

export default CampaingOffers