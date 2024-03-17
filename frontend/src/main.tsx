import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ThemeProvider } from 'next-themes';
import { NextUIProvider } from '@nextui-org/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ThemeProvider defaultTheme='dark'>
		<NextUIProvider>
			<App />
		</NextUIProvider>
	</ThemeProvider>
);
