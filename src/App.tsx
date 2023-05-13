import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { initVenomConnect } from './venom-connect/configure';
import { VenomConnect } from 'venom-connect';

import ConnectWallet from './components/ConnectWallet';

function App() {
    const [VenomConnect, setVenomConnect] = useState<VenomConnect | undefined>();
    const init =async () => {
        const _venomConnect = await initVenomConnect();
        setVenomConnect(_venomConnect);
    }
    useEffect(()=>{
        init();
    }, []);

    return(
        <div className="App">
            <ConnectWallet venomConnect={venomConnect} />
        </div>
    )
}

export default App;