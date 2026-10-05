import { beforeEach, describe, expect, it, vi } from "vitest";
import { ApiError, apiRequest, getAccessToken, putAccessToken } from "./apiHelper";

describe("apiHelper", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.stubGlobal("fetch", vi.fn());
  });

  it("stores and removes access tokens", () => {
    expect(getAccessToken()).toBeNull();
    putAccessToken("abc");
    expect(getAccessToken()).toBe("abc");
    putAccessToken(null);
    expect(getAccessToken()).toBeNull();
  });

  it("adds query parameters and the bearer token", async () => {
    vi.mocked(fetch).mockResolvedValue(
      new Response(JSON.stringify({ status: "success", message: "ok", data: { value: 1 } })),
    );
    putAccessToken("token-123");

    const response = await apiRequest<{ value: number }>("/items", {
      query: { page: 2, include: true, ignored: null },
    });

    expect(response.data.value).toBe(1);
    const [url, init] = vi.mocked(fetch).mock.calls[0] as [URL, RequestInit];
    expect(url.search).toBe("?page=2&include=true");
    expect(new Headers(init.headers).get("Authorization")).toBe("Bearer token-123");
  });

  it("serializes JSON request bodies and reports failed responses", async () => {
    vi.mocked(fetch).mockResolvedValueOnce(
      new Response(JSON.stringify({ status: "success", message: "ok", data: {} })),
    );
    await apiRequest("/items", { method: "POST", token: null, body: { title: "hello" } });
    const init = vi.mocked(fetch).mock.calls[0]?.[1] as RequestInit;
    expect(init.body).toBe(JSON.stringify({ title: "hello" }));
    expect(new Headers(init.headers).get("Content-Type")).toBe("application/json");

    vi.mocked(fetch).mockResolvedValueOnce(
      new Response(JSON.stringify({ status: "fail", message: "Unauthorized", data: {} }), { status: 401 }),
    );
    await expect(apiRequest("/private")).rejects.toBeInstanceOf(ApiError);
  });
});
