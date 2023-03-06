import { useEffect, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import NewsItem from "../../components/NewsItem";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchNews, removeNews } from "../../store/actionCreators";
import { initialLimit } from "../../consts";
import { useTranslation } from "react-i18next";
import '../../i18n';


export const News: React.FC = () => {
  const dispatch = useAppDispatch();
  const { list, isLoading } = useAppSelector(state => state.news);
  const [limit, setLimit] = useState(initialLimit);
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchNews(limit));
  }, [dispatch, limit]);

  const showMoreNews = () => {
    setLimit(limit + 3);
  }
  
  return (
    <Box>
      <Typography variant="h4">{t("news.title")}</Typography>
      <Grid container spacing={2} mb={5}>
        {
          list?.map((el, index) => (
            <Grid item xs={4} zeroMinWidth key={index}>
              <NewsItem
                id={el.id}
                userId={el.userId}
                title={el.title}
                body={el.body}
                onClick={(id) => dispatch(removeNews(id))}
              />
            </Grid>
          ))
        }
      </Grid>
      {isLoading && <Typography variant="h3" mb={5}>Loading...</Typography>}
      {!isLoading && <Button onClick={showMoreNews}>{t("news.showMore")}</Button>}
    </Box>
  );
};
