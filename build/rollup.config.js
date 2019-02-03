// rollup.config.js
import vue from 'rollup-plugin-vue'
import buble from 'rollup-plugin-buble'
import replace from 'rollup-plugin-replace'
import uglify from 'rollup-plugin-uglify-es'
import minimist from 'minimist'
import resolve from 'rollup-plugin-node-resolve'

const argv = minimist(process.argv.slice(2))

const config = {
	input: 'src/entry.js',
	output: {
		name: 'AlosUic',
		exports: 'named'
	},
	plugins: [
		resolve(),
		replace({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		vue({
			css: true,
			compileTemplate: true,
			template: {
				isProduction: true
			}
		}),
		buble()
	]
}

// Only minify browser (iife) version
if (argv.format === 'iife') {
	config.plugins.push(uglify())
}

export default config
