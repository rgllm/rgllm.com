import { Html, Head, Main, NextScript } from 'next/document'

export default function Document(props) {
	return (
		<Html lang="en">
			<Head>
				<meta content="IE=edge" httpEquiv="X-UA-Compatible" />
				<meta content="#ffffff" name="theme-color" />
				<meta content="#ffffff" name="msapplication-TileColor" />
				<meta content="/static/favicons/browserconfig.xml" name="msapplication-config" />
				<link href="/static/favicons/favicon.ico" rel="shortcut icon" />
				<link href="/static/favicons/manifest.json" rel="manifest" />
				<link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
