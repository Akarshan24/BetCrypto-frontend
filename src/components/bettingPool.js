import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const BettingPool = (props) => {
    const [pool, setPool] = useState(props.pool)
    console.log(pool)
    const placeBet = async () => {
        console.log("Bet placed!!");
    }
    return (
        <div>
            <h4>Entry Fee: {pool.entryFee} {"\t"} <br />{pool.poolCapacity !== 2 && pool.poolCapacity !== 5 ? "Open To All" : `Maximum Bets:${pool.poolCapacity}`}</h4>
            <Button onClick={placeBet}>Bet Now!</Button>
        </div>
    )
}

export default BettingPool