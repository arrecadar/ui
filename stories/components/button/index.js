import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from '../../../src/components/Button'

storiesOf('Button', module)
  .add('default', () => (
    <div style={{
        padding: 15,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Button onClick={action('clicked')}>default</Button>
      <Button
        onClick={action('clicked')}
        fill="outline"
      >
        outline
      </Button>

      <Button
        onClick={action('clicked')}
        fill="clean"
      >
        clean
      </Button>

      <Button
        onClick={action('clicked')}
        disabled
      >
        disabled
      </Button>
    </div>
  ))
