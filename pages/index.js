import DefaultPageLayout from '../components/DefaultPageLayout';
import { IdeasLoader } from '../components/IdeasLoader';
import TopButtonWrapper from '../components/TopButtonWrapper';

export default function index() {
	return (
		<DefaultPageLayout>
			<TopButtonWrapper />
			<IdeasLoader />
		</DefaultPageLayout>
	);
}
