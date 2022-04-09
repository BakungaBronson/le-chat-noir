// Automatically generated with Reach 0.1.9 (c449a2f7)
/* eslint-disable */
export const _version = '0.1.9';
export const _versionHash = '0.1.9 (c449a2f7)';
export const _backendVersion = 11;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  
  return {
    infos: {
      },
    views: {
      1: []
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Object({
    i: ctc0,
    sign: ctc1
    });
  
  
  const v49 = {
    i: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1),
    sign: false
    };
  
  const txn1 = await (ctc.sendrecv({
    args: [v49],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:34:9:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:34:9:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v52], secs: v54, time: v53, didSend: v31, from: v51 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v52], secs: v54, time: v53, didSend: v31, from: v51 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v57, time: v56, didSend: v35, from: v55 } = txn2;
  ;
  return;
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Object({
    i: ctc0,
    sign: ctc1
    });
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v52], secs: v54, time: v53, didSend: v31, from: v51 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 1,
    lct: v53,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:38:7:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v57, time: v56, didSend: v35, from: v55 } = txn2;
      
      ;
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v57, time: v56, didSend: v35, from: v55 } = txn2;
  ;
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiACAAEmAQAiNQAxGEEAzChkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAAB0jEkQjNAESRDQESSISTDQCEhFEgASai5F0sEIAMUgiNAESRDQESSISTDQCEhFESTUFNf+ABIfUIrY0/1CwgaCNBogAYyM1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQoNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yI1ASI1AkL/wzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 0,
  stateSize: 0,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "_i",
                    "type": "uint256"
                  },
                  {
                    "internalType": "bool",
                    "name": "_sign",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T1",
                "name": "v52",
                "type": "tuple"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "_i",
                    "type": "uint256"
                  },
                  {
                    "internalType": "bool",
                    "name": "_sign",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T1",
                "name": "v52",
                "type": "tuple"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516106d33803806106d3833981016040819052610022916101b5565b6000805543600355604080518251815260208084015151805182840152015115158183015290517fe558ba42eed307e0877d0ef0ae69963e5c00a346025d48858f70b8e28824c4d29181900360600190a161007f341560076100bd565b600160008181554390915560408051602080820184905282518083038201815291830190925280516100b59260029201906100e6565b505050610291565b816100e25760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546100f290610256565b90600052602060002090601f016020900481019282610114576000855561015a565b82601f1061012d57805160ff191683800117855561015a565b8280016001018555821561015a579182015b8281111561015a57825182559160200191906001019061013f565b5061016692915061016a565b5090565b5b80821115610166576000815560010161016b565b604080519081016001600160401b03811182821017156101af57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156101c857600080fd5b6101d061017f565b835181526040601f19830112156101e657600080fd5b6040519150602082016001600160401b038111838210171561021857634e487b7160e01b600052604160045260246000fd5b60405261022361017f565b602085015181526040850151801515811461023d57600080fd5b6020828101919091529083528101919091529392505050565b600181811c9082168061026a57607f821691505b6020821081141561028b57634e487b7160e01b600052602260045260246000fd5b50919050565b610433806102a06000396000f3fe6080604052600436106100405760003560e01c80631e93b0f1146100495780632c10a1591461006d5780638323075714610080578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b61004761007b3660046102fc565b6100b8565b34801561008c57600080fd5b5060015461005a565b3480156100a157600080fd5b506100aa6101e4565b604051610064929190610314565b6100c86001600054146009610281565b6100e2813515806100db57506001548235145b600a610281565b6000808055600280546100f490610371565b80601f016020809104026020016040519081016040528092919081815260200182805461012090610371565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b505050505080602001905181019061018591906103b4565b90507f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1826040516101b691906103d8565b60405180910390a16101ca34156008610281565b600080805560018190556101e0906002906102a6565b5050565b6000606060005460028080546101f990610371565b80601f016020809104026020016040519081016040528092919081815260200182805461022590610371565b80156102725780601f1061024757610100808354040283529160200191610272565b820191906000526020600020905b81548152906001019060200180831161025557829003601f168201915b50505050509050915091509091565b816101e05760405163100960cb60e01b81526004810182905260240160405180910390fd5b5080546102b290610371565b6000825580601f106102c2575050565b601f0160209004906000526020600020908101906102e091906102e3565b50565b5b808211156102f857600081556001016102e4565b5090565b60006040828403121561030e57600080fd5b50919050565b82815260006020604081840152835180604085015260005b818110156103485785810183015185820160600152820161032c565b8181111561035a576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061038557607f821691505b6020821081141561030e57634e487b7160e01b600052602260045260246000fd5b80151581146102e057600080fd5b6000602082840312156103c657600080fd5b81516103d1816103a6565b9392505050565b813581526040810160208301356103ee816103a6565b8015156020840152509291505056fea26469706673582212200243d32cdc2bfe2717557e41c38a70c588d37dce5aecba2fa7e9a1b95f46c04664736f6c634300080c0033`,
  BytecodeLen: 1747,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:35:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:39:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
