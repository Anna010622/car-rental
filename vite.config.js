import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
	plugins: [react()],
	base: '/car-rental',
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@import "./src/styles/_shared.scss";',
			},
		},
	},
});
