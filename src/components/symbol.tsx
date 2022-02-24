import { Box } from '@mui/system';
import { memo } from 'react';
import shallow from 'zustand/shallow';

import { useStore } from 'state';
import { MoveableContainner } from './moveable-container';

interface SymbolProps {
  id: string;
}

export const Symbol = memo(({ id }: SymbolProps) => {
  const sym = useStore(
    (state) => ({
      background: state.styles[id]?.background,
      border: state.styles[id]?.border,
      children: state.symbols[id]?.children ?? [],
    }),
    shallow
  );

  const { children, ...symbolStyles } = sym;

  return (
    <MoveableContainner id={id}>
      <Box
        sx={{
          position: 'relative',
          top: '0px',
          left: '0px',
          width: '100%',
          height: '100%',
          ...symbolStyles,
        }}
      >
        {children.map((childId) => (
          <Symbol key={childId} id={childId} />
        ))}
      </Box>
    </MoveableContainner>
  );
});