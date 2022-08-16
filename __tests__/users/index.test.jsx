import '@testing-library/jest-dom'
import {getStaticProps} from '../../pages/users/index';
import jestFetchMock from "jest-fetch-mock";
import {render, screen} from "@testing-library/react";
import Users from '../../pages/users/index';

jestFetchMock.enableMocks();

const users = [{id: 1, name: 'Leanne Graham'}];
describe("getStaticProps", () => {

    beforeEach(() => {
        fetch.resetMocks();
        fetch.mockResponseOnce(JSON.stringify(users));
    });

    it("should call users api", async () => {
        fetch.mockResponseOnce(JSON.stringify(users));
        const response = await getStaticProps();
        expect(response).toEqual(
            expect.objectContaining({
                props: {users}
            })
        );
    });

    it('renders a correct title', async () => {

        render(<Users users={users}/>)
        const heading = screen.getByText('Users');
        expect(heading).toBeTruthy();
    })

    it('renders a correct user name on Card', async () => {
        render(<Users users={users}/>)
        const userName = screen.getByText('Leanne Graham');
        expect(userName).toBeTruthy();
    })

});
