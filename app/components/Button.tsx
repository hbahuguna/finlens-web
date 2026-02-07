'use client';

// Triggering TestSquad final end-to-end verification after interface fix
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    loading = false,
    className = '',
    children,
    ...props
}) => {
    const variantClass = variant === 'primary' ? 'btn-primary' : variant === 'secondary' ? 'btn-secondary' : 'btn-outline';
    const sizeClass = size === 'sm' ? 'px-2 py-1 text-xs' : size === 'md' ? 'px-4 py-2' : 'px-6 py-3 text-lg';

    return (
        <button
            className={`btn ${variantClass} ${sizeClass} ${className} ${loading ? 'opacity-70 pointer-events-none' : ''}`}
            disabled={loading || props.disabled}
            {...props}
        >
            {loading && <span className="mr-2 animate-spin">◌</span>}
            {children}
        </button>
    );
};
