import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	base: '',
	server: {
		fs: {
			allow: ['.', 'dist']
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				silenceDeprecations: [
					'import',
					'if-function',
					'global-builtin',
					'color-functions'
				]
			}
		}
	},
	build: {
		outDir: 'dist',
		emptyOutDir: true,
		lib: {
			entry: path.resolve(__dirname, 'src/scss/sidebar-custom.scss'),
			formats: ['es'],
		},
		cssMinify: false,
		rollupOptions: {
			output: {
				assetFileNames: 'sidebar-custom.[ext]'
			}
		}
	}
});
