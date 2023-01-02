import { useMutation, useQuery } from "@tanstack/react-query";
import { instance } from "../config/axios";
import { getCookieToken } from "../config/cookies";

interface editedInfoType {
  editedNickname: string | undefined;
  profileImageUrl: string | null;
}

export const UserInfoApi = {
  getUserInfo: () => {
    return useQuery(
      ["userInfo"],
      async () => {
        const { data } = await instance.get(`api/users/profile`);
        return data;
      },
      {
        enabled: !!getCookieToken(),
        refetchOnMount: false,
        refetchOnWindowFocus: false,
      },
    );
  },

  editArticle: () => {
    return useMutation(async (editInfo: editedInfoType) => {
      const { data } = await instance.put(`api/users/profile`, {
        nickname: editInfo.editedNickname,
        profileImageUrl: editInfo.profileImageUrl,
      });
      return data;
    });
  },
};
