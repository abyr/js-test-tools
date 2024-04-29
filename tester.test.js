import { fileURLToPath } from 'url';
import { group, test } from './test-runner.js';
import tester from './tester.js';

const filePath = fileURLToPath(import.meta.url);

export default group(`${filePath}: self test`, () => {
    test('assert', () => {
        tester.assert(1);
        tester.assert(1 == '1');
        tester.assert(true);
        tester.assert(!false);

        tester.assert(1, 'One must be asserted');

        const assertErrorText = 'Null is not asserted';
        try {
            tester.assert(null, assertErrorText);
        } catch (err) {
            tester.equal(err.message, assertErrorText);
        }

        const equalErrorText = 'Values are not equal';
        try {
            tester.equal('123', '234', equalErrorText);
        } catch (err) {
            tester.equal(err.message, equalErrorText);
        }
    });
    test('equal', () => {        
        tester.equal('1', '1');
        tester.equal(true, !!1);
        tester.equal(1, Number('1'));
    });
});
