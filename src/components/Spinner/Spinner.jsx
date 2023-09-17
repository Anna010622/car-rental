import { ThreeDots } from 'react-loader-spinner';

const Spinner = ({ width = 80, height = 80 }) => {
	return (
		<ThreeDots
			height={height}
			width={width}
			radius="9"
			color="#3470FF"
			ariaLabel="three-dots-loading"
			wrapperStyle={{ justifyContent: 'center' }}
			visible={true}
		/>
	);
};

export default Spinner;
