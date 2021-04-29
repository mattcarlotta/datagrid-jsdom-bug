import { mount, ReactWrapper } from "enzyme";
import FlexEnd from "../index";

describe("FlexEnd", () => {
  let wrapper: ReactWrapper;
  beforeEach(() => {
    wrapper = mount(<FlexEnd />);
  });

  it("renders without errors", () => {
    expect(wrapper).toExist();
  });

  it("sets width when passed a 'width' prop", () => {
    wrapper.setProps({ width: "10px" });
    expect(wrapper).toHaveStyleRule("width", "10px");
  });

  it("sets a media rule when passed a 'breakpoint' prop", () => {
    wrapper.setProps({ breakpoint: "true" });
    expect(wrapper).toHaveStyleRule("width", "auto", {
      media: "(max-width: 800px)"
    });
  });
});
