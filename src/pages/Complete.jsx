import React from 'react';
import PeperList from "../components/PaperList";

export default function Complete() {
	return (
		<div>
			<PeperList category='승인' state='승인' adminData={false}/>
		</div>
	);
}
