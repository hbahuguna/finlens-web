'use client';

import { useState } from 'react';
import { dictionaryData, DictionaryEntry } from '../dictionary';

export default function FinancialDictionary() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredEntries = dictionaryData.filter((entry) =>
        entry.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.definition.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="glass p-6 rounded-xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-2xl font-bold mb-4">Financial Dictionary</h2>
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Search terms..."
                    className="w-full p-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary outline-none transition-all"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    id="dictionary-search-v2"
                />
            </div>
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                {filteredEntries.length > 0 ? (
                    filteredEntries.map((entry) => (
                        <div key={entry.id} className="p-4 rounded-lg bg-secondary/50 border border-border hover:border-primary/30 transition-colors entry-card">
                            <div className="flex justify-between items-start mb-1">
                                <h3 className="font-bold text-lg text-primary">{entry.term}</h3>
                                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                                    {entry.category}
                                </span>
                            </div>
                            <p className="text-sm text-foreground/80">{entry.definition}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-foreground/50 py-8">No terms found matching "{searchTerm}"</p>
                )}
            </div>

            <style jsx>{`
        .entry-card {
           /* Vanilla CSS styling for the card */
           text-align: left;
        }
        h2 { margin-bottom: 1.5rem; }
        .space-y-4 > * + * { margin-top: 1rem; }
      `}</style>
        </div>
    );
}
