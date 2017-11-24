import { module, test } from 'qunit';
import createREGL from 'regl';

module('regl-shim');

test('can import shim', function(assert) {
  let ctor = createREGL;
  let inst = createREGL();

  assert.equal(typeof ctor, 'function');
  assert.equal(typeof inst, 'function');
  assert.ok(inst.context);
});
