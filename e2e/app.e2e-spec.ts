import 'testcafe';
import { axeCheck, createReport } from 'axe-testcafe';

fixture(`App a11y test`)
    .page('http://localhost:4200');

test('Automated accessibility testing', async t => {
    const { error, violations } = await axeCheck(t, null, {
      runOnly: ['cat.color']
    });
    await t.expect(violations.length === 0).ok(createReport(violations));
});
