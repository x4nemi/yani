import * as React from 'react';
import Button from '@mui/joy/Button';
import { ShootingStar } from '@phosphor-icons/react';
import { Typography } from '@mui/joy';
import { InitialModal } from './Modals/InitialModal';



export default function Run() {
    const [open, setOpen] = React.useState<boolean>(false);
    const [isMounted, setIsMounted] = React.useState(false);

    const fields = localStorage.getItem('fields');
    console.log('fields', fields);
    
    React.useEffect(() => {

        if(fields) {
            console.log('fields', fields);
            
            fields?.length > 2 ?  setIsMounted(true) : setIsMounted(false);
        } else {
            setIsMounted(false);
        }
    }, [fields]);
    return (
        <React.Fragment>
            <Button
                disabled={!isMounted}
                variant="outlined"
                sx={{ '--Button-radius': '17px', mt:3 }}
                color="success"
                endDecorator={<ShootingStar size={24} />}
                onClick={() => setOpen(true)}
                size='lg'
            >
                <Typography level="h4">Empezar</Typography>
            </Button>
            <InitialModal open={open} setOpen={setOpen} />
        </React.Fragment>
    
    );
}
