import Head from 'next/head';

import '../styles/globals.css';
import '../styles/button.css';

import { ForceUpdateProvider } from '../contexts/forceUpdate';
import { ModalProvider } from '../contexts/ModalContext';

function MyApp({ Component, pageProps }) {
	return (
		<ForceUpdateProvider>
			<ModalProvider>
				<Head>
					<link
						href='https://fonts.googleapis.com/icon?family=Material+Icons'
						rel='stylesheet'
					/>
				</Head>
				<Component {...pageProps} />
			</ModalProvider>
		</ForceUpdateProvider>
	);
}

export default MyApp;
