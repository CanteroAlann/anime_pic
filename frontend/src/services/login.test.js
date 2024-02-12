import axios from "axios";
import loginService from "./login";

jest.mock("axios");

const credentials = {
    username: "test",
    password: "test",
};

test("login service sends a request to the server", async () => {
    const response = { data: { username: "test", token: "1234" } };
    axios.post.mockResolvedValue(response);
    const result = await loginService.login(credentials);
    expect(result).toEqual(response.data);
}
)
