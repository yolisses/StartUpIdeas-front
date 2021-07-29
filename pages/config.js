import { useEffect, useState } from 'react';
import { api } from '../services/api';

import style from '/styles/ConfigPage.module.css';
import DefaultPageLayout from '../components/DefaultPageLayout';

import Image from 'next/image';
import { useUser } from '../contexts/AuthContext';

export default function ConfigPage() {
	const [changingName, setChangingName] = useState(false);
	const [newName, setNewName] = useState(false);

	const { user, getToken, setUser } = useUser();

	useEffect(() => {
		api.get('/user/' + user.id).then((res) => {
			setUser(res.data);
		});
	});

	const changeName = () => {
		api
			.put(
				'/user',
				{ name: newName },
				{
					headers: { authorization: getToken() },
				}
			)
			.then((res) => {
				setUser(res.data);
				setChangingName(false);
			});
	};

	return (
		<DefaultPageLayout>
			<div className='paper-like'>
				<div className={style.username_config}>
					<Image src='/images/user.svg' alt='user' width={100} height={100} />
					<div className={style.change_name_wrapper}>
						{changingName ? (
							<div>
								<input
									type='text'
									value={newName}
									onChange={(e) => setNewName(e.target.value)}
								/>
								<div className={style.button_spacer}>
									<button onClick={() => setChangingName(false)}>Cancel</button>
									<button onClick={changeName} className='btn-strong'>
										Save
									</button>
								</div>
							</div>
						) : (
							<div>
								<h2>{user && user.name}</h2>
								<button
									onClick={() => {
										setChangingName(true);
										setNewName(user.name);
									}}
									style={{ marginLeft: '10px' }}
								>
									Change name
								</button>
							</div>
						)}
					</div>
				</div>
			</div>
		</DefaultPageLayout>
	);
}
