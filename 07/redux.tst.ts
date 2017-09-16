import { createStore, reducer } from './redux';

describe('07 Test Redux Store', () => {
    test('Test Store shape', () => {
        const store = createStore(reducer);
        expect(typeof store.dispatch).toBe('function');
        expect(typeof store.getState).toBe('function');
        expect(typeof store.subscribe).toBe('function');
    });
    test('Store getState method', () => {
        const store = createStore(reducer, reducer(null, '@@INIT'));
        expect(store.getState()).toBe(0);
    });
    test('Store mutation works', () => {
        const store = createStore(reducer, reducer(null, '@@INIT'));
        store.dispatch('INCREMENT');
        expect(store.getState()).toBe(1);
    });
    test('Store mutation works', () => {
        const store = createStore(reducer, reducer(null, '@@INIT'));
        store.dispatch('DECREMENT');
        expect(store.getState()).toBe(-1);
    });
    test('Subscriptions work', () => {
        let flag = false;
        const store = createStore(reducer, reducer(null, '@@INIT'));
        store.subscribe(() => flag = true);
        expect(store.getState()).toBe(0);
        expect(flag).toBe(false);
        store.dispatch('INCREMENT');
        expect(store.getState()).toBe(1);
        expect(flag).toBe(true);
    });
    test('Subscriptions do not fire when state is unchanged', () => {
        let flag = false;
        const store = createStore(reducer, reducer(null, '@@INIT'));
        store.subscribe(() => flag = true);
        expect(store.getState()).toBe(0);
        expect(flag).toBe(false);
        store.dispatch('ADD', 0);
        expect(store.getState()).toBe(0);
        expect(flag).toBe(false);
    })
})

describe('Test reducer', () => {
    expect(reducer(1, 'INCREMENT')).toBe(2);
    expect(reducer(10, 'DECREMENT')).toBe(9);
    expect(reducer(12, 'ADD', 5)).toBe(17);
})