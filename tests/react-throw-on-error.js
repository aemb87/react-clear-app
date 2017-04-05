/*
    Fix things so whenever React or Redux display an error,
    it will be recognized by Karma as a failed test.
*/


if (!window.console.oldError) {
    window.console.oldError = window.console.error.bind(window.console);
    window.console.error = function (m) {
        window.console.oldError(m);
        throw new Error(m);
    }
}
