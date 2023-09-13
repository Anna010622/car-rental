export const customSelectStyles = {
	control: (baseStyles, state) => ({
		...baseStyles,
		height: '48px',
		borderRadius: '14px',
		paddingLeft: '18px',
		backgroundColor: '#F7F7FB',
		cursor: 'pointer',
		border: state.isSelected ? 'none' : 'none',
		boxShadow: 'none',
	}),
	indicatorSeparator: baseStyles => ({
		...baseStyles,
		display: 'none',
	}),
	dropdownIndicator: (baseStyles, state) => ({
		...baseStyles,
		color: '#121417',
		transform: state.selectProps.menuIsOpen ? 'rotateX(180deg)' : 'rotate(0)',
		transition: '400ms ease-in-out',
		paddingRight: '18px',
	}),
	valueContainer: baseStyles => ({
		...baseStyles,
		padding: 0,
	}),
	placeholder: baseStyles => ({
		...baseStyles,
		color: '#121417',
		fontSize: '18px',
		fontWeight: 500,
		lineHeight: 1.11,
	}),
	singleValue: baseStyles => ({
		...baseStyles,
		color: '#121417',
		fontSize: '18px',
		fontWeight: 500,
		lineHeight: 1.11,
	}),
	input: baseStyles => ({
		...baseStyles,
		padding: 0,
		color: '#121417',
		fontSize: '18px',
		fontWeight: 500,
		lineHeight: 1.11,
	}),
	menu: (baseStyles, state) => ({
		...baseStyles,
		marginTop: '4px',
		borderRadius: '14px',
		border: '1px solid rgba(18, 20, 23, 0.05)',
		padding: '14px 8px 14px 18px',
		backgroundColor: '#FFFFFF',
		boxShadow: '0px 4px 36px 0px rgba(0, 0, 0, 0.02)',
		transform: state.selectProps.menuIsOpen
			? 'translateY(0)'
			: 'translateY(-100%)',
		opacity: state.selectProps.menuIsOpen ? 1 : 0,
		transition: ' transform 400ms ease-in-out, opacity 400ms ease-in-out',
		animation: 'dropdown 400ms ease-in-out',
		'@keyframes dropdown': {
			'0%': {
				opacity: '0',
				transform: 'translateY(-10%)',
			},
			'100%': {
				opacity: '1',
				transform: 'translateY(0)',
			},
		},
	}),
	menuList: baseStyles => ({
		...baseStyles,
		maxHeight: '272px',
		paddingTop: 0,
		paddingBottom: 0,

		'&::-webkit-scrollbar': {
			width: '8px',
		},
		'&::-webkit-scrollbar-thumb': {
			backgroundColor: 'rgba(18, 20, 23, 0.05)',
			borderRadius: '10px',
		},
	}),
	option: (baseStyles, state) => ({
		...baseStyles,
		padding: 0,
		color: state.isSelected ? '#121417' : 'rgba(18, 20, 23, 0.20)',
		fontSize: '16px',
		fontWeight: 500,
		lineHeight: 1.25,
		backgroundColor: 'transparent',
		cursor: 'pointer',
		transition: 'color 400ms ease-in-out',

		'&:active': {
			backgroundColor: 'transparent',
		},
		'&:hover': {
			color: '#121417',
		},
		'&:not(:last-child)': {
			marginBottom: '8px',
		},
	}),
};

export const priceSelectStyles = {
	...customSelectStyles,
	menuList: baseStyles => ({
		...baseStyles,
		maxHeight: '188px',
		paddingTop: 0,
		paddingBottom: 0,

		'&::-webkit-scrollbar': {
			width: '8px',
		},
		'&::-webkit-scrollbar-thumb': {
			backgroundColor: 'rgba(18, 20, 23, 0.05)',
			borderRadius: '10px',
		},
	}),
};
