import { Box, Button } from '@mui/material';
import { FormEvent, useEffect, useState } from 'react';
import { FormInput } from '../../ui/Input/Index';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useTranslation } from "react-i18next";
import '../../i18n';

import type { LoginFormErrorsState, LoginFormState } from '../../types';


export const LoginForm: React.FC = () => {
  const [inputValue, setInputValue] = useState<LoginFormState>({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState<LoginFormErrorsState>({
    username: '',
    password: '',
  })
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const { t } = useTranslation();

  useEffect(() => {
    validate();
  }, [inputValue]);

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setInputValue((values) => ({ ...values, [name]: value}))
  }

  const validate = () => {
    const temp: LoginFormErrorsState = {
      username: inputValue.username !== 'admin' ? 'Invalid user name!' : '',
      password: inputValue.password !== '12345' ? 'Invalid password!' : '',
    };

    setErrors({
      ...temp
    });

    return Object.values(errors).every(error => error === '');
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const userData = {
      username: inputValue.username,
      password: inputValue.password,
    }

    if (!validate()) {
      return;
    } else {
      signIn(userData, () => navigate('/profile'))
    }
  }

  return (
    <form
      style={{ width: '300px' }}
      onSubmit={handleSubmit}
    >
      <Box
        sx={{
          py: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          alignItems: 'center',
        }}
      >
        <FormInput
          name='username'
          label='User name'
          value={inputValue.username}
          errorTitle={errors?.username}
          onChange={handleChangeValue}
        />
        <FormInput
          name='password'
          label='Password'
          value={inputValue.password}
          errorTitle={errors?.password}
          onChange={handleChangeValue}
        />
        <Button type="submit">{t("form.button")}</Button>
      </Box>
    </form>
  );
}
