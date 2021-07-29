import { Head } from 'next/document';

import Document from 'next/document';

import { Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang={this.props.lang || 'en'}>
				<Head>
					<script
						async
						src='https://www.googletagmanager.com/gtag/js?id=G-5M57NEWD3Y'
					/>
					<script
						dangerouslySetInnerHTML={{
							__html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-5M57NEWD3Y', { page_path: window.location.pathname });
`,
						}}
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
