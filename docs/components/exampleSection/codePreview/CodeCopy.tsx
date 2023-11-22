import { useState, useCallback } from 'react';
import IconButton from '@heathmont/moon-core-tw/lib/es/iconButton/IconButton';
import Snackbar from '@heathmont/moon-core-tw/lib/es/snackbar/Snackbar';
import { FilesCopy, GenericCheckAlternative } from '@heathmont/moon-icons-tw';

const CodeCopy = ({ code }: { code: string }) => {
  const [snackbar, setSnackbar] = useState('');

  const openSnackbarHandler = useCallback(
    (type: string) => {
      if (snackbar) {
        setSnackbar('');
        setTimeout(() => {
          setSnackbar(type);
        }, 400);
      } else {
        setSnackbar(type);
      }
    },
    [snackbar]
  );

  const copyCode = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(code ? code : '');
      openSnackbarHandler('top-right');
    }
  };
  return (
    <div className='bg-green-300'>
      <span className="absolute top-2 right-2 cursor-pointer z-1">
        <IconButton
          onClick={copyCode}
          variant="ghost"
          icon={<FilesCopy className="text-moon-24 text-bulma stroke-1" />}
        />
      </span>
      <Snackbar
        isOpen={snackbar === 'top-right'}
        onOpenChange={setSnackbar}
        position="top-right"
      >
        <Snackbar.Message className="flex gap-2">
          <GenericCheckAlternative className="text-moon-24 text-roshi stroke-2" />
          Copied
        </Snackbar.Message>
      </Snackbar>
    </div>
  );
};

export default CodeCopy;
