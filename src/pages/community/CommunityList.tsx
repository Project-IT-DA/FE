import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { communityApi } from "../../API/communityApi";
import Community from "../../components/Community";
import { ICommunityData } from "../../types/communityType";

function CommunityList() {
  const navigate = useNavigate();
  const { data } = communityApi.getCommunityList();
  const communityData = data?.data;
  console.log(communityData);
  return (
    <div>
      {communityData?.map((data: ICommunityData) => {
        return (
          <Fragment key={data.commuId}>
            <Community data={data}></Community>
          </Fragment>
        );
      })}
    </div>
  );
}

export default CommunityList;
