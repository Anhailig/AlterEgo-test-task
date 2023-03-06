import { Button, Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material';
import * as React from 'react';
import { useTranslation } from "react-i18next";
import '../../i18n';

import type { INews } from '../../types';


const NewsItem: React.FC<INews> = ({userId, id, title, body, onClick}) => {
  const { t } = useTranslation();
  return (
    <Card sx={{
      height: '300px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <CardHeader title={title} />
      <CardContent>
        <Typography 
          variant="body2"
          color="text.secondary"
        >
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small' onClick={() => onClick(id)}>{t("newsItem.button")}</Button>
      </CardActions>
    </Card>
  );
};

export default NewsItem;
