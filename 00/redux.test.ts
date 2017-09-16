import { createStore } from './redux';

describe('00 Test Redux Store', () => {
    test('Test Store shape', () => {
        const store = createStore();
        expect(typeof store.dispatch).toBe('function');
        expect(typeof store.getState).toBe('function');
    });
});