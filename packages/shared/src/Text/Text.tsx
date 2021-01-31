import React, { FunctionComponent } from 'react';

type Props = {
  children: React.ReactNode;
};

const Text: FunctionComponent<Props> = ({ children }) => {
  return <h2>{children}</h2>;
};

export default Text;
