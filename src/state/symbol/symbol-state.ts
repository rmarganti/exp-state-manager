import { moleculeFamily } from 'lib/molecule';

export type SymbolTypes = 'TEXT' | 'IMAGE' | 'RECT';

export interface Symbol {
  id: string;
  type: SymbolTypes;
  children?: string[];
}

export const symbolState = moleculeFamily<Symbol>('symbolState');