import { mount, ReactWrapper } from "enzyme";
import Container from "../index";

const Home = () => <div>Hello</div>;

describe("App Container", () => {
  let wrapper: ReactWrapper;
  beforeEach(() => {
    wrapper = mount(
      <Container Component={Home} router={{} as any} pageProps={{}} />
    );
  });

  it("renders without errors", () => {
    expect(wrapper.find("Home")).toExist();
  });

  it("removes SSR material ui styles", () => {
    const root = document.createElement("div");
    root.id = "jss-server-side";
    document.body.appendChild(root);
    wrapper = mount(
      <Container Component={Home} router={{} as any} pageProps={{}} />
    );
    expect(wrapper.find("#jss-server-side")).not.toExist();
  });
});
