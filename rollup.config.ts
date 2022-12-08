import replace from '@rollup/plugin-replace';
import virtual from '@rollup/plugin-virtual';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import externals from 'rollup-plugin-node-externals';
import nodeGlobals from 'rollup-plugin-node-globals';
import pkg from './package.json' assert { type: 'json' };

const input = 'src/webos-tv.ts';

const browserConfig = {
  input,
  output: [
    {
      name: 'webOS',
      file: pkg.browser,
      format: 'iife',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  plugins: [
    replace({
      preventAssignment: true,
      './readfile-node': './readfile-browser',
    }),
    virtual({
      ws: 'export default WebSocket;',
      undici: 'export const fetch = window.fetch;',
      'node:url': 'export const URL = window.URL;',
      './wol': `
        export const wake = () => {
          throw new Error("Wake on LAN is not supported on browsers");
        };
      `,
    }),
    externals(),
    typescript({
      tsconfig: './tsconfig.json',
      // Typings will be generated by the Node build
      declaration: false,
      declarationDir: undefined,
    }),
    commonjs(),
    nodeGlobals({
      process: false,
      buffer: false,
      dirname: false,
      filename: false,
    }),
  ],
};

const nodeConfig = {
  input,
  output: {
    file: pkg.main,
    format: 'es',
  },
  plugins: [
    externals(),
    typescript({ tsconfig: './tsconfig.json', noEmitOnError: true }),
    commonjs(),
    nodeResolve(),
  ],
};

export default [browserConfig, nodeConfig];
