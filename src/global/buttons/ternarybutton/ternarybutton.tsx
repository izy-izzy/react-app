import React from 'react';
import { Button } from '../button/Button';

export const TernaryButton = ({ onClick, copy }) => {
  return <Button className={'btn-info btn'} onClick={onClick} copy={copy} />;
};
