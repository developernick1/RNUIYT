import { View, Text } from 'react-native';
import React, { useState } from 'react';
import AppRoutes from './app-routes';
import AuthRoutes from './auth-routes';

export default function Routes() {
  const [user, setuser] = useState()
  return user ? <AppRoutes /> : <AuthRoutes />;
}
