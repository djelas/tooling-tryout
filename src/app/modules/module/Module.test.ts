/// <reference path="../../../../typings/mocha/mocha.d.ts" />
import ModuleClass from 'Module'

describe('Module', () => {
    var subject: ModuleClass;

    beforeEach(function () {
        subject = new ModuleClass();
    });

    describe('#method', () => {
        it('should echo', () => {
            var result: any = subject.method(5);
            if (result !== 5) {
                throw new Error('Expected 5, instead got ' + result);
            }
        });
    });
});
