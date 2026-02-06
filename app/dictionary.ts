export interface DictionaryEntry {
    id: string;
    term: string;
    definition: string;
    category: 'Investing' | 'Corporate Finance' | 'Economics' | 'Personal Finance';
}

export const dictionaryData: DictionaryEntry[] = [
    {
        id: '1',
        term: 'Bull Market',
        definition: 'A market in which share prices are rising, encouraging buying.',
        category: 'Investing',
    },
    {
        id: '2',
        term: 'Bear Market',
        definition: 'A market in which prices are falling, encouraging selling.',
        category: 'Investing',
    },
    {
        id: '3',
        term: 'Liquidity',
        definition: 'The availability of liquid assets to a market or company.',
        category: 'Corporate Finance',
    },
    {
        id: '4',
        term: 'Inflation',
        definition: 'A general increase in prices and fall in the purchasing value of money.',
        category: 'Economics',
    },
    {
        id: '5',
        term: 'Arbitrage',
        definition: 'The simultaneous buying and selling of securities, currency, or commodities in different markets or in derivative forms in order to take advantage of differing prices for the same asset.',
        category: 'Investing',
    },
    {
        id: '6',
        term: 'EBITDA',
        definition: 'Earnings Before Interest, Taxes, Depreciation, and Amortization. It is a measure of a company\'s overall financial performance.',
        category: 'Corporate Finance',
    },
    {
        id: '7',
        term: 'Compound Interest',
        definition: 'Interest calculated on the principal and also on the accumulated interest of previous periods.',
        category: 'Personal Finance',
    },
    {
        id: '8',
        term: 'Deficit',
        definition: 'The amount by which something, especially a sum of money, is too small.',
        category: 'Economics',
    }
];
