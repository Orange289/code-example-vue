// import { storiesOf } from '@storybook/vue'
// import { withKnobs, text } from '@storybook/addon-knobs'
// import textOac from './TextOac'

// const methods = {
//   log(e) {
//     // eslint-disable-next-line no-console
//     console.log(e)
//   }
// }

// storiesOf('Text-button', module)
//   .addDecorator(withKnobs)
//   .add('TextOac', () => ({
//     components: { textOac },
//     props: {
//       text: {
//         default: text(
//           'text',
//           'Created by&nbsp;professionals. For&nbsp;professionals.'
//         )
//       },
//       open_account_text: {
//         default: text('open_account_text', 'Open Account')
//       }
//     },
//     template: `<textOac :open_account_text="open_account_text" @click.native="log('clicked')">{{ text }}</textOac>`,
//     methods
//   }))
