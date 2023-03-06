import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../consts";
import type { INews } from "../types";


export const fetchNews = createAsyncThunk<INews[], number>(
  'news/fetchNews',
  async (limit) => {
    const res = await axios.get(`${baseUrl}/posts?_limit=${limit}`);
    return res.data;
  }
)

export const removeNews = createAsyncThunk<number, number, { rejectValue: string }>(
  'news/removeNews',
  async (id, { rejectWithValue }) => {
    const res = await axios.delete(`${baseUrl}/posts/${id}`);
    
    if (res.status !== 200) {
      return rejectWithValue('Cannot delete news. Server error')
    }

    return id;
  }
)
