import Head from 'next/head';

import '../styles/globals.css';
import '../styles/button.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link
					href='https://fonts.googleapis.com/icon?family=Material+Icons'
					rel='stylesheet'
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
