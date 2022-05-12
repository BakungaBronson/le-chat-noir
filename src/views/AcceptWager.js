import React from 'react';
import '../index.css';
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_WalletConnect as WalletConnect } from '@reach-sh/stdlib';
import * as backend from '../build/index.main.mjs';
import {Wait} from './Wait';
import {Connecting} from './Connecting';
const reach = loadStdlib(process.env);

const {standardUnit} = reach;
const defaults = {defaultFundAmt: '10', defaultWager: '0.1', standardUnit};
// TestNet values being used
reach.setWalletFallback(reach.walletFallback({
    provider: {
        ALGO_SERVER: 'http://hackathon.algodev.network',
        ALGO_TOKEN: 'ef920e2e7e002953f4b29a8af720efe8e4ecc75ff102b165e0472834b25832c1',
        ALGO_PORT: 9100,
        ALGO_INDEXER_SERVER: 'https://algoindexer.testnet.algoexplorerapi.io',
    }, WalletConnect}));

export class AcceptWager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...defaults,
            View: "Connecting",
        }
        this.setClicked = this.setClicked.bind(this);
    }
    async componentDidMount(){
        await this.setState({View: "WagerPage"});
    }
    setClicked(e) {
        this.props.handleClick(this.state);
    }
    render() {
        return this.state.View === "Connecting"?
                <Connecting />:
                this.state.View === "WagerPage"?
                <>
                <section className='intro'>
                    <div className='row'>
                        <h1>Le Chat Noir</h1>
                        <img src="https://www.lifepng.com/wp-content/uploads/2020/11/Le-Chat-Noir-png-hd.png" width="200px" />
                        </div>
                        <div className='row'>
                        <br/>
                        <h3>You will win 1 ALGO for each time you beat the cat.</h3>
                        <h3>If you lose, the cat will take 1 ALGO from your wallet.</h3>
                    </div>
                </section>
                </>:
                <></>
    }
}