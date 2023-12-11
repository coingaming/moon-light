"use client"

import React, { useState } from 'react';
import { AuthCode } from '@heathmont/moon-core-tw';

export const Default = () => {
  const [result, setResult] = useState('');
  const handleOnChange = (res: string) => {
    setResult(res);
  };
  return <AuthCode onChange={handleOnChange} />;
};

export default Default;