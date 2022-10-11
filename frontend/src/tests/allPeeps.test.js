import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AllPeeps from '../components/peepsComponents/AllPeeps';
import axiosMock from 'axios';

jest.mock('../components/peepsComponents/PeepCard', () => () => {
    return <span data-testid="peepCard">Peep card for testing</span>
});

const testPeeps1 = [{ id: 1 }, { id: 2 }, { id: 3 }];
const testPeeps2 = [];
const testError = { message: `I'm a test error message` };

// Test suits failing- submitted so I can try to understand what I'm doing wrong

// Without async call
xdescribe(`All peeps test`, () => {
    test(`It should render the right amount of PeepCards`, () => {

        render(<MemoryRouter><AllPeeps peepsData={{ testPeeps1, testError }} /></MemoryRouter>);

        const numOfCards = screen.getAllByTestId(`peepCard`).length;

        expect(numOfCards).toBe(testPeeps.length);
    });
});

// With async call

xdescribe(`All peeps test`, () => {
    test(`It should render the right amount of PeepCards`, async () => {

        axiosMock.get.mockResolvedValueOnce({ testPeeps1 });
        render(<MemoryRouter><AllPeeps peepsData={{ testPeeps1, testError }} /></MemoryRouter>);

        const renderedCards = await waitFor(() => screen.getAllByTestId(`peepCard`));

        expect(renderedCards.length).toBe(testPeeps1.length);
        expect(axiosMock.get).toHaveBeenCalledTimes(1);
    });

    test(`It should render an error message when there are no peeps to display`, async () => {

        axiosMock.get.mockResolvedValueOnce({ testPeeps2 });
        render(<MemoryRouter><AllPeeps peepsData={{ testPeeps2, testError }} /></MemoryRouter>);

        const errorMessage = await waitFor(() => screen.getByText(`Oops! No peeps to display`));

        expect(errorMessage.textContent).toContain(`Oops!`);
        expect(axiosMock.get).toHaveBeenCalledTimes(1);

    })
});



