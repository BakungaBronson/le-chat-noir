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
  
  
  const v516 = stdlib.protect(ctc1, await interact.initGameBoard(), {
    at: './index.rsh:86:62:application',
    fs: ['at ./index.rsh:83:13:application call to [unknown function] (defined at: ./index.rsh:83:17:function exp)'],
    msg: 'initGameBoard',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [stdlib.checkedBigNumberify('./index.rsh:90:19:decimal', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('./index.rsh:93:22:decimal', stdlib.UInt_max, '10'), stdlib.checkedBigNumberify('./index.rsh:96:32:decimal', stdlib.UInt_max, '40'), v516],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:99:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc2, ctc2, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:90:19:decimal', stdlib.UInt_max, '1'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v599, v600, v601, v602], secs: v604, time: v603, didSend: v113, from: v598 } = txn1;
      
      sim_r.txns.push({
        amt: v599,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v613 = stdlib.add(v603, v600);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc2, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v599, v600, v601, v602], secs: v604, time: v603, didSend: v113, from: v598 } = txn1;
  ;
  const v613 = stdlib.add(v603, v600);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v613],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v598, v599, v601, v602, v613],
      evt_cnt: 0,
      funcNum: 2,
      lct: v603,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v958, time: v957, didSend: v482, from: v956 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v598,
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
    const {data: [], secs: v958, time: v957, didSend: v482, from: v956 } = txn3;
    ;
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:79:29:application',
      fs: ['at ./index.rsh:78:9:application call to [unknown function] (defined at: ./index.rsh:78:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:77:28:function exp)', 'at ./index.rsh:110:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v619, time: v618, didSend: v122, from: v617 } = txn2;
    ;
    let v622 = v602;
    let v623 = v601;
    let v624 = v618;
    
    while (await (async () => {
      const v635 = stdlib.eq(v623, stdlib.checkedBigNumberify('./index.rsh:13:20:decimal', stdlib.UInt_max, '81'));
      const v636 = stdlib.eq(v623, stdlib.checkedBigNumberify('./index.rsh:14:20:decimal', stdlib.UInt_max, '82'));
      const v637 = v635 ? true : v636;
      const v638 = stdlib.eq(v623, stdlib.checkedBigNumberify('./index.rsh:15:20:decimal', stdlib.UInt_max, '83'));
      const v639 = v637 ? true : v638;
      const v640 = stdlib.eq(v623, stdlib.checkedBigNumberify('./index.rsh:16:20:decimal', stdlib.UInt_max, '84'));
      const v641 = v639 ? true : v640;
      let v642;
      if (v641) {
        v642 = true;
        }
      else {
        let v643;
        const v644 = stdlib.lt(v623, stdlib.checkedBigNumberify('./index.rsh:21:22:decimal', stdlib.UInt_max, '71'));
        const v645 = stdlib.gt(v623, stdlib.checkedBigNumberify('./index.rsh:21:45:decimal', stdlib.UInt_max, '9'));
        const v646 = v644 ? v645 : false;
        if (v646) {
          const v647 = stdlib.add(v623, stdlib.checkedBigNumberify('./index.rsh:23:37:decimal', stdlib.UInt_max, '10'));
          const v649 = v622[v647];
          const v650 = stdlib.add(v623, stdlib.checkedBigNumberify('./index.rsh:24:37:decimal', stdlib.UInt_max, '9'));
          const v652 = v622[v650];
          const v653 = stdlib.add(v623, stdlib.checkedBigNumberify('./index.rsh:25:37:decimal', stdlib.UInt_max, '8'));
          const v655 = v622[v653];
          const v656 = stdlib.sub(v623, stdlib.checkedBigNumberify('./index.rsh:26:37:decimal', stdlib.UInt_max, '10'));
          const v658 = v622[v656];
          const v659 = stdlib.sub(v623, stdlib.checkedBigNumberify('./index.rsh:27:37:decimal', stdlib.UInt_max, '9'));
          const v661 = v622[v659];
          const v662 = stdlib.sub(v623, stdlib.checkedBigNumberify('./index.rsh:28:37:decimal', stdlib.UInt_max, '8'));
          const v664 = v622[v662];
          const v665 = stdlib.add(v623, stdlib.checkedBigNumberify('./index.rsh:29:37:decimal', stdlib.UInt_max, '1'));
          const v667 = v622[v665];
          const v668 = stdlib.sub(v623, stdlib.checkedBigNumberify('./index.rsh:30:37:decimal', stdlib.UInt_max, '1'));
          const v670 = v622[v668];
          const v671 = v649 ? v652 : false;
          const v672 = v671 ? v655 : false;
          const v673 = v672 ? v658 : false;
          const v674 = v673 ? v661 : false;
          const v675 = v674 ? v664 : false;
          const v676 = v675 ? v667 : false;
          const v677 = v676 ? v670 : false;
          v643 = v677;
          }
        else {
          v643 = false;
          }
        v642 = v643;
        }
      const v678 = v642 ? false : true;
      
      return v678;})()) {
      const v762 = stdlib.protect(ctc2, await interact.getNode(v622, v623), {
        at: './index.rsh:127:17:application',
        fs: ['at ./index.rsh:124:15:application call to [unknown function] (defined at: ./index.rsh:124:19:function exp)'],
        msg: 'getNode',
        who: 'Alice'
        });
      stdlib.protect(ctc3, await interact.updateCatPosition(v762), {
        at: './index.rsh:129:33:application',
        fs: ['at ./index.rsh:124:15:application call to [unknown function] (defined at: ./index.rsh:124:19:function exp)'],
        msg: 'updateCatPosition',
        who: 'Alice'
        });
      
      const txn3 = await (ctc.sendrecv({
        args: [v598, v599, v617, v762],
        evt_cnt: 1,
        funcNum: 4,
        lct: v624,
        onlyIf: true,
        out_tys: [ctc2],
        pay: [stdlib.checkedBigNumberify('./index.rsh:131:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v764], secs: v766, time: v765, didSend: v266, from: v763 } = txn3;
          
          ;
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc4, ctc2, ctc4, ctc2],
        waitIfNotPresent: false
        }));
      const {data: [v764], secs: v766, time: v765, didSend: v266, from: v763 } = txn3;
      ;
      const v767 = stdlib.addressEq(v598, v763);
      stdlib.assert(v767, {
        at: './index.rsh:131:11:dot',
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
      const {data: [v773], secs: v775, time: v774, didSend: v277, from: v772 } = txn4;
      ;
      const v776 = stdlib.addressEq(v617, v772);
      stdlib.assert(v776, {
        at: './index.rsh:140:9:dot',
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
      const {data: [v864], secs: v866, time: v865, didSend: v370, from: v863 } = txn5;
      ;
      const v867 = stdlib.addressEq(v617, v863);
      stdlib.assert(v867, {
        at: './index.rsh:148:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const cv622 = v864;
      const cv623 = v764;
      const cv624 = v865;
      
      v622 = cv622;
      v623 = cv623;
      v624 = cv624;
      
      continue;
      
      
      
      
      
      }
    const v868 = stdlib.eq(v623, stdlib.checkedBigNumberify('./index.rsh:13:20:decimal', stdlib.UInt_max, '81'));
    const v869 = stdlib.eq(v623, stdlib.checkedBigNumberify('./index.rsh:14:20:decimal', stdlib.UInt_max, '82'));
    const v870 = v868 ? true : v869;
    const v871 = stdlib.eq(v623, stdlib.checkedBigNumberify('./index.rsh:15:20:decimal', stdlib.UInt_max, '83'));
    const v872 = v870 ? true : v871;
    const v873 = stdlib.eq(v623, stdlib.checkedBigNumberify('./index.rsh:16:20:decimal', stdlib.UInt_max, '84'));
    const v874 = v872 ? true : v873;
    const v919 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
    const v920 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
    const v921 = v874 ? v919 : v920;
    const v922 = v921[stdlib.checkedBigNumberify('./index.rsh:161:9:array', stdlib.UInt_max, '0')];
    const v923 = v921[stdlib.checkedBigNumberify('./index.rsh:161:9:array', stdlib.UInt_max, '1')];
    const v924 = stdlib.mul(v922, v599);
    ;
    const v929 = stdlib.mul(v923, v599);
    ;
    const v945 = v874 ? stdlib.checkedBigNumberify('./index.rsh:171:34:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:171:37:decimal', stdlib.UInt_max, '0');
    stdlib.protect(ctc3, await interact.seeOutcome(v945), {
      at: './index.rsh:170:24:application',
      fs: ['at ./index.rsh:169:7:application call to [unknown function] (defined at: ./index.rsh:169:25:function exp)'],
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
  const {data: [v599, v600, v601, v602], secs: v604, time: v603, didSend: v113, from: v598 } = txn1;
  ;
  const v613 = stdlib.add(v603, v600);
  stdlib.protect(ctc3, await interact.acceptWager(v599), {
    at: './index.rsh:105:25:application',
    fs: ['at ./index.rsh:104:11:application call to [unknown function] (defined at: ./index.rsh:104:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v598, v599, v601, v602, v613],
    evt_cnt: 0,
    funcNum: 1,
    lct: v603,
    onlyIf: true,
    out_tys: [],
    pay: [v599, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v619, time: v618, didSend: v122, from: v617 } = txn2;
      
      sim_r.txns.push({
        amt: v599,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v622 = v602;
      const v623 = v601;
      const v624 = v618;
      
      if (await (async () => {
        const v635 = stdlib.eq(v623, stdlib.checkedBigNumberify('./index.rsh:13:20:decimal', stdlib.UInt_max, '81'));
        const v636 = stdlib.eq(v623, stdlib.checkedBigNumberify('./index.rsh:14:20:decimal', stdlib.UInt_max, '82'));
        const v637 = v635 ? true : v636;
        const v638 = stdlib.eq(v623, stdlib.checkedBigNumberify('./index.rsh:15:20:decimal', stdlib.UInt_max, '83'));
        const v639 = v637 ? true : v638;
        const v640 = stdlib.eq(v623, stdlib.checkedBigNumberify('./index.rsh:16:20:decimal', stdlib.UInt_max, '84'));
        const v641 = v639 ? true : v640;
        let v642;
        if (v641) {
          v642 = true;
          }
        else {
          let v643;
          const v644 = stdlib.lt(v623, stdlib.checkedBigNumberify('./index.rsh:21:22:decimal', stdlib.UInt_max, '71'));
          const v645 = stdlib.gt(v623, stdlib.checkedBigNumberify('./index.rsh:21:45:decimal', stdlib.UInt_max, '9'));
          const v646 = v644 ? v645 : false;
          if (v646) {
            const v647 = stdlib.add(v623, stdlib.checkedBigNumberify('./index.rsh:23:37:decimal', stdlib.UInt_max, '10'));
            const v649 = v622[v647];
            const v650 = stdlib.add(v623, stdlib.checkedBigNumberify('./index.rsh:24:37:decimal', stdlib.UInt_max, '9'));
            const v652 = v622[v650];
            const v653 = stdlib.add(v623, stdlib.checkedBigNumberify('./index.rsh:25:37:decimal', stdlib.UInt_max, '8'));
            const v655 = v622[v653];
            const v656 = stdlib.sub(v623, stdlib.checkedBigNumberify('./index.rsh:26:37:decimal', stdlib.UInt_max, '10'));
            const v658 = v622[v656];
            const v659 = stdlib.sub(v623, stdlib.checkedBigNumberify('./index.rsh:27:37:decimal', stdlib.UInt_max, '9'));
            const v661 = v622[v659];
            const v662 = stdlib.sub(v623, stdlib.checkedBigNumberify('./index.rsh:28:37:decimal', stdlib.UInt_max, '8'));
            const v664 = v622[v662];
            const v665 = stdlib.add(v623, stdlib.checkedBigNumberify('./index.rsh:29:37:decimal', stdlib.UInt_max, '1'));
            const v667 = v622[v665];
            const v668 = stdlib.sub(v623, stdlib.checkedBigNumberify('./index.rsh:30:37:decimal', stdlib.UInt_max, '1'));
            const v670 = v622[v668];
            const v671 = v649 ? v652 : false;
            const v672 = v671 ? v655 : false;
            const v673 = v672 ? v658 : false;
            const v674 = v673 ? v661 : false;
            const v675 = v674 ? v664 : false;
            const v676 = v675 ? v667 : false;
            const v677 = v676 ? v670 : false;
            v643 = v677;
            }
          else {
            v643 = false;
            }
          v642 = v643;
          }
        const v678 = v642 ? false : true;
        
        return v678;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v868 = stdlib.eq(v623, stdlib.checkedBigNumberify('./index.rsh:13:20:decimal', stdlib.UInt_max, '81'));
        const v869 = stdlib.eq(v623, stdlib.checkedBigNumberify('./index.rsh:14:20:decimal', stdlib.UInt_max, '82'));
        const v870 = v868 ? true : v869;
        const v871 = stdlib.eq(v623, stdlib.checkedBigNumberify('./index.rsh:15:20:decimal', stdlib.UInt_max, '83'));
        const v872 = v870 ? true : v871;
        const v873 = stdlib.eq(v623, stdlib.checkedBigNumberify('./index.rsh:16:20:decimal', stdlib.UInt_max, '84'));
        const v874 = v872 ? true : v873;
        const v919 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v920 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
        const v921 = v874 ? v919 : v920;
        const v922 = v921[stdlib.checkedBigNumberify('./index.rsh:161:9:array', stdlib.UInt_max, '0')];
        const v923 = v921[stdlib.checkedBigNumberify('./index.rsh:161:9:array', stdlib.UInt_max, '1')];
        const v924 = stdlib.mul(v922, v599);
        sim_r.txns.push({
          kind: 'from',
          to: v598,
          tok: undefined /* Nothing */
          });
        const v929 = stdlib.mul(v923, v599);
        sim_r.txns.push({
          kind: 'from',
          to: v617,
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
    timeoutAt: ['time', v613],
    tys: [ctc4, ctc0, ctc0, ctc2, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v598, v599, v601, v602, v613],
      evt_cnt: 0,
      funcNum: 2,
      lct: v603,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v958, time: v957, didSend: v482, from: v956 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v598,
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
    const {data: [], secs: v958, time: v957, didSend: v482, from: v956 } = txn3;
    ;
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:79:29:application',
      fs: ['at ./index.rsh:78:9:application call to [unknown function] (defined at: ./index.rsh:78:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:77:28:function exp)', 'at ./index.rsh:110:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v619, time: v618, didSend: v122, from: v617 } = txn2;
    ;
    let v622 = v602;
    let v623 = v601;
    let v624 = v618;
    
    while (await (async () => {
      const v635 = stdlib.eq(v623, stdlib.checkedBigNumberify('./index.rsh:13:20:decimal', stdlib.UInt_max, '81'));
      const v636 = stdlib.eq(v623, stdlib.checkedBigNumberify('./index.rsh:14:20:decimal', stdlib.UInt_max, '82'));
      const v637 = v635 ? true : v636;
      const v638 = stdlib.eq(v623, stdlib.checkedBigNumberify('./index.rsh:15:20:decimal', stdlib.UInt_max, '83'));
      const v639 = v637 ? true : v638;
      const v640 = stdlib.eq(v623, stdlib.checkedBigNumberify('./index.rsh:16:20:decimal', stdlib.UInt_max, '84'));
      const v641 = v639 ? true : v640;
      let v642;
      if (v641) {
        v642 = true;
        }
      else {
        let v643;
        const v644 = stdlib.lt(v623, stdlib.checkedBigNumberify('./index.rsh:21:22:decimal', stdlib.UInt_max, '71'));
        const v645 = stdlib.gt(v623, stdlib.checkedBigNumberify('./index.rsh:21:45:decimal', stdlib.UInt_max, '9'));
        const v646 = v644 ? v645 : false;
        if (v646) {
          const v647 = stdlib.add(v623, stdlib.checkedBigNumberify('./index.rsh:23:37:decimal', stdlib.UInt_max, '10'));
          const v649 = v622[v647];
          const v650 = stdlib.add(v623, stdlib.checkedBigNumberify('./index.rsh:24:37:decimal', stdlib.UInt_max, '9'));
          const v652 = v622[v650];
          const v653 = stdlib.add(v623, stdlib.checkedBigNumberify('./index.rsh:25:37:decimal', stdlib.UInt_max, '8'));
          const v655 = v622[v653];
          const v656 = stdlib.sub(v623, stdlib.checkedBigNumberify('./index.rsh:26:37:decimal', stdlib.UInt_max, '10'));
          const v658 = v622[v656];
          const v659 = stdlib.sub(v623, stdlib.checkedBigNumberify('./index.rsh:27:37:decimal', stdlib.UInt_max, '9'));
          const v661 = v622[v659];
          const v662 = stdlib.sub(v623, stdlib.checkedBigNumberify('./index.rsh:28:37:decimal', stdlib.UInt_max, '8'));
          const v664 = v622[v662];
          const v665 = stdlib.add(v623, stdlib.checkedBigNumberify('./index.rsh:29:37:decimal', stdlib.UInt_max, '1'));
          const v667 = v622[v665];
          const v668 = stdlib.sub(v623, stdlib.checkedBigNumberify('./index.rsh:30:37:decimal', stdlib.UInt_max, '1'));
          const v670 = v622[v668];
          const v671 = v649 ? v652 : false;
          const v672 = v671 ? v655 : false;
          const v673 = v672 ? v658 : false;
          const v674 = v673 ? v661 : false;
          const v675 = v674 ? v664 : false;
          const v676 = v675 ? v667 : false;
          const v677 = v676 ? v670 : false;
          v643 = v677;
          }
        else {
          v643 = false;
          }
        v642 = v643;
        }
      const v678 = v642 ? false : true;
      
      return v678;})()) {
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc0],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v764], secs: v766, time: v765, didSend: v266, from: v763 } = txn3;
      ;
      const v767 = stdlib.addressEq(v598, v763);
      stdlib.assert(v767, {
        at: './index.rsh:131:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v770 = stdlib.protect(ctc0, await interact.getPosition(), {
        at: './index.rsh:137:55:application',
        fs: ['at ./index.rsh:136:13:application call to [unknown function] (defined at: ./index.rsh:136:17:function exp)'],
        msg: 'getPosition',
        who: 'Bob'
        });
      const v771 = stdlib.lt(v770, stdlib.checkedBigNumberify('./index.rsh:138:25:decimal', stdlib.UInt_max, '81'));
      stdlib.assert(v771, {
        at: './index.rsh:138:13:application',
        fs: ['at ./index.rsh:136:13:application call to [unknown function] (defined at: ./index.rsh:136:17:function exp)'],
        msg: null,
        who: 'Bob'
        });
      
      const txn4 = await (ctc.sendrecv({
        args: [v598, v599, v617, v764, v770],
        evt_cnt: 1,
        funcNum: 5,
        lct: v765,
        onlyIf: true,
        out_tys: [ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:140:9:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v773], secs: v775, time: v774, didSend: v277, from: v772 } = txn4;
          
          ;
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc4, ctc0, ctc4, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [v773], secs: v775, time: v774, didSend: v277, from: v772 } = txn4;
      ;
      const v776 = stdlib.addressEq(v617, v772);
      stdlib.assert(v776, {
        at: './index.rsh:140:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v779 = stdlib.lt(v773, stdlib.checkedBigNumberify('./index.rsh:144:25:decimal', stdlib.UInt_max, '81'));
      stdlib.assert(v779, {
        at: './index.rsh:144:13:application',
        fs: ['at ./index.rsh:143:13:application call to [unknown function] (defined at: ./index.rsh:143:17:function exp)'],
        msg: null,
        who: 'Bob'
        });
      const v781 = stdlib.Array_set(v622, v773, true);
      stdlib.protect(ctc3, await interact.updateBoard(v781), {
        at: './index.rsh:146:27:application',
        fs: ['at ./index.rsh:143:13:application call to [unknown function] (defined at: ./index.rsh:143:17:function exp)'],
        msg: 'updateBoard',
        who: 'Bob'
        });
      
      const txn5 = await (ctc.sendrecv({
        args: [v598, v599, v617, v764, v781],
        evt_cnt: 1,
        funcNum: 6,
        lct: v774,
        onlyIf: true,
        out_tys: [ctc2],
        pay: [stdlib.checkedBigNumberify('./index.rsh:148:9:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v864], secs: v866, time: v865, didSend: v370, from: v863 } = txn5;
          
          ;
          const cv622 = v864;
          const cv623 = v764;
          const cv624 = v865;
          
          await (async () => {
            const v622 = cv622;
            const v623 = cv623;
            const v624 = cv624;
            
            if (await (async () => {
              const v635 = stdlib.eq(v623, stdlib.checkedBigNumberify('./index.rsh:13:20:decimal', stdlib.UInt_max, '81'));
              const v636 = stdlib.eq(v623, stdlib.checkedBigNumberify('./index.rsh:14:20:decimal', stdlib.UInt_max, '82'));
              const v637 = v635 ? true : v636;
              const v638 = stdlib.eq(v623, stdlib.checkedBigNumberify('./index.rsh:15:20:decimal', stdlib.UInt_max, '83'));
              const v639 = v637 ? true : v638;
              const v640 = stdlib.eq(v623, stdlib.checkedBigNumberify('./index.rsh:16:20:decimal', stdlib.UInt_max, '84'));
              const v641 = v639 ? true : v640;
              let v642;
              if (v641) {
                v642 = true;
                }
              else {
                let v643;
                const v644 = stdlib.lt(v623, stdlib.checkedBigNumberify('./index.rsh:21:22:decimal', stdlib.UInt_max, '71'));
                const v645 = stdlib.gt(v623, stdlib.checkedBigNumberify('./index.rsh:21:45:decimal', stdlib.UInt_max, '9'));
                const v646 = v644 ? v645 : false;
                if (v646) {
                  const v647 = stdlib.add(v623, stdlib.checkedBigNumberify('./index.rsh:23:37:decimal', stdlib.UInt_max, '10'));
                  const v649 = v622[v647];
                  const v650 = stdlib.add(v623, stdlib.checkedBigNumberify('./index.rsh:24:37:decimal', stdlib.UInt_max, '9'));
                  const v652 = v622[v650];
                  const v653 = stdlib.add(v623, stdlib.checkedBigNumberify('./index.rsh:25:37:decimal', stdlib.UInt_max, '8'));
                  const v655 = v622[v653];
                  const v656 = stdlib.sub(v623, stdlib.checkedBigNumberify('./index.rsh:26:37:decimal', stdlib.UInt_max, '10'));
                  const v658 = v622[v656];
                  const v659 = stdlib.sub(v623, stdlib.checkedBigNumberify('./index.rsh:27:37:decimal', stdlib.UInt_max, '9'));
                  const v661 = v622[v659];
                  const v662 = stdlib.sub(v623, stdlib.checkedBigNumberify('./index.rsh:28:37:decimal', stdlib.UInt_max, '8'));
                  const v664 = v622[v662];
                  const v665 = stdlib.add(v623, stdlib.checkedBigNumberify('./index.rsh:29:37:decimal', stdlib.UInt_max, '1'));
                  const v667 = v622[v665];
                  const v668 = stdlib.sub(v623, stdlib.checkedBigNumberify('./index.rsh:30:37:decimal', stdlib.UInt_max, '1'));
                  const v670 = v622[v668];
                  const v671 = v649 ? v652 : false;
                  const v672 = v671 ? v655 : false;
                  const v673 = v672 ? v658 : false;
                  const v674 = v673 ? v661 : false;
                  const v675 = v674 ? v664 : false;
                  const v676 = v675 ? v667 : false;
                  const v677 = v676 ? v670 : false;
                  v643 = v677;
                  }
                else {
                  v643 = false;
                  }
                v642 = v643;
                }
              const v678 = v642 ? false : true;
              
              return v678;})()) {
              sim_r.isHalt = false;
              }
            else {
              const v868 = stdlib.eq(v623, stdlib.checkedBigNumberify('./index.rsh:13:20:decimal', stdlib.UInt_max, '81'));
              const v869 = stdlib.eq(v623, stdlib.checkedBigNumberify('./index.rsh:14:20:decimal', stdlib.UInt_max, '82'));
              const v870 = v868 ? true : v869;
              const v871 = stdlib.eq(v623, stdlib.checkedBigNumberify('./index.rsh:15:20:decimal', stdlib.UInt_max, '83'));
              const v872 = v870 ? true : v871;
              const v873 = stdlib.eq(v623, stdlib.checkedBigNumberify('./index.rsh:16:20:decimal', stdlib.UInt_max, '84'));
              const v874 = v872 ? true : v873;
              const v919 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
              const v920 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
              const v921 = v874 ? v919 : v920;
              const v922 = v921[stdlib.checkedBigNumberify('./index.rsh:161:9:array', stdlib.UInt_max, '0')];
              const v923 = v921[stdlib.checkedBigNumberify('./index.rsh:161:9:array', stdlib.UInt_max, '1')];
              const v924 = stdlib.mul(v922, v599);
              sim_r.txns.push({
                kind: 'from',
                to: v598,
                tok: undefined /* Nothing */
                });
              const v929 = stdlib.mul(v923, v599);
              sim_r.txns.push({
                kind: 'from',
                to: v617,
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
      const {data: [v864], secs: v866, time: v865, didSend: v370, from: v863 } = txn5;
      ;
      const v867 = stdlib.addressEq(v617, v863);
      stdlib.assert(v867, {
        at: './index.rsh:148:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const cv622 = v864;
      const cv623 = v764;
      const cv624 = v865;
      
      v622 = cv622;
      v623 = cv623;
      v624 = cv624;
      
      continue;
      
      
      
      
      
      }
    const v868 = stdlib.eq(v623, stdlib.checkedBigNumberify('./index.rsh:13:20:decimal', stdlib.UInt_max, '81'));
    const v869 = stdlib.eq(v623, stdlib.checkedBigNumberify('./index.rsh:14:20:decimal', stdlib.UInt_max, '82'));
    const v870 = v868 ? true : v869;
    const v871 = stdlib.eq(v623, stdlib.checkedBigNumberify('./index.rsh:15:20:decimal', stdlib.UInt_max, '83'));
    const v872 = v870 ? true : v871;
    const v873 = stdlib.eq(v623, stdlib.checkedBigNumberify('./index.rsh:16:20:decimal', stdlib.UInt_max, '84'));
    const v874 = v872 ? true : v873;
    const v919 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
    const v920 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
    const v921 = v874 ? v919 : v920;
    const v922 = v921[stdlib.checkedBigNumberify('./index.rsh:161:9:array', stdlib.UInt_max, '0')];
    const v923 = v921[stdlib.checkedBigNumberify('./index.rsh:161:9:array', stdlib.UInt_max, '1')];
    const v924 = stdlib.mul(v922, v599);
    ;
    const v929 = stdlib.mul(v923, v599);
    ;
    const v955 = v874 ? stdlib.checkedBigNumberify('./index.rsh:171:34:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:171:37:decimal', stdlib.UInt_max, '0');
    stdlib.protect(ctc3, await interact.seeOutcome(v955), {
      at: './index.rsh:170:24:application',
      fs: ['at ./index.rsh:169:7:application call to [unknown function] (defined at: ./index.rsh:169:25:function exp)'],
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
  appApproval: `BiAMAAEIIAUGCQdIAoEBCiYDAQABAQAiNQAxGEEDsCpkSSJbNQEkWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0mBBAxAARpJIQQMQAC1SSEFDEAASyEFEkQhBzQBEkQ0BEkiEkw0AhIRRChkSTUDVyggNf9JNQU1/oAEr4J05zT+ULA0/zEAEkQ0A1cAIDQDJVs0/zT+NAMhCFsyBkIB1kghBTQBEkQ0BEkiEkw0AhIRRChkSTUDSUpXACA1/yVbNf5XKCA1/SEIWzX8STUFFzX7gASBqprPNPsWULA0/TEAEkQ0/zT+FlA0/VA0/BZQKEsBVwBQZ0ghBzUBMgY1AkICkkghBDQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yVbNf5XKCA1/Uk1BRc1/IAE+YuveDT8FlCwNP8xABJENP80/hZQNP1QNPwWUChLAVcAUGdIIQU1ATIGNQJCAjRJIwxAAJRJIQkMQABDIQkSRCM0ARJENARJIhJMNAISEUQoZClkUDUDgARBsUBNsDIGNAMhClsPRLEisgE0AyVbsggjshA0A1cAILIHs0IByEgjNAESRDQESSISTDQCEhFEKGQpZFBJNQMlWzX/gASai5F0sDIGNAMhClsMRDT/iAIENANXACA0/zEANANXMFE0A4EoWzIGQgB7SIGgjQaIAeQiNAESRDQESSISTDQCEhFESTUFSUoiWzX/JFs1/oEQWzX9VxhRNfyABEpnuLs0/xZQNP4WUDT9FlA0/FCwNP+IAaIyBjT+CDX7MQA0/xZQNP0WUDT8UDT7FlAoSwFXAH9nKUsBV38KZ0gjNQEyBjUCQgEfNf81/jX9Nfw1+zX6NP6BURI0/oFSEhE0/oFTEhE0/oFUEhFJNfdBAAYjNfZCAF00/oFHDDT+IQYNEEEASDT9NP4hCwhVNP00/iEGCFUQNP00/iQIVRA0/TT+IQsJVRA0/TT+IQYJVRA0/TT+JAlVEDT9NP4jCFUQNP00/iMJVRA19UIAAyI19TT1NfY09kEAVoAQAAAAAAAAAAAAAAAAAAAAAoAQAAAAAAAAAAIAAAAAAAAAADT3TTX1sSKyATT1Ils0+wuyCCOyEDT6sgezsSKyATT1JFs0+wuyCCOyEDT8sgezQgAcNPo0+xZQNPxQKEsBVwBIZ0ghBDUBMgY1AkIAHDEZIQQSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAzE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
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
                "name": "v599",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v600",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v601",
                "type": "uint256"
              },
              {
                "internalType": "bool[81]",
                "name": "v602",
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
                "name": "v599",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v600",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v601",
                "type": "uint256"
              },
              {
                "internalType": "bool[81]",
                "name": "v602",
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
        "internalType": "struct T8",
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
        "internalType": "struct T8",
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
                "name": "v764",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
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
                "name": "v773",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
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
                "name": "v864",
                "type": "bool[81]"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
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
        "internalType": "struct T8",
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
        "internalType": "struct T8",
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
                "name": "v764",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
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
                "name": "v773",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
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
                "name": "v864",
                "type": "bool[81]"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
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
  Bytecode: `0x608060405260405162001903380380620019038339810160408190526200002691620002dd565b60008080554360035560408051602081018252918252517f201aba03fc17a4cca841a6c611089d6097b1e0486223db9f60ad3ba31240d7c5906200006e9033908590620003d9565b60405180910390a16020820151516200008b903414600762000122565b60208083015101516200009f904362000432565b8152620000ab6200014c565b338152602080840180515182840152805160409081015181850152905160609081015190840152835160808401526001600081905543905551620000f29183910162000459565b60405160208183030381529060405260029080519060200190620001189291906200018c565b50505050620004e3565b81620001485760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040518060a0016040528060006001600160a01b0316815260200160008152602001600081526020016200017f6200021b565b8152602001600081525090565b8280546200019a90620004a6565b90600052602060002090601f016020900481019282620001be576000855562000209565b82601f10620001d957805160ff191683800117855562000209565b8280016001018555821562000209579182015b8281111562000209578251825591602001919060010190620001ec565b50620002179291506200023a565b5090565b60405180610a2001604052806051906020820280368337509192915050565b5b808211156200021757600081556001016200023b565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b03811182821017156200028c576200028c62000251565b60405290565b604051608081016001600160401b03811182821017156200028c576200028c62000251565b604051610a2081016001600160401b03811182821017156200028c576200028c62000251565b6000818303610aa080821215620002f357600080fd5b620002fd62000267565b845181526020610a80601f19850112156200031757600080fd5b6200032162000292565b93508086015184526040860151818501526060860151604085015286609f8701126200034c57600080fd5b62000356620002b7565b9286019280888511156200036957600080fd5b608088015b85811015620003975780518015158114620003895760008081fd5b83529183019183016200036e565b50606086015250810192909252509392505050565b8060005b6051811015620003d35781511515845260209384019390910190600101620003b0565b50505050565b6000610ac08201905060018060a01b0384168252825160208301526020830151805160408401526020810151606084015260408101516080840152606081015190506200042a60a0840182620003ac565b509392505050565b600082198211156200045457634e487b7160e01b600052601160045260246000fd5b500190565b81516001600160a01b031681526020808301519082015260408083015190820152606080830151610aa08301916200049490840182620003ac565b506080830151610a8083015292915050565b600181811c90821680620004bb57607f821691505b60208210811415620004dd57634e487b7160e01b600052602260045260246000fd5b50919050565b61141080620004f36000396000f3fe6080604052600436106100795760003560e01c8063832307571161004b57806383230757146100df578063a0bb1bf6146100f4578063a209ad4e14610107578063ab53f2c61461011a57005b80631e93b0f1146100825780632c10a159146100a6578063552d7b8e146100b95780637eea518c146100cc57005b3661008057005b005b34801561008e57600080fd5b506003545b6040519081526020015b60405180910390f35b6100806100b4366004610fa0565b61013d565b6100806100c7366004610fa0565b6102c3565b6100806100da366004610fa0565b61046b565b3480156100eb57600080fd5b50600154610093565b610080610102366004610fc3565b6105e9565b610080610115366004610fa0565b61079b565b34801561012657600080fd5b5061012f610915565b60405161009d929190610fd6565b61014d60016000541460096109b2565b6101678135158061016057506001548235145b600a6109b2565b60008080556002805461017990611033565b80601f01602080910402602001604051908101604052809291908181526020018280546101a590611033565b80156101f25780601f106101c7576101008083540402835291602001916101f2565b820191906000526020600020905b8154815290600101906020018083116101d557829003601f168201915b505050505080602001905181019061020a91906110f5565b905061021d81608001514310600b6109b2565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161024e929190611197565b60405180910390a16102678160200151341460086109b2565b61026f610dfd565b815181516001600160a01b03909116905260208083015182518201528151336040918201526060840151828401805191909152818501518151909301929092529051439101526102be816109d7565b505050565b6102d360066000541460166109b2565b6102ed813515806102e657506001548235145b60176109b2565b6000808055600280546102ff90611033565b80601f016020809104026020016040519081016040528092919081815260200182805461032b90611033565b80156103785780601f1061034d57610100808354040283529160200191610378565b820191906000526020600020905b81548152906001019060200180831161035b57829003601f168201915b505050505080602001905181019061039091906111cf565b90507f643bb8428ae07277421f7600c8b7dc078704f1cfd6d7aaedbe23c2d5754675d333836040516103c3929190611241565b60405180910390a16103d7341560146109b2565b60408101516103f2906001600160a01b0316331460156109b2565b6103fa610e32565b81516001600160a01b039081168252602080840151818401526040808501519092168284015260608085015190840152600760005543600155905161044191839101611268565b60405160208183030381529060405260029080519060200190610465929190610e6c565b50505050565b61047b600160005414600d6109b2565b6104958135158061048e57506001548235145b600e6109b2565b6000808055600280546104a790611033565b80601f01602080910402602001604051908101604052809291908181526020018280546104d390611033565b80156105205780601f106104f557610100808354040283529160200191610520565b820191906000526020600020905b81548152906001019060200180831161050357829003601f168201915b505050505080602001905181019061053891906110f5565b905061054c8160800151431015600f6109b2565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950338360405161057d929190611197565b60405180910390a16105913415600c6109b2565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156105ce573d6000803e3d6000fd5b50600080805560018190556105e590600290610ef0565b5050565b6105f9600760005414601a6109b2565b6106138135158061060c57506001548235145b601b6109b2565b60008080556002805461062590611033565b80601f016020809104026020016040519081016040528092919081815260200182805461065190611033565b801561069e5780601f106106735761010080835404028352916020019161069e565b820191906000526020600020905b81548152906001019060200180831161068157829003601f168201915b50505050508060200190518101906106b691906111cf565b90507ffb577a37889e466b0f17fab6b050d1f186a486a02c20be591410d13182ad74bb33836040516106e99291906112a1565b60405180910390a16106fd341560186109b2565b6040810151610718906001600160a01b0316331460196109b2565b610720610dfd565b815181516001600160a01b039182169052602080840151835182015260408085015184519316928101929092528151610a20818101909352919085019060519083908390808284376000920191909152505050602080830180519290925260608401518251909101525143604091909101526102be816109d7565b6107ab60056000541460126109b2565b6107c5813515806107be57506001548235145b60136109b2565b6000808055600280546107d790611033565b80601f016020809104026020016040519081016040528092919081815260200182805461080390611033565b80156108505780601f1061082557610100808354040283529160200191610850565b820191906000526020600020905b81548152906001019060200180831161083357829003601f168201915b505050505080602001905181019061086891906112fb565b90507f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc0338360405161089b929190611241565b60405180910390a16108af341560106109b2565b80516108c7906001600160a01b0316331460116109b2565b6108cf610e32565b81516001600160a01b0390811682526020808401518184015260408085015190921682840152848101356060840152600660005543600155905161044191839101611268565b60006060600054600280805461092a90611033565b80601f016020809104026020016040519081016040528092919081815260200182805461095690611033565b80156109a35780601f10610978576101008083540402835291602001916109a3565b820191906000526020600020905b81548152906001019060200180831161098657829003601f168201915b50505050509050915091509091565b816105e55760405163100960cb60e01b81526004810182905260240160405180910390fd5b610a386040805160c0810182526000808252602080830182905282840182905283518085018552828152808201839052606084015283518085018552828152808201839052608084015283518085019094528184528301529060a082015290565b605182602001516020015114610a5957605282602001516020015114610a5c565b60015b610a7157605382602001516020015114610a74565b60015b610a8957605482602001516020015114610a8c565b60015b1580158252610aa15760016020820152610c9f565b604782602001516020015110610ab8576000610ac5565b6009826020015160200151115b15610c8a576020808301518051910151610ae190600a90611376565b60518110610af157610af161138e565b6020020151610b01576000610b2e565b6020808301518051910151610b1890600990611376565b60518110610b2857610b2861138e565b60200201515b610b39576000610b66565b6020808301518051910151610b5090600890611376565b60518110610b6057610b6061138e565b60200201515b610b71576000610b9e565b6020808301518051910151610b8890600a906113a4565b60518110610b9857610b9861138e565b60200201515b610ba9576000610bd6565b6020808301518051910151610bc0906009906113a4565b60518110610bd057610bd061138e565b60200201515b610be1576000610c0e565b6020808301518051910151610bf8906008906113a4565b60518110610c0857610c0861138e565b60200201515b610c19576000610c46565b6020808301518051910151610c3090600190611376565b60518110610c4057610c4061138e565b60200201515b610c51576000610c7e565b6020808301518051910151610c68906001906113a4565b60518110610c7857610c7861138e565b60200201515b15156040820152610c92565b600060408201525b6040810151151560208201525b806020015115610d9357606081018051600290819052905160006020918201819052608084018051919091525101528051610cde578060800151610ce4565b80606001515b60a082018190528251805160209091015191516001600160a01b03909116916108fc91610d1191906113bb565b6040518115909202916000818181858888f19350505050158015610d39573d6000803e3d6000fd5b508160000151604001516001600160a01b03166108fc8360000151602001518360a0015160200151610d6b91906113bb565b6040518115909202916000818181858888f193505050501580156105ce573d6000803e3d6000fd5b6040805160608082018352600080835260208084018281528486018381528851516001600160a01b039081168088528a5185015184528a51890151821683526005909555436001558751938401949094529051958201959095529351169083015290608001610441565b6040805160a081018252600091810182815260608201839052608082019290925290815260208101610e2d610f2d565b905290565b604051806080016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081525090565b828054610e7890611033565b90600052602060002090601f016020900481019282610e9a5760008555610ee0565b82601f10610eb357805160ff1916838001178555610ee0565b82800160010185558215610ee0579182015b82811115610ee0578251825591602001919060010190610ec5565b50610eec929150610f54565b5090565b508054610efc90611033565b6000825580601f10610f0c575050565b601f016020900490600052602060002090810190610f2a9190610f54565b50565b6040518060600160405280610f40610f69565b815260200160008152602001600081525090565b5b80821115610eec5760008155600101610f55565b60405180610a2001604052806051906020820280368337509192915050565b600060408284031215610f9a57600080fd5b50919050565b600060408284031215610fb257600080fd5b610fbc8383610f88565b9392505050565b6000610a408284031215610f9a57600080fd5b82815260006020604081840152835180604085015260005b8181101561100a57858101830151858201606001528201610fee565b8181111561101c576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061104757607f821691505b60208210811415610f9a57634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b60405160a0810167ffffffffffffffff811182821017156110a1576110a1611068565b60405290565b604051610a20810167ffffffffffffffff811182821017156110a1576110a1611068565b80516001600160a01b03811681146110e257600080fd5b919050565b8015158114610f2a57600080fd5b6000610aa0828403121561110857600080fd5b61111061107e565b611119836110cb565b8152602080840151818301526040840151604083015284607f85011261113e57600080fd5b6111466110a7565b80610a8086018781111561115957600080fd5b606087015b8181101561117e578051611171816110e7565b845292840192840161115e565b5060608501919091525160808401525090949350505050565b6001600160a01b0383168152813560208083019190915260608201908301356111bf816110e7565b8015156040840152509392505050565b6000608082840312156111e157600080fd5b6040516080810181811067ffffffffffffffff8211171561120457611204611068565b604052611210836110cb565b815260208301516020820152611228604084016110cb565b6040820152606083015160608201528091505092915050565b6001600160a01b038316815260608101610fbc602083018480358252602090810135910152565b81516001600160a01b03908116825260208084015190830152604080840151909116908201526060918201519181019190915260800190565b6001600160a01b03831681528135602080830191909152610a608201906040830184820160005b60518110156112f05781356112dc816110e7565b1515835291830191908301906001016112c8565b505050509392505050565b60006060828403121561130d57600080fd5b6040516060810181811067ffffffffffffffff8211171561133057611330611068565b60405261133c836110cb565b815260208301516020820152611354604084016110cb565b60408201529392505050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561138957611389611360565b500190565b634e487b7160e01b600052603260045260246000fd5b6000828210156113b6576113b6611360565b500390565b60008160001904831182151516156113d5576113d5611360565b50029056fea2646970667358221220ad87f5d0bb348f2e558100e1a9aa8c42baaaf7f75473a11e19da64824ae3c60c64736f6c634300080c0033`,
  BytecodeLen: 6403,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:102:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:110:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:167:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:122:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:132:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:141:13:after expr stmt semicolon',
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
