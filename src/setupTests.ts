import { vi } from 'vitest';
import '@testing-library/react';

// Mock IntersectionObserver
class IntersectionObserverMock {
    observe = vi.fn();
    unobserve = vi.fn();
    disconnect = vi.fn();
}

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);
