import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import '../../i18n';


export const Profile: React.FC = () => {
  const { t } = useTranslation();
  return ( 
    <Typography variant="h4">
      {t("profile.title")}
    </Typography>
  );
};