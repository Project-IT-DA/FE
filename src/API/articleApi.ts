import { useMutation, useQuery } from "@tanstack/react-query";
import { instance } from "../config/axios";
import { IAricleInfo } from "../types/articleType";

export const articleApi = {
  getArticleDetail: (articleId: number) => {
    return useQuery<IAricleInfo>(["article"], async () => {
      const { data } = await instance.get(`api/articles/${articleId}`);
      return data.data;
    });
  },
  postArticle: () => {
    return useMutation(async () => {
      const { data } = await instance.post(``);
      //폼데이터형식으로 보내야됨.
    });
  },
};
