import { expect } from 'chai';
import ModuleClass from 'Module'

describe('ModuleClass', () => {
    var subject: ModuleClass;

    beforeEach(function () {
        subject = new ModuleClass();
    });

    describe("method", () => {
        it('should echo", () => {
            let result: any = subject.method(5);
            expect(result).to.equal(5);
        });
    });
});
