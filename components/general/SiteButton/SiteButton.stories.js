import { action } from '@storybook/addon-actions'
import sButton, { dataStyleTypes } from './SiteButton'

const defaultCode = (buttonAttr) => `
<template>
  <SiteButton${' ' + buttonAttr || ''}>Open Account</SiteButton$>
</template>

<script>
  import SiteButton from '~/components/general/SiteButton/SiteButton.vue'

  export default {
    components: {
      SiteButton
    }
  }
</script>
`

export default {
  title: 'Components/Button',
  component: sButton,
  argTypes: {
    dataStyleType: {
      name: 'style type',
      control: { type: 'select', options: dataStyleTypes },
      defaultValue: ''
    },
    disabled: {
      name: 'Disabled',
      control: { type: 'boolean' }
    },
    type: {
      name: 'type',
      control: { type: 'select', options: ['', 'submit'] },
      defaultValue: ''
    },
    text: {
      name: 'text',
      control: { type: 'text' },
      defaultValue: 'Open Account'
    }
  },
  parameters: {
    backgrounds: {
      default: 'Grey Dark'
    }
  }
}

const Template = (args) => ({
  components: { sButton },
  props: Object.keys(args),
  template: `<sButton v-bind="$props" @click.prevent.native="actionClick">{{ text }}</sButton>`,
  methods: {
    actionClick(e) {
      action('clicked')()
      console.log(e)
    }
  }
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: {
      code: defaultCode()
    }
  }
}

export const Submit = Template.bind({})
Submit.argTypes = {
  type: {
    defaultValue: 'submit'
  }
}
Submit.parameters = {
  docs: {
    source: {
      code: defaultCode('type="submit"')
    }
  }
}

export const Link = Template.bind({})
Link.argTypes = {
  type: { control: { disable: true }, table: { disable: true } },
  disabled: { control: { disable: true }, table: { disable: true } },
  href: {
    name: 'link',
    control: { type: 'text' },
    defaultValue: '#'
  }
}
Link.parameters = {
  docs: {
    source: {
      code: defaultCode('href="#"')
    }
  }
}

export const greenWT = Template.bind({})
greenWT.args = {
  dataStyleType: 'greenwt'
}
export const FullGreen = Template.bind({})
FullGreen.args = {
  dataStyleType: 'fgreen'
}
export const White = Template.bind({})
White.args = {
  dataStyleType: 'white'
}

export const FullWhite = Template.bind({})
FullWhite.args = {
  dataStyleType: 'fwhite'
}

export const FullWhiteWithShadow = Template.bind({})
FullWhiteWithShadow.args = {
  dataStyleType: 'sfwhite'
}

export const OnlyArrow = Template.bind({})
OnlyArrow.args = {
  dataOnlyArrow: true
}
OnlyArrow.parameters = {
  docs: {
    source: {
      code: defaultCode('dataOnlyArrow')
    }
  }
}

export const WithArrow = Template.bind({})
WithArrow.args = {
  dataWithArrow: true
}
WithArrow.parameters = {
  docs: {
    source: {
      code: defaultCode('WithArrow')
    }
  }
}
