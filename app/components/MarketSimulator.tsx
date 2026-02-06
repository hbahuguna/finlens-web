'use client';

import { useState, useEffect } from 'react';

interface Stock {
    symbol: string;
    name: string;
    price: number;
    change: number;
}

const initialStocks: Stock[] = [
    { symbol: 'AAPL', name: 'Apple Inc.', price: 185.92, change: 1.2 },
    { symbol: 'MSFT', name: 'Microsoft Corp.', price: 402.12, change: -0.5 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 142.56, change: 0.8 },
    { symbol: 'TSLA', name: 'Tesla Inc.', price: 191.45, change: -2.3 },
    { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 168.11, change: 1.5 },
];

export default function MarketSimulator() {
    const [stocks, setStocks] = useState<Stock[]>(initialStocks);

    useEffect(() => {
        const interval = setInterval(() => {
            setStocks((prevStocks) =>
                prevStocks.map((stock) => {
                    const volatility = 0.002;
                    const changePercent = (Math.random() - 0.5) * volatility;
                    const newPrice = stock.price * (1 + changePercent);
                    return {
                        ...stock,
                        price: Number(newPrice.toFixed(2)),
                        change: Number((changePercent * 100).toFixed(2)),
                    };
                })
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="glass p-6 rounded-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl font-bold mb-4">Market Simulator</h2>
            <div className="space-y-3">
                {stocks.map((stock) => (
                    <div key={stock.symbol} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 border border-border/50">
                        <div>
                            <div className="font-bold">{stock.symbol}</div>
                            <div className="text-xs text-foreground/60">{stock.name}</div>
                        </div>
                        <div className="text-right">
                            <div className="font-mono font-bold">${stock.price.toLocaleString()}</div>
                            <div className={`text-xs font-medium ${stock.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                {stock.change >= 0 ? '▲' : '▼'} {Math.abs(stock.change)}%
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/10">
                <p className="text-xs text-center text-foreground/70 italic">
                    Prices update automatically every 3 seconds to simulate live market data.
                </p>
            </div>
        </div>
    );
}
