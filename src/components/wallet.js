import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from './header';
import { load } from '../service/tokenService'
const Wallet = () => {
    const user = useSelector(state => state.user.value);
    const auth = useSelector(state => state.auth.value);
    const [withdraw, setWithdraw] = useState(false);
    const [withrawalAmount, setWithdrawalAmount] = useState('');
    const { currency } = useParams();
    const activateWithdraw = () => {
        setWithdraw(true);
    }
    const withdrawAmount = () => {
        console.log("Withdraw");
    }
    const getPublicKey = () => {
        switch (currency) {
            case 'BTC': return user.btcPublicKey;
        }
    }
    const refresh = async () => { console.log('here'); await load(auth.isLoggedIn, user.alias); }
    return (
        <>
            <Header />
            {auth.isLoggedIn
                ? <div>
                    <h5>Public Address: {getPublicKey()}</h5>
                    <h5>Balance: {localStorage.getItem(currency)}</h5>
                    <button onClick={refresh}>Refresh</button><br />
                    <button onClick={activateWithdraw}>Withdraw Funds</button>
                    {
                        withdraw
                            ? <>
                                <form onSubmit={withdrawAmount}>
                                    <input placeholder="Enter amount to withdraw" type="text" value={withrawalAmount} onChange={(e) => setWithdrawalAmount(e.target.value)} />
                                    <input type="submit" value="withdraw" />
                                </form>
                            </>
                            : <></>
                    }
                </div>
                : <div>
                    Login to access wallet.
                </div>
            }
        </>
    )
}

export default Wallet