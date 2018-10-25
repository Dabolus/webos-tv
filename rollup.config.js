import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default {
  input: 'src/webos-tv.ts',
  output: [{
    name: 'webOS',
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
