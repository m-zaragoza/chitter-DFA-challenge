import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import PostPeep from '../components/peepsComponents/PostPeep';

describe(`Post peep tests`, () => {
    const testUser = {};

    beforeEach(() => {
        render(<MemoryRouter><PostPeep user={testUser} /></MemoryRouter>);
    });

    it(`should have a submit button`, () => {
        const button = screen.getByRole(`button`);

        expect(button).toBeInTheDocument();
    });

    it(`should have the expected heading`, () => {
        const heading = screen.getByRole(`heading`);

        expect(heading.textContent).toContain(`Get peeping`);
    });
});