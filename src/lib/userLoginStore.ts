import { Writable, writable } from 'svelte/store';

export const userLoginStore: Writable<String | undefined> = writable(undefined);