'use react'
import { VenomConnect } from 'venom-connect'
import './button.css'

type Props = {
    venomConnect: VenomConnect | undefined;
}

function ConnectWallet({ venomConnect }: Props) {
    const login = async () => {
        if (!venomConnect) return;
        await venomConnect.connect();
    }

    return (
        <>
            <div>
                <h1>Latihan Blockchain Venom</h1>
                <p className="title-text">Connect Wallet to continue</p>
                <button className="btn-connect" onClick={login}>Connect wallet</button>
            </div>
        </>
    );
}
  
export default ConnectWallet;