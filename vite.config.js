import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
	base: '/car-rental',
	plugins: [react()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@import "./src/styles/_shared.scss";',
			},
		},
	},
});
