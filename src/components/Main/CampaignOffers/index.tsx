import Shelfs from "../../Shelfs"
import Countdown from "./Countdown"

import { CampaingOffers } from "./styles"

function index() {
  return (
    <CampaingOffers>
      <Countdown />
      <Shelfs />
    </CampaingOffers>
  )
}

export default index