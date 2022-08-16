import {render, screen} from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
    it('renders a correct title', () => {
        render(<Home/>)
        const heading = screen.getByText('Home');
        expect(heading).toBeTruthy();
    })
})
