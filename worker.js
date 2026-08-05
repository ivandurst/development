export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Internally turn /development into /
    if (url.pathname === "/development") {
      url.pathname = "/";
    } else if (url.pathname.startsWith("/development/")) {
      url.pathname = url.pathname.slice("/development".length);
    }

    return env.ASSETS.fetch(new Request(url, request));
  },
};
