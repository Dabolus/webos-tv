import typescript from 'rollup-plugin-typescript2';
import nodeGlobals from 'rollup-plugin-node-globals';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';

const input = 'src/webos-tv.ts';

const browserConfig = {
  input,
  output: [{
    name: 'webOS',
    file: pkg.browser,
    format: 'iife',
    globals: {
      ws: 'WebSocket',
      url: 'window',
    },
  }],
  plugins: [
    typescript(),
    nodeGlobals({
      process: false,
      buffer: false,
      dirname: false,
      filename: false,
    }),
    commonjs(),
  ],
};

const nodeConfig = {
  input,
  output: [{
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

export default [browserConfig, nodeConfig];
