import { useQuery } from "@tanstack/react-query";
import { instance } from "../config/axios";

export const articleApi = {
  getArticleDetail: (articleId: number) => {
    return useQuery(["article"], async () => {
      const { data } = await instance.get(`api/articles/${articleId}`);
      return data;
    });
  },
};
