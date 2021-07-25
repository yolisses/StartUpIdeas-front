import { Head } from 'next/document';

import Document from 'next/document';

import { Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang={this.props.lang || 'en'}>
				<Head>
					<script
						dangerouslySetInnerHTML={{
							__html: `
                            <!-- Global site tag (gtag.js) - Google Analytics -->
                            <script async src="https://www.googletagmanager.com/gtag/js?id=G-5M57NEWD3Y"></script>
                            <script>
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());

                            gtag('config', 'G-5M57NEWD3Y');
                            </script>
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
