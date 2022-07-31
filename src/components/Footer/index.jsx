import { h } from 'preact';
import Styles from './styles.module.scss';

function Footer() {
	return (
		<footer className={Styles.footer}>
			{new Date().getFullYear()}
		</footer>
	);
}
export default Footer;
