import { createStore } from './redux';

describe('01 Test Redux Store', () => {
    test('Test Store shape', () => {
        const store = createStore();
        expect(typeof store.dispatch).toBe('function');
        expect(typeof store.getState).toBe('function');
    });
    test('Store getState method', () => {
        const store = createStore(10);
        expect(store.getState()).toBe(10);
    })
})