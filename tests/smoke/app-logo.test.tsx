import { render, screen } from '@testing-library/react'
import React from 'react'

import AppLogo from '@/components/app-logo'

describe('AppLogo', () => {
  it('renders without crashing', () => {
    render(<AppLogo />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})


