// Automatically generated with Reach 0.1.11 (2d125008)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (2d125008)';
export const _backendVersion = 17;

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
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '81'));
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc3, ctc1],
      5: [ctc0, ctc1, ctc0],
      6: [ctc0, ctc1, ctc0, ctc1],
      7: [ctc0, ctc1, ctc0, ctc1]
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
  const ctc0 = stdlib.T_Bool;
  const ctc1 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '81'));
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v528 = stdlib.protect(ctc1, await interact.initGameBoard(), {
    at: './index.rsh:79:62:application',
    fs: ['at ./index.rsh:76:13:application call to [unknown function] (defined at: ./index.rsh:76:17:function exp)'],
    msg: 'initGameBoard',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [stdlib.checkedBigNumberify('./index.rsh:80:19:decimal', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('./index.rsh:81:22:decimal', stdlib.UInt_max, '10'), stdlib.checkedBigNumberify('./index.rsh:82:32:decimal', stdlib.UInt_max, '40'), v528],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:85:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc2, ctc2, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:80:19:decimal', stdlib.UInt_max, '1'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v611, v612, v613, v614], secs: v616, time: v615, didSend: v113, from: v610 } = txn1;
      
      sim_r.txns.push({
        amt: v611,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v625 = stdlib.add(v615, v612);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc2, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v611, v612, v613, v614], secs: v616, time: v615, didSend: v113, from: v610 } = txn1;
  ;
  const v625 = stdlib.add(v615, v612);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v625],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v610, v611, v613, v614, v625],
      evt_cnt: 0,
      funcNum: 2,
      lct: v615,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v982, time: v981, didSend: v494, from: v980 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v610,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc2, ctc2, ctc1, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v982, time: v981, didSend: v494, from: v980 } = txn3;
    ;
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:72:29:application',
      fs: ['at ./index.rsh:71:9:application call to [unknown function] (defined at: ./index.rsh:71:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:70:28:function exp)', 'at ./index.rsh:97:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v631, time: v630, didSend: v122, from: v629 } = txn2;
    ;
    const v634 = {
      randomizedBoard: v614,
      start_cat_position: v613
      };
    let v635 = v634;
    let v636 = v630;
    
    while (await (async () => {
      const v647 = v635.randomizedBoard;
      const v648 = v635.start_cat_position;
      const v649 = stdlib.eq(v648, stdlib.checkedBigNumberify('./index.rsh:14:20:decimal', stdlib.UInt_max, '81'));
      const v650 = stdlib.eq(v648, stdlib.checkedBigNumberify('./index.rsh:15:20:decimal', stdlib.UInt_max, '82'));
      const v651 = v649 ? true : v650;
      const v652 = stdlib.eq(v648, stdlib.checkedBigNumberify('./index.rsh:16:20:decimal', stdlib.UInt_max, '83'));
      const v653 = v651 ? true : v652;
      const v654 = stdlib.eq(v648, stdlib.checkedBigNumberify('./index.rsh:17:20:decimal', stdlib.UInt_max, '84'));
      const v655 = v653 ? true : v654;
      let v656;
      if (v655) {
        v656 = true;
        }
      else {
        let v657;
        const v658 = stdlib.lt(v648, stdlib.checkedBigNumberify('./index.rsh:20:22:decimal', stdlib.UInt_max, '71'));
        const v659 = stdlib.gt(v648, stdlib.checkedBigNumberify('./index.rsh:20:45:decimal', stdlib.UInt_max, '9'));
        const v660 = v658 ? v659 : false;
        if (v660) {
          const v661 = stdlib.add(v648, stdlib.checkedBigNumberify('./index.rsh:22:37:decimal', stdlib.UInt_max, '10'));
          const v663 = v647[v661];
          const v664 = stdlib.add(v648, stdlib.checkedBigNumberify('./index.rsh:23:37:decimal', stdlib.UInt_max, '9'));
          const v666 = v647[v664];
          const v667 = stdlib.add(v648, stdlib.checkedBigNumberify('./index.rsh:24:37:decimal', stdlib.UInt_max, '8'));
          const v669 = v647[v667];
          const v670 = stdlib.sub(v648, stdlib.checkedBigNumberify('./index.rsh:25:37:decimal', stdlib.UInt_max, '10'));
          const v672 = v647[v670];
          const v673 = stdlib.sub(v648, stdlib.checkedBigNumberify('./index.rsh:26:37:decimal', stdlib.UInt_max, '9'));
          const v675 = v647[v673];
          const v676 = stdlib.sub(v648, stdlib.checkedBigNumberify('./index.rsh:27:37:decimal', stdlib.UInt_max, '8'));
          const v678 = v647[v676];
          const v679 = stdlib.add(v648, stdlib.checkedBigNumberify('./index.rsh:28:37:decimal', stdlib.UInt_max, '1'));
          const v681 = v647[v679];
          const v682 = stdlib.sub(v648, stdlib.checkedBigNumberify('./index.rsh:29:37:decimal', stdlib.UInt_max, '1'));
          const v684 = v647[v682];
          const v685 = v663 ? v666 : false;
          const v686 = v685 ? v669 : false;
          const v687 = v686 ? v672 : false;
          const v688 = v687 ? v675 : false;
          const v689 = v688 ? v678 : false;
          const v690 = v689 ? v681 : false;
          const v691 = v690 ? v684 : false;
          v657 = v691;
          }
        else {
          v657 = false;
          }
        v656 = v657;
        }
      const v692 = v656 ? false : true;
      
      return v692;})()) {
      const v695 = v635.randomizedBoard;
      const v696 = v635.start_cat_position;
      const v778 = stdlib.protect(ctc2, await interact.getNode(v695, v696), {
        at: './index.rsh:116:59:application',
        fs: ['at ./index.rsh:115:15:application call to [unknown function] (defined at: ./index.rsh:115:19:function exp)'],
        msg: 'getNode',
        who: 'Alice'
        });
      stdlib.protect(ctc3, await interact.updateCatPosition(v778), {
        at: './index.rsh:118:33:application',
        fs: ['at ./index.rsh:115:15:application call to [unknown function] (defined at: ./index.rsh:115:19:function exp)'],
        msg: 'updateCatPosition',
        who: 'Alice'
        });
      
      const txn3 = await (ctc.sendrecv({
        args: [v610, v611, v629, v778],
        evt_cnt: 1,
        funcNum: 4,
        lct: v636,
        onlyIf: true,
        out_tys: [ctc2],
        pay: [stdlib.checkedBigNumberify('./index.rsh:120:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v780], secs: v782, time: v781, didSend: v270, from: v779 } = txn3;
          
          ;
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc4, ctc2, ctc4, ctc2],
        waitIfNotPresent: false
        }));
      const {data: [v780], secs: v782, time: v781, didSend: v270, from: v779 } = txn3;
      ;
      const v783 = stdlib.addressEq(v610, v779);
      stdlib.assert(v783, {
        at: './index.rsh:120:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc2],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v791], secs: v793, time: v792, didSend: v283, from: v790 } = txn4;
      ;
      const v794 = stdlib.addressEq(v629, v790);
      stdlib.assert(v794, {
        at: './index.rsh:132:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 6,
        out_tys: [ctc1],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v882], secs: v884, time: v883, didSend: v376, from: v881 } = txn5;
      ;
      const v885 = stdlib.addressEq(v629, v881);
      stdlib.assert(v885, {
        at: './index.rsh:140:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v886 = {
        randomizedBoard: v882,
        start_cat_position: v780
        };
      const cv635 = v886;
      const cv636 = v883;
      
      v635 = cv635;
      v636 = cv636;
      
      continue;
      
      
      
      
      
      }
    const v888 = v635.start_cat_position;
    const v889 = stdlib.eq(v888, stdlib.checkedBigNumberify('./index.rsh:14:20:decimal', stdlib.UInt_max, '81'));
    const v890 = stdlib.eq(v888, stdlib.checkedBigNumberify('./index.rsh:15:20:decimal', stdlib.UInt_max, '82'));
    const v891 = v889 ? true : v890;
    const v892 = stdlib.eq(v888, stdlib.checkedBigNumberify('./index.rsh:16:20:decimal', stdlib.UInt_max, '83'));
    const v893 = v891 ? true : v892;
    const v894 = stdlib.eq(v888, stdlib.checkedBigNumberify('./index.rsh:17:20:decimal', stdlib.UInt_max, '84'));
    const v895 = v893 ? true : v894;
    const v941 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
    const v942 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
    const v943 = v895 ? v941 : v942;
    const v944 = v943[stdlib.checkedBigNumberify('./index.rsh:160:9:array', stdlib.UInt_max, '0')];
    const v945 = v943[stdlib.checkedBigNumberify('./index.rsh:160:9:array', stdlib.UInt_max, '1')];
    const v946 = stdlib.mul(v944, v611);
    ;
    const v951 = stdlib.mul(v945, v611);
    ;
    const v968 = v895 ? stdlib.checkedBigNumberify('./index.rsh:170:56:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:170:59:decimal', stdlib.UInt_max, '0');
    stdlib.protect(ctc3, await interact.seeOutcome(v968), {
      at: './index.rsh:169:24:application',
      fs: ['at ./index.rsh:168:7:application call to [unknown function] (defined at: ./index.rsh:168:25:function exp)'],
      msg: 'seeOutcome',
      who: 'Alice'
      });
    
    return;
    }
  
  
  
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
  const ctc2 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '81'));
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc0, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v611, v612, v613, v614], secs: v616, time: v615, didSend: v113, from: v610 } = txn1;
  ;
  const v625 = stdlib.add(v615, v612);
  stdlib.protect(ctc3, await interact.acceptWager(v611), {
    at: './index.rsh:92:25:application',
    fs: ['at ./index.rsh:91:11:application call to [unknown function] (defined at: ./index.rsh:91:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v610, v611, v613, v614, v625],
    evt_cnt: 0,
    funcNum: 1,
    lct: v615,
    onlyIf: true,
    out_tys: [],
    pay: [v611, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v631, time: v630, didSend: v122, from: v629 } = txn2;
      
      sim_r.txns.push({
        amt: v611,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v634 = {
        randomizedBoard: v614,
        start_cat_position: v613
        };
      const v635 = v634;
      const v636 = v630;
      
      if (await (async () => {
        const v647 = v635.randomizedBoard;
        const v648 = v635.start_cat_position;
        const v649 = stdlib.eq(v648, stdlib.checkedBigNumberify('./index.rsh:14:20:decimal', stdlib.UInt_max, '81'));
        const v650 = stdlib.eq(v648, stdlib.checkedBigNumberify('./index.rsh:15:20:decimal', stdlib.UInt_max, '82'));
        const v651 = v649 ? true : v650;
        const v652 = stdlib.eq(v648, stdlib.checkedBigNumberify('./index.rsh:16:20:decimal', stdlib.UInt_max, '83'));
        const v653 = v651 ? true : v652;
        const v654 = stdlib.eq(v648, stdlib.checkedBigNumberify('./index.rsh:17:20:decimal', stdlib.UInt_max, '84'));
        const v655 = v653 ? true : v654;
        let v656;
        if (v655) {
          v656 = true;
          }
        else {
          let v657;
          const v658 = stdlib.lt(v648, stdlib.checkedBigNumberify('./index.rsh:20:22:decimal', stdlib.UInt_max, '71'));
          const v659 = stdlib.gt(v648, stdlib.checkedBigNumberify('./index.rsh:20:45:decimal', stdlib.UInt_max, '9'));
          const v660 = v658 ? v659 : false;
          if (v660) {
            const v661 = stdlib.add(v648, stdlib.checkedBigNumberify('./index.rsh:22:37:decimal', stdlib.UInt_max, '10'));
            const v663 = v647[v661];
            const v664 = stdlib.add(v648, stdlib.checkedBigNumberify('./index.rsh:23:37:decimal', stdlib.UInt_max, '9'));
            const v666 = v647[v664];
            const v667 = stdlib.add(v648, stdlib.checkedBigNumberify('./index.rsh:24:37:decimal', stdlib.UInt_max, '8'));
            const v669 = v647[v667];
            const v670 = stdlib.sub(v648, stdlib.checkedBigNumberify('./index.rsh:25:37:decimal', stdlib.UInt_max, '10'));
            const v672 = v647[v670];
            const v673 = stdlib.sub(v648, stdlib.checkedBigNumberify('./index.rsh:26:37:decimal', stdlib.UInt_max, '9'));
            const v675 = v647[v673];
            const v676 = stdlib.sub(v648, stdlib.checkedBigNumberify('./index.rsh:27:37:decimal', stdlib.UInt_max, '8'));
            const v678 = v647[v676];
            const v679 = stdlib.add(v648, stdlib.checkedBigNumberify('./index.rsh:28:37:decimal', stdlib.UInt_max, '1'));
            const v681 = v647[v679];
            const v682 = stdlib.sub(v648, stdlib.checkedBigNumberify('./index.rsh:29:37:decimal', stdlib.UInt_max, '1'));
            const v684 = v647[v682];
            const v685 = v663 ? v666 : false;
            const v686 = v685 ? v669 : false;
            const v687 = v686 ? v672 : false;
            const v688 = v687 ? v675 : false;
            const v689 = v688 ? v678 : false;
            const v690 = v689 ? v681 : false;
            const v691 = v690 ? v684 : false;
            v657 = v691;
            }
          else {
            v657 = false;
            }
          v656 = v657;
          }
        const v692 = v656 ? false : true;
        
        return v692;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v888 = v635.start_cat_position;
        const v889 = stdlib.eq(v888, stdlib.checkedBigNumberify('./index.rsh:14:20:decimal', stdlib.UInt_max, '81'));
        const v890 = stdlib.eq(v888, stdlib.checkedBigNumberify('./index.rsh:15:20:decimal', stdlib.UInt_max, '82'));
        const v891 = v889 ? true : v890;
        const v892 = stdlib.eq(v888, stdlib.checkedBigNumberify('./index.rsh:16:20:decimal', stdlib.UInt_max, '83'));
        const v893 = v891 ? true : v892;
        const v894 = stdlib.eq(v888, stdlib.checkedBigNumberify('./index.rsh:17:20:decimal', stdlib.UInt_max, '84'));
        const v895 = v893 ? true : v894;
        const v941 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v942 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
        const v943 = v895 ? v941 : v942;
        const v944 = v943[stdlib.checkedBigNumberify('./index.rsh:160:9:array', stdlib.UInt_max, '0')];
        const v945 = v943[stdlib.checkedBigNumberify('./index.rsh:160:9:array', stdlib.UInt_max, '1')];
        const v946 = stdlib.mul(v944, v611);
        sim_r.txns.push({
          kind: 'from',
          to: v610,
          tok: undefined /* Nothing */
          });
        const v951 = stdlib.mul(v945, v611);
        sim_r.txns.push({
          kind: 'from',
          to: v629,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v625],
    tys: [ctc4, ctc0, ctc0, ctc2, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v610, v611, v613, v614, v625],
      evt_cnt: 0,
      funcNum: 2,
      lct: v615,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v982, time: v981, didSend: v494, from: v980 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v610,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc2, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v982, time: v981, didSend: v494, from: v980 } = txn3;
    ;
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:72:29:application',
      fs: ['at ./index.rsh:71:9:application call to [unknown function] (defined at: ./index.rsh:71:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:70:28:function exp)', 'at ./index.rsh:97:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v631, time: v630, didSend: v122, from: v629 } = txn2;
    ;
    const v634 = {
      randomizedBoard: v614,
      start_cat_position: v613
      };
    let v635 = v634;
    let v636 = v630;
    
    while (await (async () => {
      const v647 = v635.randomizedBoard;
      const v648 = v635.start_cat_position;
      const v649 = stdlib.eq(v648, stdlib.checkedBigNumberify('./index.rsh:14:20:decimal', stdlib.UInt_max, '81'));
      const v650 = stdlib.eq(v648, stdlib.checkedBigNumberify('./index.rsh:15:20:decimal', stdlib.UInt_max, '82'));
      const v651 = v649 ? true : v650;
      const v652 = stdlib.eq(v648, stdlib.checkedBigNumberify('./index.rsh:16:20:decimal', stdlib.UInt_max, '83'));
      const v653 = v651 ? true : v652;
      const v654 = stdlib.eq(v648, stdlib.checkedBigNumberify('./index.rsh:17:20:decimal', stdlib.UInt_max, '84'));
      const v655 = v653 ? true : v654;
      let v656;
      if (v655) {
        v656 = true;
        }
      else {
        let v657;
        const v658 = stdlib.lt(v648, stdlib.checkedBigNumberify('./index.rsh:20:22:decimal', stdlib.UInt_max, '71'));
        const v659 = stdlib.gt(v648, stdlib.checkedBigNumberify('./index.rsh:20:45:decimal', stdlib.UInt_max, '9'));
        const v660 = v658 ? v659 : false;
        if (v660) {
          const v661 = stdlib.add(v648, stdlib.checkedBigNumberify('./index.rsh:22:37:decimal', stdlib.UInt_max, '10'));
          const v663 = v647[v661];
          const v664 = stdlib.add(v648, stdlib.checkedBigNumberify('./index.rsh:23:37:decimal', stdlib.UInt_max, '9'));
          const v666 = v647[v664];
          const v667 = stdlib.add(v648, stdlib.checkedBigNumberify('./index.rsh:24:37:decimal', stdlib.UInt_max, '8'));
          const v669 = v647[v667];
          const v670 = stdlib.sub(v648, stdlib.checkedBigNumberify('./index.rsh:25:37:decimal', stdlib.UInt_max, '10'));
          const v672 = v647[v670];
          const v673 = stdlib.sub(v648, stdlib.checkedBigNumberify('./index.rsh:26:37:decimal', stdlib.UInt_max, '9'));
          const v675 = v647[v673];
          const v676 = stdlib.sub(v648, stdlib.checkedBigNumberify('./index.rsh:27:37:decimal', stdlib.UInt_max, '8'));
          const v678 = v647[v676];
          const v679 = stdlib.add(v648, stdlib.checkedBigNumberify('./index.rsh:28:37:decimal', stdlib.UInt_max, '1'));
          const v681 = v647[v679];
          const v682 = stdlib.sub(v648, stdlib.checkedBigNumberify('./index.rsh:29:37:decimal', stdlib.UInt_max, '1'));
          const v684 = v647[v682];
          const v685 = v663 ? v666 : false;
          const v686 = v685 ? v669 : false;
          const v687 = v686 ? v672 : false;
          const v688 = v687 ? v675 : false;
          const v689 = v688 ? v678 : false;
          const v690 = v689 ? v681 : false;
          const v691 = v690 ? v684 : false;
          v657 = v691;
          }
        else {
          v657 = false;
          }
        v656 = v657;
        }
      const v692 = v656 ? false : true;
      
      return v692;})()) {
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc0],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v780], secs: v782, time: v781, didSend: v270, from: v779 } = txn3;
      ;
      const v783 = stdlib.addressEq(v610, v779);
      stdlib.assert(v783, {
        at: './index.rsh:120:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v784 = v635.randomizedBoard;
      const v788 = stdlib.protect(ctc0, await interact.getPosition(), {
        at: './index.rsh:129:55:application',
        fs: ['at ./index.rsh:128:13:application call to [unknown function] (defined at: ./index.rsh:128:17:function exp)'],
        msg: 'getPosition',
        who: 'Bob'
        });
      const v789 = stdlib.lt(v788, stdlib.checkedBigNumberify('./index.rsh:130:25:decimal', stdlib.UInt_max, '81'));
      stdlib.assert(v789, {
        at: './index.rsh:130:13:application',
        fs: ['at ./index.rsh:128:13:application call to [unknown function] (defined at: ./index.rsh:128:17:function exp)'],
        msg: null,
        who: 'Bob'
        });
      
      const txn4 = await (ctc.sendrecv({
        args: [v610, v611, v629, v780, v788],
        evt_cnt: 1,
        funcNum: 5,
        lct: v781,
        onlyIf: true,
        out_tys: [ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:132:9:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v791], secs: v793, time: v792, didSend: v283, from: v790 } = txn4;
          
          ;
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc4, ctc0, ctc4, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [v791], secs: v793, time: v792, didSend: v283, from: v790 } = txn4;
      ;
      const v794 = stdlib.addressEq(v629, v790);
      stdlib.assert(v794, {
        at: './index.rsh:132:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v797 = stdlib.lt(v791, stdlib.checkedBigNumberify('./index.rsh:136:25:decimal', stdlib.UInt_max, '81'));
      stdlib.assert(v797, {
        at: './index.rsh:136:13:application',
        fs: ['at ./index.rsh:135:13:application call to [unknown function] (defined at: ./index.rsh:135:17:function exp)'],
        msg: null,
        who: 'Bob'
        });
      const v799 = stdlib.Array_set(v784, v791, true);
      stdlib.protect(ctc3, await interact.updateBoard(v799), {
        at: './index.rsh:138:27:application',
        fs: ['at ./index.rsh:135:13:application call to [unknown function] (defined at: ./index.rsh:135:17:function exp)'],
        msg: 'updateBoard',
        who: 'Bob'
        });
      
      const txn5 = await (ctc.sendrecv({
        args: [v610, v611, v629, v780, v799],
        evt_cnt: 1,
        funcNum: 6,
        lct: v792,
        onlyIf: true,
        out_tys: [ctc2],
        pay: [stdlib.checkedBigNumberify('./index.rsh:140:9:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v882], secs: v884, time: v883, didSend: v376, from: v881 } = txn5;
          
          ;
          const v886 = {
            randomizedBoard: v882,
            start_cat_position: v780
            };
          const cv635 = v886;
          const cv636 = v883;
          
          await (async () => {
            const v635 = cv635;
            const v636 = cv636;
            
            if (await (async () => {
              const v647 = v635.randomizedBoard;
              const v648 = v635.start_cat_position;
              const v649 = stdlib.eq(v648, stdlib.checkedBigNumberify('./index.rsh:14:20:decimal', stdlib.UInt_max, '81'));
              const v650 = stdlib.eq(v648, stdlib.checkedBigNumberify('./index.rsh:15:20:decimal', stdlib.UInt_max, '82'));
              const v651 = v649 ? true : v650;
              const v652 = stdlib.eq(v648, stdlib.checkedBigNumberify('./index.rsh:16:20:decimal', stdlib.UInt_max, '83'));
              const v653 = v651 ? true : v652;
              const v654 = stdlib.eq(v648, stdlib.checkedBigNumberify('./index.rsh:17:20:decimal', stdlib.UInt_max, '84'));
              const v655 = v653 ? true : v654;
              let v656;
              if (v655) {
                v656 = true;
                }
              else {
                let v657;
                const v658 = stdlib.lt(v648, stdlib.checkedBigNumberify('./index.rsh:20:22:decimal', stdlib.UInt_max, '71'));
                const v659 = stdlib.gt(v648, stdlib.checkedBigNumberify('./index.rsh:20:45:decimal', stdlib.UInt_max, '9'));
                const v660 = v658 ? v659 : false;
                if (v660) {
                  const v661 = stdlib.add(v648, stdlib.checkedBigNumberify('./index.rsh:22:37:decimal', stdlib.UInt_max, '10'));
                  const v663 = v647[v661];
                  const v664 = stdlib.add(v648, stdlib.checkedBigNumberify('./index.rsh:23:37:decimal', stdlib.UInt_max, '9'));
                  const v666 = v647[v664];
                  const v667 = stdlib.add(v648, stdlib.checkedBigNumberify('./index.rsh:24:37:decimal', stdlib.UInt_max, '8'));
                  const v669 = v647[v667];
                  const v670 = stdlib.sub(v648, stdlib.checkedBigNumberify('./index.rsh:25:37:decimal', stdlib.UInt_max, '10'));
                  const v672 = v647[v670];
                  const v673 = stdlib.sub(v648, stdlib.checkedBigNumberify('./index.rsh:26:37:decimal', stdlib.UInt_max, '9'));
                  const v675 = v647[v673];
                  const v676 = stdlib.sub(v648, stdlib.checkedBigNumberify('./index.rsh:27:37:decimal', stdlib.UInt_max, '8'));
                  const v678 = v647[v676];
                  const v679 = stdlib.add(v648, stdlib.checkedBigNumberify('./index.rsh:28:37:decimal', stdlib.UInt_max, '1'));
                  const v681 = v647[v679];
                  const v682 = stdlib.sub(v648, stdlib.checkedBigNumberify('./index.rsh:29:37:decimal', stdlib.UInt_max, '1'));
                  const v684 = v647[v682];
                  const v685 = v663 ? v666 : false;
                  const v686 = v685 ? v669 : false;
                  const v687 = v686 ? v672 : false;
                  const v688 = v687 ? v675 : false;
                  const v689 = v688 ? v678 : false;
                  const v690 = v689 ? v681 : false;
                  const v691 = v690 ? v684 : false;
                  v657 = v691;
                  }
                else {
                  v657 = false;
                  }
                v656 = v657;
                }
              const v692 = v656 ? false : true;
              
              return v692;})()) {
              sim_r.isHalt = false;
              }
            else {
              const v888 = v635.start_cat_position;
              const v889 = stdlib.eq(v888, stdlib.checkedBigNumberify('./index.rsh:14:20:decimal', stdlib.UInt_max, '81'));
              const v890 = stdlib.eq(v888, stdlib.checkedBigNumberify('./index.rsh:15:20:decimal', stdlib.UInt_max, '82'));
              const v891 = v889 ? true : v890;
              const v892 = stdlib.eq(v888, stdlib.checkedBigNumberify('./index.rsh:16:20:decimal', stdlib.UInt_max, '83'));
              const v893 = v891 ? true : v892;
              const v894 = stdlib.eq(v888, stdlib.checkedBigNumberify('./index.rsh:17:20:decimal', stdlib.UInt_max, '84'));
              const v895 = v893 ? true : v894;
              const v941 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
              const v942 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
              const v943 = v895 ? v941 : v942;
              const v944 = v943[stdlib.checkedBigNumberify('./index.rsh:160:9:array', stdlib.UInt_max, '0')];
              const v945 = v943[stdlib.checkedBigNumberify('./index.rsh:160:9:array', stdlib.UInt_max, '1')];
              const v946 = stdlib.mul(v944, v611);
              sim_r.txns.push({
                kind: 'from',
                to: v610,
                tok: undefined /* Nothing */
                });
              const v951 = stdlib.mul(v945, v611);
              sim_r.txns.push({
                kind: 'from',
                to: v629,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc4, ctc0, ctc4, ctc0, ctc2],
        waitIfNotPresent: false
        }));
      const {data: [v882], secs: v884, time: v883, didSend: v376, from: v881 } = txn5;
      ;
      const v885 = stdlib.addressEq(v629, v881);
      stdlib.assert(v885, {
        at: './index.rsh:140:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v886 = {
        randomizedBoard: v882,
        start_cat_position: v780
        };
      const cv635 = v886;
      const cv636 = v883;
      
      v635 = cv635;
      v636 = cv636;
      
      continue;
      
      
      
      
      
      }
    const v888 = v635.start_cat_position;
    const v889 = stdlib.eq(v888, stdlib.checkedBigNumberify('./index.rsh:14:20:decimal', stdlib.UInt_max, '81'));
    const v890 = stdlib.eq(v888, stdlib.checkedBigNumberify('./index.rsh:15:20:decimal', stdlib.UInt_max, '82'));
    const v891 = v889 ? true : v890;
    const v892 = stdlib.eq(v888, stdlib.checkedBigNumberify('./index.rsh:16:20:decimal', stdlib.UInt_max, '83'));
    const v893 = v891 ? true : v892;
    const v894 = stdlib.eq(v888, stdlib.checkedBigNumberify('./index.rsh:17:20:decimal', stdlib.UInt_max, '84'));
    const v895 = v893 ? true : v894;
    const v941 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
    const v942 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
    const v943 = v895 ? v941 : v942;
    const v944 = v943[stdlib.checkedBigNumberify('./index.rsh:160:9:array', stdlib.UInt_max, '0')];
    const v945 = v943[stdlib.checkedBigNumberify('./index.rsh:160:9:array', stdlib.UInt_max, '1')];
    const v946 = stdlib.mul(v944, v611);
    ;
    const v951 = stdlib.mul(v945, v611);
    ;
    const v979 = v895 ? stdlib.checkedBigNumberify('./index.rsh:170:56:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:170:59:decimal', stdlib.UInt_max, '0');
    stdlib.protect(ctc3, await interact.seeOutcome(v979), {
      at: './index.rsh:169:24:application',
      fs: ['at ./index.rsh:168:7:application call to [unknown function] (defined at: ./index.rsh:168:25:function exp)'],
      msg: 'seeOutcome',
      who: 'Bob'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAMAAEIIAUGCQcCgQFRCiYDAQABAQAiNQAxGEEDvSpkSSJbNQEkWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0mBBAxAARtJIQQMQAC2SSEFDEAATCEFEkQhBzQBEkQ0BEkiEkw0AhIRRChkSTUDVyggNf9JNQU1/oAEr4J05zT+ULA0/zEAEkQ0A1cAIDQDJVs0/zT+NANXSAhQMgZCAddIIQU0ARJENARJIhJMNAISEUQoZEk1A0lKVwAgNf8lWzX+VyggNf2BSFs1/Ek1BRc1+4AEgaqazzT7FlCwNP0xABJENP80/hZQNP1QNPwWUChLAVcAUGdIIQc1ATIGNQJCAp5IIQQ0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8lWzX+VyggNf1JNQUXNfyABPmLr3g0/BZQsDT/MQASRDT/NP4WUDT9UDT8FlAoSwFXAFBnSCEFNQEyBjUCQgJASSMMQACVSSEIDEAAQyEIEkQjNAESRDQESSISTDQCEhFEKGQpZFA1A4AEQbFATbAyBjQDIQlbD0SxIrIBNAMlW7III7IQNANXACCyB7NCAdRIIzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDJVs1/4AEmouRdLAyBjQDIQlbDEQ0/4gCEDQDVwAgNP8xADQDVzBRNANXKAhQMgZCAHtIgaCNBogB7yI0ARJENARJIhJMNAISEURJNQVJSiJbNf8kWzX+gRBbNf1XGFE1/IAESme4uzT/FlA0/hZQNP0WUDT8ULA0/4gBrTIGNP4INfsxADT/FlA0/RZQNPxQNPsWUChLAVcAf2cpSwFXfwpnSCM1ATIGNQJCASo1/zX+Nf01/DX7NP5XAFE1+DT+IQpbSTX3IQoSNPeBUhIRNPeBUxIRNPeBVBIRSTX2QQAGIzX1QgBdNPeBRww09yEGDRBBAEg0+DT3IQsIVTT4NPchBghVEDT4NPckCFUQNPg09yELCVUQNPg09yEGCVUQNPg09yQJVRA0+DT3IwhVEDT4NPcjCVUQNfRCAAMiNfQ09DX1NPVBAFaAEAAAAAAAAAAAAAAAAAAAAAKAEAAAAAAAAAACAAAAAAAAAAA09k019LEisgE09CJbNPwLsggjshA0+7IHs7EisgE09CRbNPwLsggjshA0/bIHs0IAHDT7NPwWUDT9UChLAVcASGdIIQQ1ATIGNQJCABwxGSEEEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQMxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 137,
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
                "internalType": "uint256",
                "name": "v611",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v612",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v613",
                "type": "uint256"
              },
              {
                "internalType": "bool[81]",
                "name": "v614",
                "type": "bool[81]"
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
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
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
                "internalType": "uint256",
                "name": "v611",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v612",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v613",
                "type": "uint256"
              },
              {
                "internalType": "bool[81]",
                "name": "v614",
                "type": "bool[81]"
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
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
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
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
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
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
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
                "internalType": "uint256",
                "name": "v780",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
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
                "internalType": "uint256",
                "name": "v791",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
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
                "internalType": "bool[81]",
                "name": "v882",
                "type": "bool[81]"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
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
        "internalType": "struct T9",
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
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v780",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v791",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
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
            "components": [
              {
                "internalType": "bool[81]",
                "name": "v882",
                "type": "bool[81]"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200193b3803806200193b8339810160408190526200002691620002dd565b60008080554360035560408051602081018252918252517f201aba03fc17a4cca841a6c611089d6097b1e0486223db9f60ad3ba31240d7c5906200006e9033908590620003d9565b60405180910390a16020820151516200008b903414600762000122565b60208083015101516200009f904362000432565b8152620000ab6200014c565b338152602080840180515182840152805160409081015181850152905160609081015190840152835160808401526001600081905543905551620000f29183910162000459565b60405160208183030381529060405260029080519060200190620001189291906200018c565b50505050620004e3565b81620001485760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040518060a0016040528060006001600160a01b0316815260200160008152602001600081526020016200017f6200021b565b8152602001600081525090565b8280546200019a90620004a6565b90600052602060002090601f016020900481019282620001be576000855562000209565b82601f10620001d957805160ff191683800117855562000209565b8280016001018555821562000209579182015b8281111562000209578251825591602001919060010190620001ec565b50620002179291506200023a565b5090565b60405180610a2001604052806051906020820280368337509192915050565b5b808211156200021757600081556001016200023b565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b03811182821017156200028c576200028c62000251565b60405290565b604051608081016001600160401b03811182821017156200028c576200028c62000251565b604051610a2081016001600160401b03811182821017156200028c576200028c62000251565b6000818303610aa080821215620002f357600080fd5b620002fd62000267565b845181526020610a80601f19850112156200031757600080fd5b6200032162000292565b93508086015184526040860151818501526060860151604085015286609f8701126200034c57600080fd5b62000356620002b7565b9286019280888511156200036957600080fd5b608088015b85811015620003975780518015158114620003895760008081fd5b83529183019183016200036e565b50606086015250810192909252509392505050565b8060005b6051811015620003d35781511515845260209384019390910190600101620003b0565b50505050565b6000610ac08201905060018060a01b0384168252825160208301526020830151805160408401526020810151606084015260408101516080840152606081015190506200042a60a0840182620003ac565b509392505050565b600082198211156200045457634e487b7160e01b600052601160045260246000fd5b500190565b81516001600160a01b031681526020808301519082015260408083015190820152606080830151610aa08301916200049490840182620003ac565b506080830151610a8083015292915050565b600181811c90821680620004bb57607f821691505b60208210811415620004dd57634e487b7160e01b600052602260045260246000fd5b50919050565b61144880620004f36000396000f3fe6080604052600436106100795760003560e01c8063832307571161004b57806383230757146100df578063a0bb1bf6146100f4578063a209ad4e14610107578063ab53f2c61461011a57005b80631e93b0f1146100825780632c10a159146100a6578063552d7b8e146100b95780637eea518c146100cc57005b3661008057005b005b34801561008e57600080fd5b506003545b6040519081526020015b60405180910390f35b6100806100b4366004610fd8565b61013d565b6100806100c7366004610fd8565b6102ce565b6100806100da366004610fd8565b610470565b3480156100eb57600080fd5b50600154610093565b610080610102366004610ffb565b6105ee565b610080610115366004610fd8565b6107ac565b34801561012657600080fd5b5061012f610926565b60405161009d92919061100e565b61014d60016000541460096109c3565b6101678135158061016057506001548235145b600a6109c3565b6000808055600280546101799061106b565b80601f01602080910402602001604051908101604052809291908181526020018280546101a59061106b565b80156101f25780601f106101c7576101008083540402835291602001916101f2565b820191906000526020600020905b8154815290600101906020018083116101d557829003601f168201915b505050505080602001905181019061020a919061112d565b9050610214610e16565b61022582608001514310600b6109c3565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133846040516102569291906111cf565b60405180910390a161026f8260200151341460086109c3565b6060820151815152604082015181516020015261028a610e2e565b825181516001600160a01b0390911690526020808401518251820152815133604090910152825181830180519190915251439101526102c8816109e8565b50505050565b6102de60066000541460166109c3565b6102f8813515806102f157506001548235145b60176109c3565b60008080556002805461030a9061106b565b80601f01602080910402602001604051908101604052809291908181526020018280546103369061106b565b80156103835780601f1061035857610100808354040283529160200191610383565b820191906000526020600020905b81548152906001019060200180831161036657829003601f168201915b505050505080602001905181019061039b9190611207565b90507f643bb8428ae07277421f7600c8b7dc078704f1cfd6d7aaedbe23c2d5754675d333836040516103ce929190611279565b60405180910390a16103e2341560146109c3565b60408101516103fd906001600160a01b0316331460156109c3565b610405610e5e565b81516001600160a01b039081168252602080840151818401526040808501519092168284015260608085015190840152600760005543600155905161044c918391016112a0565b604051602081830303815290604052600290805190602001906102c8929190610e98565b610480600160005414600d6109c3565b61049a8135158061049357506001548235145b600e6109c3565b6000808055600280546104ac9061106b565b80601f01602080910402602001604051908101604052809291908181526020018280546104d89061106b565b80156105255780601f106104fa57610100808354040283529160200191610525565b820191906000526020600020905b81548152906001019060200180831161050857829003601f168201915b505050505080602001905181019061053d919061112d565b90506105518160800151431015600f6109c3565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516105829291906111cf565b60405180910390a16105963415600c6109c3565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156105d3573d6000803e3d6000fd5b50600080805560018190556105ea90600290610f1c565b5050565b6105fe600760005414601a6109c3565b6106188135158061061157506001548235145b601b6109c3565b60008080556002805461062a9061106b565b80601f01602080910402602001604051908101604052809291908181526020018280546106569061106b565b80156106a35780601f10610678576101008083540402835291602001916106a3565b820191906000526020600020905b81548152906001019060200180831161068657829003601f168201915b50505050508060200190518101906106bb9190611207565b90506106c5610e16565b7ffb577a37889e466b0f17fab6b050d1f186a486a02c20be591410d13182ad74bb33846040516106f69291906112d9565b60405180910390a161070a341560186109c3565b6040820151610725906001600160a01b0316331460196109c3565b60408051610a20818101909252906020850190605190839083908082843760009201919091525050825191909152506060820151815160200152610767610e2e565b825181516001600160a01b039182169052602080850151835182015260408086015184519316920191909152825181830180519190915251439101526102c8816109e8565b6107bc60056000541460126109c3565b6107d6813515806107cf57506001548235145b60136109c3565b6000808055600280546107e89061106b565b80601f01602080910402602001604051908101604052809291908181526020018280546108149061106b565b80156108615780601f1061083657610100808354040283529160200191610861565b820191906000526020600020905b81548152906001019060200180831161084457829003601f168201915b50505050508060200190518101906108799190611333565b90507f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc033836040516108ac929190611279565b60405180910390a16108c0341560106109c3565b80516108d8906001600160a01b0316331460116109c3565b6108e0610e5e565b81516001600160a01b0390811682526020808401518184015260408085015190921682840152848101356060840152600660005543600155905161044c918391016112a0565b60006060600054600280805461093b9061106b565b80601f01602080910402602001604051908101604052809291908181526020018280546109679061106b565b80156109b45780601f10610989576101008083540402835291602001916109b4565b820191906000526020600020905b81548152906001019060200180831161099757829003601f168201915b50505050509050915091509091565b816105ea5760405163100960cb60e01b81526004810182905260240160405180910390fd5b610a496040805160c0810182526000808252602080830182905282840182905283518085018552828152808201839052606084015283518085018552828152808201839052608084015283518085019094528184528301529060a082015290565b602080830151510151605114610a6a57602080830151510151605214610a6d565b60015b610a8257602080830151510151605314610a85565b60015b610a9a57602080830151510151605414610a9d565b60015b1580158252610ab25760016020820152610cb8565b602080830151510151604711610ac9576000610ad6565b6020808301515101516009105b15610ca357602080830151518051910151610af390600a906113ae565b60518110610b0357610b036113c6565b6020020151610b13576000610b41565b602080830151518051910151610b2b906009906113ae565b60518110610b3b57610b3b6113c6565b60200201515b610b4c576000610b7a565b602080830151518051910151610b64906008906113ae565b60518110610b7457610b746113c6565b60200201515b610b85576000610bb3565b602080830151518051910151610b9d90600a906113dc565b60518110610bad57610bad6113c6565b60200201515b610bbe576000610bec565b602080830151518051910151610bd6906009906113dc565b60518110610be657610be66113c6565b60200201515b610bf7576000610c25565b602080830151518051910151610c0f906008906113dc565b60518110610c1f57610c1f6113c6565b60200201515b610c30576000610c5e565b602080830151518051910151610c48906001906113ae565b60518110610c5857610c586113c6565b60200201515b610c69576000610c97565b602080830151518051910151610c81906001906113dc565b60518110610c9157610c916113c6565b60200201515b15156040820152610cab565b600060408201525b6040810151151560208201525b806020015115610dac57606081018051600290819052905160006020918201819052608084018051919091525101528051610cf7578060800151610cfd565b80606001515b60a082018190528251805160209091015191516001600160a01b03909116916108fc91610d2a91906113f3565b6040518115909202916000818181858888f19350505050158015610d52573d6000803e3d6000fd5b508160000151604001516001600160a01b03166108fc8360000151602001518360a0015160200151610d8491906113f3565b6040518115909202916000818181858888f193505050501580156105d3573d6000803e3d6000fd5b6040805160608082018352600080835260208084018281528486018381528851516001600160a01b039081168088528a5185015184528a5189015182168352600590955543600155875193840194909452905195820195909552935116908301529060800161044c565b6040518060200160405280610e29610f59565b905290565b6040805160a081018252600091810182815260608201839052608082019290925290815260208101610e29610f79565b604051806080016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081525090565b828054610ea49061106b565b90600052602060002090601f016020900481019282610ec65760008555610f0c565b82601f10610edf57805160ff1916838001178555610f0c565b82800160010185558215610f0c579182015b82811115610f0c578251825591602001919060010190610ef1565b50610f18929150610f8c565b5090565b508054610f289061106b565b6000825580601f10610f38575050565b601f016020900490600052602060002090810190610f569190610f8c565b50565b6040518060400160405280610f6c610fa1565b8152602001600081525090565b6040518060400160405280610f6c610f59565b5b80821115610f185760008155600101610f8d565b60405180610a2001604052806051906020820280368337509192915050565b600060408284031215610fd257600080fd5b50919050565b600060408284031215610fea57600080fd5b610ff48383610fc0565b9392505050565b6000610a408284031215610fd257600080fd5b82815260006020604081840152835180604085015260005b8181101561104257858101830151858201606001528201611026565b81811115611054576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061107f57607f821691505b60208210811415610fd257634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b60405160a0810167ffffffffffffffff811182821017156110d9576110d96110a0565b60405290565b604051610a20810167ffffffffffffffff811182821017156110d9576110d96110a0565b80516001600160a01b038116811461111a57600080fd5b919050565b8015158114610f5657600080fd5b6000610aa0828403121561114057600080fd5b6111486110b6565b61115183611103565b8152602080840151818301526040840151604083015284607f85011261117657600080fd5b61117e6110df565b80610a8086018781111561119157600080fd5b606087015b818110156111b65780516111a98161111f565b8452928401928401611196565b5060608501919091525160808401525090949350505050565b6001600160a01b0383168152813560208083019190915260608201908301356111f78161111f565b8015156040840152509392505050565b60006080828403121561121957600080fd5b6040516080810181811067ffffffffffffffff8211171561123c5761123c6110a0565b60405261124883611103565b81526020830151602082015261126060408401611103565b6040820152606083015160608201528091505092915050565b6001600160a01b038316815260608101610ff4602083018480358252602090810135910152565b81516001600160a01b03908116825260208084015190830152604080840151909116908201526060918201519181019190915260800190565b6001600160a01b03831681528135602080830191909152610a608201906040830184820160005b60518110156113285781356113148161111f565b151583529183019190830190600101611300565b505050509392505050565b60006060828403121561134557600080fd5b6040516060810181811067ffffffffffffffff82111715611368576113686110a0565b60405261137483611103565b81526020830151602082015261138c60408401611103565b60408201529392505050565b634e487b7160e01b600052601160045260246000fd5b600082198211156113c1576113c1611398565b500190565b634e487b7160e01b600052603260045260246000fd5b6000828210156113ee576113ee611398565b500390565b600081600019048311821515161561140d5761140d611398565b50029056fea2646970667358221220fb389df62749b9ef9ad1bf4580ceac1676b9c5be4bf464eb469e41b6bd965eea64736f6c634300080c0033`,
  BytecodeLen: 6459,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:88:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:97:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:166:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:113:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:121:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:133:13:after expr stmt semicolon',
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
