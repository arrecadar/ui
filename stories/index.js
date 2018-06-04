import React from 'react'
import { storiesOf } from '@storybook/react'

import Component from '../src'

storiesOf('Component', module)
  .add('with text', () => <Component>Welcome to creator</Component>)
