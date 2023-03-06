import { InputProps } from "@mui/material";
import { PropsWithChildren, ReactNode } from "react";


export interface IFormInput {
  name: string;
  label: string;
  value?: string;
  errorTitle?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  props?: InputProps;
}

export interface INews {
  userId: number,
  id: number,
  title: string,
  body: string,
  onClick: (param: number) => void,
}

export type NewsList = {
  list: INews[],
}

export type NewsInititalState = {
  list: INews[],
  isLoading: boolean,
  error: string,
}

export type LoginFormState = {
  username: string;
  password: string;
}

export type User = LoginFormState;

export type LoginFormErrorsState = LoginFormState;

export interface ICustomLink extends PropsWithChildren {
  to: string,
  children: ReactNode,
}
