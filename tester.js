const tester = {

    fail: function(msg = null) {
        if (msg) {
            throw new Error('fail(): ' + msg);
        } else {
            throw new Error('fail(): error');
        }
    },

    assert: function(value, msg = null) {
        if (value) {
            return;
        } 

        if (msg) {
            throw new Error(msg);
        } else {
            throw new Error('assert(): assert error');
        }
    },

    equal: function(expected, actual, msg = null) {
        const isEqual = expected === actual;

        if (isEqual) {
            return;
        }

        if (msg) {
            throw new Error(msg);
        } else {
            throw new Error('assertEquals() "' + expected + '" not equals "' + actual + '"');
        }
    }
};

export default tester;
