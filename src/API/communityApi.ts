import { useMutation, useQuery } from "@tanstack/react-query";
import { formDataInstance, instance } from "../config/axios";
import { ICommunityInfo } from "../types/communityType";

export const communityApi = {
  getCommunityList: () => {
    return useQuery(["community"], async () => {
      const { data } = await instance.get("api/community");
      return data;
    });
  },
  getCommunityDetail: (communityId: number) => {
    return useQuery<ICommunityInfo>(["community"], async () => {
      const { data } = await instance.get(`api/community/${communityId}`);
      return data.data;
    });
  },
};
