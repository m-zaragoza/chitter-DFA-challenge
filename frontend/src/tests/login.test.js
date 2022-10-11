import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Login from '../components/userComponents/Login';

describe(`Login tests`, () => {

    beforeEach(() => {
        render(<MemoryRouter><Login /></MemoryRouter>);
    });

    it(`should have a submit button`, () => {
        const button = screen.getByRole(`button`);

        expect(button).toBeInTheDocument();
    });

    it(`should have the expected heading`, () => {
        const heading = screen.getByRole(`heading`);

        expect(heading.textContent).toContain(`Good to`);
    });
});
