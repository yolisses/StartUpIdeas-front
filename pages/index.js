import { IdeasLoader } from '../components/IdeasLoader';
import { TopButtonWrapper } from '../components/TopButtonWrapper';
import { ForceUpdateProvider } from '../contexts/forceUpdate';
import { ModalProvider } from '../contexts/ModalContext';

export default function index() {
	return (
		<ForceUpdateProvider>
			<ModalProvider>
				<div className='max-width'>
					<TopButtonWrapper />
					<IdeasLoader />
				</div>
			</ModalProvider>
		</ForceUpdateProvider>
	);
}
