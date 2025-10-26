import { Calendar } from "./Wedding/Calendar";
import { Gift } from "./Wedding/Gift";
import { ImagePicV2 } from "./Wedding/ImagePicV2";
import { Intro } from "./Wedding/Intro";
import { Location } from "./Wedding/Location";
import { Register } from "./Wedding/Register";
import { ThankYou } from "./Wedding/ThankYou";
import { WeddingContainer } from "./Wedding/WeddingContainer";
import { WifeAndHusband } from "./Wedding/WifeAndHusband";

const WeddingInvitation = () => {
  return (
    <Intro>
      <WeddingContainer>
        {/* Image */}
        {/* <ImagePic /> */}
        <ImagePicV2 />

        {/* Calendar */}
        <Calendar />

        {/* Wife and Husband */}
        <WifeAndHusband />

        {/* Location */}
        <Location />

        {/* Gift */}
        <Gift />

        {/* Register */}
        <Register />

        {/* Thank you */}
        <ThankYou />
      </WeddingContainer>
    </Intro>
  );
};

export default WeddingInvitation;
