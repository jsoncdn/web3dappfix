const featureItems = [
  // Primary row
  'General Issues','Staking','Fix Bugs','Glitches','Migration','Claim Rewards','Withdrawal Management',
  // Secondary
  'IDO','Blockchain Recovery','Smart Contract Audits and Debugging','Token Deployment and Correction','DeFi Protocol Optimization',
  'Airdrops','Token Bridge Solutions','NFT (Non-Fungible Token) Solutions','DISCOUNT BUY AND SELL','KYC Verification',
  'APR ACTIVATION','Token Stake and Token Unstake','Connect to DAPP','MIGRATION','TRANSACTION DELAY',
  'UNABLE TO BUY COIN/TOKEN','TOKEN BRIDGE','Swap Functionality Enhancement','Buy and Sell Liquidity Issues Resolution',
  'Deposit and Withdrawal Management','Slippage Mitigation','Rectification','High Gas Fees','Claim Reward','Validation',
  'Slippage Error','Transaction Error','Locked Account','Trading Wallet Issues','Unable To Buy Coins/Tokens','Multi-Chain Support',
  'Token Burn','Token Minting','DAO Governance Setup','Crypto Tax Reports','Wallet Connection Issues','Gas Fee Estimator',
  'dApp Integration Support','Whitelist Management','Token Vesting Schedules','Private Sale Access','Public Sale Configuration',
  'LP Token Management','Smart Contract Upgrades','Bridge Malfunction','NFT Minting Issues','Gasless Transactions',
  'DEX Integration','CEX Listing Support','Oracle Integration','Multi-Sig Wallet Setup','Cross-Chain Transactions',
  'Blockchain Sync Errors','Airdrop Distribution Errors','Wallet Draining Protection','Cold Wallet Setup','Gas Optimization for Contracts',
  'Flash Loan Protection','Anti-Bot Measures','Revoke Token Access','Other Issues Not Listed'
];

function createPill(label){
  const btn = document.createElement('button');
  btn.className = 'pill';
  btn.type = 'button';
  btn.innerHTML = `<span class="label">${label}</span><span class="chev">›</span>`;
  btn.addEventListener('click',()=>{
    alert(label);
  });
  return btn;
}

function populatePills(){
  const grid = document.getElementById('pillGrid');
  featureItems.forEach(item=> grid.appendChild(createPill(item)));
}

function setupScrollLinks(){
  document.querySelectorAll('[data-scroll]').forEach(el=>{
    el.addEventListener('click', (e)=>{
      const target = el.getAttribute('data-scroll') || el.getAttribute('href');
      if (!target || !target.startsWith('#')) return;
      e.preventDefault();
      document.querySelector(target)?.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });
}

function setupMenu(){
  const menuBtn = document.getElementById('menuBtn');
  if (!menuBtn) return;
  menuBtn.addEventListener('click', ()=>{
    alert('Menu');
  });
}

window.addEventListener('DOMContentLoaded', ()=>{
  populatePills();
  setupScrollLinks();
  setupMenu();
});


