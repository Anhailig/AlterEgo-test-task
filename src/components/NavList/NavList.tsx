import * as React from 'react';
import { CustomLink } from '../../ui/CustomLink/CustomLink';
import { useAuth } from '../../hooks/useAuth';
import { useTranslation } from "react-i18next";
import '../../i18n';


export const NavList: React.FC = () => {
  const { user } = useAuth();
  const { t } = useTranslation();
  return (
    <nav>
      <ul 
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '400px',
        }}
      >
        <li>
          <CustomLink to='/'>{t("links.link1")}</CustomLink>
        </li>
        <li>
          <CustomLink to='/news'>{t("links.link2")}</CustomLink>
        </li>
        <li>
          {
            user
              ? <CustomLink to='/profile'>{t("links.link3")}</CustomLink>
              : <CustomLink to='/login'>{t("links.link4")}</CustomLink>
          }
        </li>
      </ul>
    </nav>
  );
};
