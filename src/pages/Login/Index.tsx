import { LoginForm } from "../../components/LoginForm/LoginForm"
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";
import '../../i18n';


export const Login: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="container">
      <Typography variant="h4">{t("login.title")}</Typography>
      <LoginForm />
    </div>
  )
}