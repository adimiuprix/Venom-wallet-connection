import React from 'react';
import { VenomConnect } from 'venom-connect';

import ConnectWallet from './components/ConnectWallet'

type Props = {
  venomConnect: VenomConnect | undefined;
};

function Main({ venomConnect }: Props) {
  return (
    <div className="App">
      <ConnectWallet venomConnect={venomConnect} />
    </div>
  );
}
  
export default Main;