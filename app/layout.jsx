import Nav from '@components/Nav';
import Provider from '@components/Provider';
import '@styles/globals.css';

export const metadata = {
	title: "Promptopia",
	description: "Discover & Share AI Prompts",
}

const RootLayout = ({ children }) => {
	return (
		<html lang="en">
			<title>{metadata.title}</title>
			<meta name="description" content={metadata.description}></meta>
			<link rel="icon" type="image/x-icon" href="/assets/images/logo.svg"></link>
			<body>
				<Provider>
					<div className="main">
						<div className="gradient" />
					</div>

					<main className="app">
						<Nav />
						{children}
					</main>
				</Provider>
			</body>
		</html>
	)
}

export default RootLayout