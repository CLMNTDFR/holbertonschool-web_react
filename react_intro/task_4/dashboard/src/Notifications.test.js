import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("test all Notifications", () => {
  it("renders without crashing", () => {
    shallow(<Notifications />);
  });

  it("renders three list items", () => {
    const res = shallow(<Notifications />);
    expect(res.find("li")).toHaveLength(3);
  });

  it("renders the text 'Here is the list of notifications'", () => {
    const res = shallow(<Notifications />);
    expect(res.text()).toContain("Here is the list of notifications");
  });
});
