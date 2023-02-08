import{h as c}from"./numbers.03942671.js";import{M as A,E as f,f as z,a as D}from"./ethers.08671b99.js";import{P as n}from"./PowerBall__factory.a972b225.js";import{c as r}from"./networks.9d63c03e.js";import{B as G}from"./ethers.0cd5324d.js";const k=new A({ethersProvider:f.rpcProvider}),g=n.connect(r.contracts.lottery,f.rpcProvider),_=async()=>n.connect(r.contracts.lottery,(await f.Web3().getProvider()).getSigner());async function q(t){return await g.isGiveawayClaimed(t)}async function F(t){return await g.earnedTurns(t)}async function H(){return(await _()).claimGiveaway()}async function B(t){return(await g.getTicketIds(t)).map(s=>s.toNumber()).sort((s,d)=>d-s)}async function J(t,s,d=[]){var y,x;let o=(await B(t)).filter(e=>!d.includes(e));if(s&&(o=o.splice(0,s)),!o)return[];const N=[{reference:"tickets",abi:n.abi,contractAddress:r.contracts.lottery,calls:o.map(e=>({reference:e.toString(),methodName:"getTicket",methodParameters:[t,e]}))},{reference:"prizes",abi:n.abi,contractAddress:r.contracts.lottery,calls:o.map(e=>({reference:e.toString(),methodName:"getPrize",methodParameters:[t,e]}))}],w=(await k.call(N)).results,b=(y=w.tickets)==null?void 0:y.callsReturnContext;if(!b)return[];const h=(x=w.prizes)==null?void 0:x.callsReturnContext;if(!h)return[];const m=b.map(e=>({id:e.reference,buyDate:c(e.returnValues[0].hex)*1e3,drawingId:c(e.returnValues[1]),isClaimed:e.returnValues[2],numbers:{numbers:e.returnValues[3].map(i=>c(i.hex))}})),P={reference:"earned",abi:n.abi,contractAddress:r.contracts.lottery,calls:h.map(e=>{const i=m.find(u=>e.reference==u.id);return{reference:e.reference,methodName:"getPrizeTokens",methodParameters:[i.drawingId,c(e.returnValues[0].hex)]}})},p=[...new Set(m.map(e=>e.drawingId))],C=[{reference:"drawings",abi:n.abi,contractAddress:r.contracts.lottery,calls:p.map(e=>({reference:e.toString(),methodName:"getDrawing",methodParameters:[e]}))},{reference:"drawingNumbers",abi:n.abi,contractAddress:r.contracts.lottery,calls:p.map(e=>({reference:e.toString(),methodName:"getDrawingNumbers",methodParameters:[e]}))}],R={reference:"token",abi:D.abi,contractAddress:r.contracts.token,calls:[{reference:"decimals",methodName:"decimals",methodParameters:[]}]},l=(await k.call([P,...C,R])).results,V=l.earned.callsReturnContext,v=l.drawings.callsReturnContext,I=l.drawingNumbers.callsReturnContext,S=l.token.callsReturnContext[0].returnValues[0];return m.map(e=>{const i=G.from(V.find(a=>a.reference==e.id).returnValues[0].hex),u=c(v.find(a=>a.reference==e.drawingId.toString()).returnValues[0].hex),T=I.find(a=>a.reference==e.drawingId.toString()).returnValues.map(a=>c(a.hex));return{...e,earned:z(i,S),drawingDate:u*1e3,drawingNumbers:{numbers:T}}})}export{H as c,F as e,J as g,q as i};
