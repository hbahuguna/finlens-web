'use client';

import React from 'react';
import { Button } from './Button';

interface ArticleProps {
    title: string;
    content: string;
    id: string;
}

export const Article: React.FC<ArticleProps> = ({ title, content, id }) => {
    const handleReadMore = () => {
        console.log(`Reading article ${id}`);
    };

    return (
        <div className="glass p-6 rounded-xl animate-fade-in mb-8" id={`article-${id}`}>
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="text-foreground/80 mb-6">{content}</p>
            <Button variant="outline" size="sm" onClick={handleReadMore} id={`read-more-${id}`}>
                Read More
            </Button>
        </div>
    );
};

export const ArticleList: React.FC = () => {
    const articles = [
        { id: '1', title: 'Modern Portfolio Theory', content: 'Explore the basics of diversification and risk management.' },
        { id: '2', title: 'Quantitative Easing', content: 'How central banks influence the economy through asset purchases.' },
        { id: '3', title: 'The Rise of ESG', content: 'Understanding environmental, social, and governance factors in investing.' },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map(article => (
                <Article key={article.id} {...article} />
            ))}
        </div>
    );
};
