import DefaultPageLayout from '../components/DefaultPageLayout';
import { IdeasLoader } from '../components/IdeasLoader';
import TopButtonWrapper from '../components/TopButtonWrapper';

import Head from 'next/head';

export default function index() {
	return (
		<DefaultPageLayout>
			<Head>
				<title>StartUpIdeas</title>
			</Head>
			<TopButtonWrapper />
			<IdeasLoader />
		</DefaultPageLayout>
	);
}
