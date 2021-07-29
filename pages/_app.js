import Head from 'next/head';

import '../styles/globals.css';
import '../styles/button.css';

import { ModalProvider } from '../contexts/ModalContext';

import { AuthContextProvider } from '../contexts/AuthContext';

function MyApp({ Component, pageProps }) {
	return (
		<AuthContextProvider>
			<ModalProvider>
				<Head>
					<link
						href='https://fonts.googleapis.com/icon?family=Material+Icons'
						rel='stylesheet'
					/>
					<link
						rel='apple-touch-icon'
						sizes='180x180'
						href='/images/favicon/apple-touch-icon.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='32x32'
						href='/images/favicon/favicon-32x32.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='16x16'
						href='/images/favicon/favicon-16x16.png'
					/>
					<link rel='manifest' href='/images/favicon/site.webmanifest' />
					<link
						rel='mask-icon'
						href='/images/favicon/safari-pinned-tab.svg'
						color='#5bbad5'
					/>
					<link rel='shortcut icon' href='/images/favicon/favicon.ico' />
					<meta name='msapplication-TileColor' content='#da532c' />
					<meta
						name='msapplication-config'
						content='/images/favicon/browserconfig.xml'
					/>
					<meta name='theme-color' content='#ffffff' />
				</Head>
				<Component {...pageProps} />
			</ModalProvider>
		</AuthContextProvider>
	);
}

export default MyApp;
