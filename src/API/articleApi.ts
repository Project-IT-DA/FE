import { useMutation, useQuery } from "@tanstack/react-query";
import { formDataInstance, instance } from "../config/axios";
import { IAricleInfo } from "../types/articleType";

interface IPostArticle {
  articleName: string;
  category: string;
  location: string;
  sellPrice: number;
  substance: string;
}

interface Ipost {
  data: IPostArticle;
  file?: File;
}

export const articleApi = {
  getArticleDetail: (articleId: number) => {
    return useQuery<IAricleInfo>(["article"], async () => {
      const { data } = await instance.get(`api/articles/${articleId}`);
      return data.data;
    });
  },
  postArticle: () => {
    return useMutation(async (payload: FormData) => {
      const { data } = await formDataInstance.post("api/articles", payload);
      return data;
    });
  },
};
