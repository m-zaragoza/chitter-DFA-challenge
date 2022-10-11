import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Register from '../components/userComponents/Register';

describe(`Register tests`, () => {

    beforeEach(() => {
        render(<MemoryRouter><Register /></MemoryRouter>);
    });

    it(`should have a submit button`, () => {
        const button = screen.getByRole(`button`);

        expect(button).toBeInTheDocument();
    });

    it(`should have the expected heading`, () => {
        const heading = screen.getByRole(`heading`);

        expect(heading.textContent).toContain(`Register and`);
    });
});