import { Button, ButtonGroup } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import Crop54Icon from '@mui/icons-material/Crop54';
import TextFieldsIcon from '@mui/icons-material/TextFields';

import { actions } from 'state/action-processors';

const createButtons = [
  {
    label: 'create Text symbol',
    icon: TextFieldsIcon,
    onClick: () => {
      actions.symbols.create([{ type: 'TEXT', id: 'text-one' }], 'stage');
    },
  },
  {
    label: 'create Image symbol',
    icon: AddPhotoAlternateIcon,
    onClick: () => {
      actions.symbols.create([{ type: 'IMAGE', id: 'image-one' }], 'stage');
    },
  },
  {
    label: 'create Box symbol',
    icon: Crop54Icon,
    onClick: () => {
      actions.symbols.create([{ type: 'RECT', id: 'rect-one' }], 'stage');
    },
  },
];

export const ButtonsSymbolCreate = () => {
  return (
    <ButtonGroup variant="outlined" aria-label="symbol create bar">
      {createButtons.map((b) => (
        <Button
          key={b.label}
          onClick={b.onClick}
          color="inherit"
          aria-label={b.label}
        >
          <b.icon />
        </Button>
      ))}
    </ButtonGroup>
  );
};
