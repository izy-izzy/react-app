import React from 'react';
import { Button } from '../button/button';

export const TernaryButton = ({ onClick, copy }) => {
  return <Button className={'btn-info btn'} onClick={onClick} copy={copy} />;
};
