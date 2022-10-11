import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Logout from '../components/userComponents/Logout';

describe(`Logout tests`, () => {

    beforeEach(() => {
        render(<MemoryRouter><Logout /></MemoryRouter>);
    });

    it(`should have a submit button`, () => {
        const button = screen.getByRole(`button`);

        expect(button).toBeInTheDocument();
    });

    it(`should have the expected heading`, () => {
        const heading = screen.getByRole(`heading`);

        expect(heading.textContent).toContain(`Are you sure`);
    });
});