import SupportedWorldsJSON from '../supported_worlds.json';

type Chain = 'ethereum' | 'polygon';

interface ISupportedWorlds {
  addresses: {
    land: string;
    estate?: string;
    coin?: string;
  };
  available: {
    map: boolean;
    leaderboard: boolean;
    analytics: boolean;
    NFTBank_estimate: boolean;
  };
  chain: Chain;
  coingecko_id?: string;
  opensea_slug?: string;
  currency?: string;
  description: string;
  discord?: string;
  label: string;
  logo: string;
  table?: {
    label: string;
    value: string;
  }[];
  theme: string;
  twitter?: string;
  value: string;
  website: string;
  whitepaper?: string;
}

export const SupportedWorlds: ISupportedWorlds[] = JSON.parse(
  JSON.stringify(SupportedWorldsJSON),
);
