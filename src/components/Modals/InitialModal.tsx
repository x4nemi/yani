import { Button, DialogTitle, FormControl, FormLabel, Input, Modal, ModalDialog, Stack } from '@mui/joy';
import React from 'react'

interface InitialModalProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const InitialModal = ({ open, setOpen }: InitialModalProps) => {
    return (
        <Modal open={open} onClose={() => setOpen(false)} sx={{ zIndex: 10000 }}>
            <ModalDialog>
                <DialogTitle>¿Cuántos registros?</DialogTitle>
                {/* <DialogContent>Fill in the information of the project.</DialogContent> */}
                <form
                    onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
                        event.preventDefault();
                        setOpen(false);
                    }}
                >
                    <Stack spacing={2}>
                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input autoFocus required />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Description</FormLabel>
                            <Input required />
                        </FormControl>
                        <Button type="submit">Submit</Button>
                    </Stack>
                </form>
            </ModalDialog>
        </Modal>
    )
}
