import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default {
  input: 'src/lgtv-control.ts',
  output: [{
    name: 'LGTVControl',
    file: pkg.browser,
    format: 'umd',
  }, {
    file: pkg.main,
    format: 'cjs',
  }, {
    file: pkg.module,
    format: 'es',
  }],
  plugins: [
    typescript(),
  ],
};
