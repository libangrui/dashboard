import { waitForReact, ReactSelector } from 'testcafe-react-selectors';
import setup from './setup';
import { normalRole } from './role';

const page = setup.getPageUrl('dashboard/clusters');

fixture`dashboard/clusters tests`.page(page).beforeEach(async t => {
  await waitForReact();
  await t.useRole(normalRole).navigateTo(page);
});

test(`basic render`, async t => {
  await t.expect(ReactSelector('Table').count).eql(1);
});
