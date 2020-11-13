import { Selector } from 'testcafe';

fixture('ThemePicker')
  .page('http://localhost:4200');

test('theme selector works and maintain changes on reload', async t => {
  await t
    .click(Selector('#dark'))
    .expect(Selector('body').getStyleProperty('background-color')).eql('rgb(54, 54, 54)');

  await t.eval(() => location.reload());

  await t.expect(Selector('body').getStyleProperty('background-color')).eql('rgb(54, 54, 54)');
});
