import { Stack, Typography } from '@mui/joy'
import ModeToggle from './components/ToggleTheme'
import { FieldsSelector } from './components/FieldsSelector'


function App() {

	return (
		<Stack
			direction="column"
			alignItems="center"
			justifyContent="center"
			gap={1}
			sx={{ width: '100%', marginTop: 3 }}
		>
			<ModeToggle />
			<Typography level="h3">👋 Hola </Typography>
			<FieldsSelector />
		</Stack>
	)
}

export default App
