import { useMutation, useQuery } from "@tanstack/react-query";
import { formDataInstance, instance } from "../config/axios";
import { IAricleInfo } from "../types/articleType";

interface IEditPayload {
  articleId: number | undefined;
  formdata: FormData;
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
  deleteArticle: () => {
    return useMutation(async (articleId: number) => {
      const { data } = await instance.delete(`api/articles/${articleId}`);
      return data;
    });
  },
  bookmarkArticle: () => {
    return useMutation(async (articleId: number) => {
      const { data } = await instance.post(
        `api/articles/${articleId}/like`,
        {},
      );
      return data;
    });
  },
  soldStatusArticle: () => {
    return useMutation(async (articleId: number) => {
      const { data } = await instance.post(
        `api/articles/${articleId}/sell`,
        {},
      );
      return data;
    });
  },
  editArticle: () => {
    return useMutation(async (payload: IEditPayload) => {
      {
        const { data } = await formDataInstance.put(
          `api/articles/${payload.articleId}`,
          payload.formdata,
        );
        return data;
      }
    });
  },
};
