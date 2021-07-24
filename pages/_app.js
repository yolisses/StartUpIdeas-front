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
					{/* <link rel='shortcut icon' href='/images/favicon.ico' /> */}
					<link
						rel='apple-touch-icon'
						sizes='180x180'
						href='/images/apple-touch-icon.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='32x32'
						href='/images/favicon-32x32.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='16x16'
						href='/images/favicon-16x16.png'
					/>
					<link rel='manifest' href='/images/site.webmanifest' />
					<link
						rel='mask-icon'
						href='/images/safari-pinned-tab.svg'
						color='#5bbad5'
					/>
					<link rel='shortcut icon' href='/images/favicon.ico' />
					<meta name='msapplication-TileColor' content='#aa3d1e' />
					<meta
						name='msapplication-config'
						content='/images/browserconfig.xml'
					/>
					<meta name='theme-color' content='#ffffff' />
				</Head>
				<Component {...pageProps} />
			</ModalProvider>
		</ForceUpdateProvider>
	);
}

export default MyApp;
