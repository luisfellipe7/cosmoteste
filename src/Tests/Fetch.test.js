import React from "react";
import useFetch from "../Hooks/useFetch";
import "whatwg-fetch";
import { renderHook } from "@testing-library/react-hooks";
import fetchMock from "fetch-mock";
import { act } from "react-test-renderer";

describe("useFetch", () => {
  beforeAll(() => {
    global.fetch = fetch;
  });
  afterAll(() => {
    fetchMock.restore();
  });

  it("should return data with a successful request", async () => {
    const { result } = renderHook(() => useFetch());
    fetchMock.mock("https://api.github.com/search/users?q=luisfellipe", {
      returnedData: "foo",
    });
    await act(async () => {
      result.current.useFetch(
        "https://api.github.com/search/users?q=luisfellipe"
      );
    });

    expect(result.current.data).toBe({
      returnedData: "foo",
    });
  });
});
