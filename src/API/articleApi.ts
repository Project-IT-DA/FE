import { useQuery } from "@tanstack/react-query";
import { instance } from "../config/axios";
import { IAricleInfo } from "../types/articleType";

export const articleApi = {
  getArticleDetail: (articleId: number) => {
    return useQuery<IAricleInfo>(["article"], async () => {
      const { data } = await instance.get(`api/articles/${articleId}`);
      return data.data;
    });
  },
};
