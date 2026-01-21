import { render, screen } from '@testing-library/react';
import CodePulseLanding from './CodePulseLanding';
import { describe, it, expect } from 'vitest';

describe('CodePulseLanding', () => {
    it('renders the main headline', () => {
        render(<CodePulseLanding />);
        expect(screen.getByText(/نحول الأفكار إلى/i)).toBeDefined();
        expect(screen.getByText(/نبض رقمي مستمر/i)).toBeDefined();
    });

    it('renders the CTA button', () => {
        render(<CodePulseLanding />);
        // Using getAllByText because there might be multiple CTA buttons or similar text
        // Also using a more flexible regex
        const buttons = screen.getAllByText(/ابدأ مشروعك/i);
        expect(buttons.length).toBeGreaterThan(0);
    });

    it('renders service titles', () => {
        render(<CodePulseLanding />);
        expect(screen.getByText('تطبيقات الجوال')).toBeDefined();
        expect(screen.getByText('تطوير الويب')).toBeDefined();
    });
});
