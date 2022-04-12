const tester = {

    fail: function(msg) {
        throw new Error('fail(): ' + msg);
    },

    assert: function(value, msg) {
        if (!value) {
            throw new Error('assert(): ' + msg);
        }
    },

    equal: function(expected, actual) {
        if (expected !== actual) {
            throw new Error('assertEquals() "' + expected + '" not equals "' + actual + '"');
        }
    }
};

export default tester;
