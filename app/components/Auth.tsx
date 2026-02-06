'use client';

import React, { useState } from 'react';
import { Button } from './Button';

export const AuthForm: React.FC = () => {
    const [mode, setMode] = useState<'login' | 'signup'>('login');

    return (
        <div className="glass p-8 rounded-2xl max-w-md mx-auto animate-fade-in" id="auth-container">
            <h2 className="text-2xl font-bold mb-6 text-center">
                {mode === 'login' ? 'Welcome Back' : 'Join FinLens'}
            </h2>
            <div className="space-y-4 mb-8">
                <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input type="email" placeholder="name@example.com" className="w-full p-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary outline-none" />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <input type="password" placeholder="••••••••" className="w-full p-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary outline-none" />
                </div>
            </div>
            <Button className="w-full mb-4" id="auth-submit">
                {mode === 'login' ? 'Sign In' : 'Create Account'}
            </Button>
            <p className="text-center text-sm text-foreground/60">
                {mode === 'login' ? "Don't have an account? " : "Already have an account? "}
                <button
                    onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
                    className="text-primary font-bold hover:underline"
                    id="auth-toggle"
                >
                    {mode === 'login' ? 'Sign Up' : 'Log In'}
                </button>
            </p>
        </div>
    );
};
