import theme from '@/ConfigTheme';
import { GlobalStyles } from '@/GlobalStyles';
import ConfigRoutes from '@/routes';
import 'antd/dist/antd.css';
import { ThemeProvider } from 'styled-components';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles></GlobalStyles>
			<ConfigRoutes />
		</ThemeProvider>
	);
}

export default App;
