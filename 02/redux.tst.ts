import { createStore, reducer } from './redux';

describe('02 Test Redux Store', () => {
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

describe('Test reducer', () => {
    const a = [3,5,5,7].reduce(reducer);
    expect(a).toBe(20);
})