import { render, screen } from '@testing-library/react';
import PeepCard from '../components/peepsComponents/PeepCard';

describe(`Peep card tests`, () => {

    const mockPeep = {
        id: 1,
        peeperName: `Bob`,
        peeperLastName: `Smith`,
        userName: `theTester`,
        peepPosted: `2019-05-04T15:45:00.000Z`,
        peepBody: `I'm a test peep by Bob the tester`
    };

    beforeEach(() => {
        render(<PeepCard peepProps={mockPeep} />);
    });

    it(`should render the peep content`, () => {
        const peepContent = screen.getByText(`I'm a test peep by Bob the tester`);

        expect(peepContent).toBeInTheDocument();
    });

    it(`should render the user details`, () => {
        const user = screen.getByText(`Bob Smith as theTester peeped:`);

        expect(user.textContent).toContain(`Bob Smith as theTester`);
    });

    it(`should format the time correctly`, () => {
        const time = screen.getByText(`On Sat May 04 2019 at 16:45:00`);

        expect(time.textContent).toContain(`at 16:45:00`);
    });

    it(`should format the date correctly`, () => {
        const date = screen.getByText(`On Sat May 04 2019 at 16:45:00`);

        expect(date.textContent).toContain(`Sat May 04 2019`);
    });
});