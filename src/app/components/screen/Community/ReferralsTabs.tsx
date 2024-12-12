import ReferralsTabLeft from "./ReferralsTabLeft";
import ReferralsTabRight from "./ReferralsTabRight";

const ReferralsTabs = () => {
  return (
    <div className="my-2 lg:my-3 w-full h-[267px] flex gap-3">
      <ReferralsTabLeft />
      <ReferralsTabRight />
    </div>
  );
};

export default ReferralsTabs;
