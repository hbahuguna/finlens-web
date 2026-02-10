import React from 'react';

export const FinancialChart: React.FC = () => {
    return (
        <div className="p-4 border rounded-lg shadow-sm bg-white" data-testid="financial-chart">
            <h3 className="text-lg font-bold mb-2">Market Performance</h3>
            <div className="h-48 bg-gray-100 flex items-end space-x-2 p-2">
                <div className="bg-blue-500 w-8 h-20"></div>
                <div className="bg-blue-500 w-8 h-32"></div>
                <div className="bg-blue-500 w-8 h-24"></div>
                <div className="bg-blue-500 w-8 h-40"></div>
                <div className="bg-blue-500 w-8 h-16"></div>
            </div>
            <p className="mt-2 text-sm text-gray-500 italic">Data updated as of 10:00 AM</p>
        </div>
    );
};
