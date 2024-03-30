import { Button, Chip, ChipDelete, FormControl, Grid, Input, Stack, Typography } from "@mui/joy";
import { Balloon } from "@phosphor-icons/react";
import { useEffect, useState } from "react"



export const FieldsSelector = () => {
    const [fields, setfields] = useState<string[]>(
        JSON.parse(localStorage.getItem('fields') || '[]')
    );
    const [field, setField] = useState<string>('');

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (field) {
            setfields([...fields, field]);
            setField('');
        }
    }

    useEffect(() => {
        localStorage.setItem('fields', JSON.stringify(fields));
    }, [fields]);
    return (
        <form onSubmit={onSubmit}>
            <FormControl>
                <Stack
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    gap={1}
                    sx={{ width: '100%' }}
                >
                    <Input
                        endDecorator={<Button type="submit"> <Balloon size={27} /> </Button>}
                        value={field}
                        placeholder="Escribe un campo"
                        sx={{ "--Input-radius": "17px" }}
                        style={{ width: '350px' }}
                        size="lg"
                        onChange={(event) => setField(event.target.value)}

                    />
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        gap={1}
                        columns={10}
                    >
                        {
                            fields.map((field, index) =>
                                <Chip
                                    key={index}
                                    variant="soft"
                                    color="primary"
                                    size="lg"
                                    endDecorator={<ChipDelete onDelete={
                                        () => {
                                            const newFields = [...fields];
                                            newFields.splice(index, 1);
                                            setfields(newFields);
                                        }
                                    } />}
                                >
                                    <Typography level="title-lg" >
                                        { field }
                                    </Typography>
                                </Chip>
                            )
                        }
                    </Grid>
                </Stack>
            </FormControl>
        </form>
    )
}
