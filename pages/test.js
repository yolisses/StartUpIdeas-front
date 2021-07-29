import { api } from '../services/api';
import IdeasLoader from '../components/IdeasLoader';

export default function index(props) {
	return (
		<div>
			<IdeasLoader data={props.data} maxIndex={props.maxIndex} />
		</div>
	);
}

export const getStaticProps = async () => {
	const res = await api.get('/idea');
	const maxIndex = await api.get('/ideas_total_count');

	return {
		props: {
			data: res.data,
			maxIndex: maxIndex.data.count,
		},
		revalidate: 1,
	};
};
