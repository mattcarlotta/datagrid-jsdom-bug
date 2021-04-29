import waitFor from "~utils/waitFor";
import withProviders from "~utils/withProviders";
import ViewEvents from "../index";

const mockBack = jest.fn();
const mockPush = jest.fn();
const mockReplace = jest.fn();

jest.mock("next/router", () => ({
  __esModule: true,
  useRouter: jest.fn(() => ({
    route: "/",
    pathname: "",
    query: { page: 1 },
    asPath: "/",
    push: mockPush,
    replace: mockReplace,
    back: mockBack
  }))
}));

const wrapper = withProviders(<ViewEvents />);
describe("View Events", () => {
  it("renders the page without errors", async () => {
    await waitFor(() => {
      wrapper.update();
      expect(wrapper.find("[data-testid='view-events-page']")).toExist();
    });
  });

  it("renders the table without errors", async () => {
    await waitFor(() => {
      wrapper.update();
      expect(wrapper.find("[data-testid='data-table']")).toExist();
    });

    console.log(wrapper.debug());
  });
});
