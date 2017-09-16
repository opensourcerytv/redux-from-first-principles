import { createStore, reducer } from './redux';

describe('03 Test Redux Store', () => {
    test('Test Store shape', () => {
        const store = createStore(reducer);
        expect(typeof store.dispatch).toBe('function');
        expect(typeof store.getState).toBe('function');
    });
    test('Store getState method', () => {
        const store = createStore(reducer, 10);
        expect(store.getState()).toBe(10);
    })
    test('Store mutation works', () => {
        const store = createStore(reducer, 10);
        store.dispatch(2);
        expect(store.getState()).toBe(12);
    })
})

describe('Test reducer', () => {
    const a = [3,5,5,7].reduce(reducer);
    expect(a).toBe(20);
})