import { Key } from "react";

export interface ICommunityInfo {
  userId: number;
  commuId: number;
  title: string;
  content: string;
  imgUrl: string;
  comment: IComment[];
}

interface IComment {
  userId: number;
  commentId: number;
  content: string;
}

export interface ICommunityData {
  commuId: Key | null | undefined | number;
  commentsCnt: number;
  content: string;
  createdAt: string;
  imgNames: string[];
  imgUrls: string[];
  title: string;
  userId: number;
  username: string;
}
