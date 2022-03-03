import { Processor } from '../types';

export type GenericDispatch<T> = (a: T) => T;

export interface GenericAction<T extends string = string, K = unknown> {
  type: T;
  payload: K;
}

export interface MakeAction<T, K> {
  type: T;
  processor: Processor<K>;
}

/**
 * Create typed action to combine with reducers
 */
export const makeAction = <T, K>({ type, processor }: MakeAction<T, K>) => {
  return {
    type,
    action: (payload: K) => ({ type, payload }),
    processor,
    actionDispatch:
      <J>(dispatch: GenericDispatch<J>) =>
      (payload: K) =>
        // @ts-ignore generic dispatch passed down (which unknown at this point)
        dispatch({ type, payload }),
  };
};