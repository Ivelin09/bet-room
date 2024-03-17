import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from 'next-themes';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ThemeProvider defaultTheme='dark'>
		<NextUIProvider>
			<App />
		</NextUIProvider>
	</ThemeProvider>
);
