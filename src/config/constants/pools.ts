import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'CAKE',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0xd860262df91ffa691c940af658bb1bc7f2cea6c6',
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      321: '0x4e8E7FC3f7d899C69acE09bF8be157BEC1cef91c',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://pancakeswap.finance/',
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    sousId: 45,
    tokenName: 'LINA',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      321: '0x212bb602418C399c29D52C55100fD6bBa12bea05',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://linear.finance/',
    harvest: true,
    tokenPerBlock: '0.983',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    sousId: 41,
    tokenName: 'BDO',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      321: '0x9cB24e9460351bC51d4066BC6AEd1F3809b02B78',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://bdollar.fi/',
    harvest: true,
    tokenPerBlock: '0.075',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    sousId: 40,
    tokenName: 'EGLD',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      321: '0x2dcf4cDFf4Dd954683Fe0a6123077f8a025b66cF',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://elrond.com/',
    harvest: true,
    tokenPerBlock: '0.001215',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
  },
]

export default pools
