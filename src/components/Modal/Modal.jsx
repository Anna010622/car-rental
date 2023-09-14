import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { CgClose } from 'react-icons/cg';
import styles from './modal.module.scss';

const modalRoot = document.getElementById('modal-root');

const Modal = ({ children, close }) => {
	const handleClose = ({ target, currentTarget, code }) => {
		if (target === currentTarget || code === 'Escape') {
			close();
		}
	};

	useEffect(() => {
		document.body.addEventListener('keydown', handleClose);
		document.body.classList.add('noScroll');

		return () => {
			document.body.removeEventListener('keydown', handleClose);
			document.body.classList.remove('noScroll');
		};
	});

	return createPortal(
		<div className={styles.overlay} onClick={handleClose}>
			<div className={styles.modal}>
				<button className={styles.btnClose} onClick={close}>
					<CgClose className={styles.iconClose} />
				</button>
				{children}
			</div>
		</div>,
		modalRoot
	);
};

export default Modal;
