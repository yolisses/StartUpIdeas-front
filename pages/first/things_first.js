import Head from 'next/head';
import Button from '../../components/Button';

export default function First() {
	return (
		<div>
			<Head>
				<title>Mudei o título</title>
			</Head>
			<h1>First</h1>
			<Button />
		</div>
	);
}
