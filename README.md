# parcel-plugin-glsl

Import `.glsl` files as strings with [parcel](https://github.com/parcel-bundler/parcel). The shader
contents are available as the default export of the file.

This expand's on @seep's version by adding support for other file types including 
* .vert
* .frag
* .vs
* .fs

This also includes [glslify](https://github.com/glslify/glslify) support. You'll have to make sure to include that in your package.json as well. 

#### Example

```js
import { ShaderMaterial } from 'three';
import vertexShader from './vert-shader.glsl';
import fragmentShader from './frag-shader.glsl';

export function CustomShaderMaterial() {
  
  return new ShaderMaterial({
    uniforms: { ... },
    vertexShader,
    fragmentShader,
  });
  
}
```

