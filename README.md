## Reproduction configuration

```ts
export default defineConfig({
  server: { port: 6001, headers: { Test: "test" } },
  plugins: [react(), cloudflare()],
});
```

Notice that headers are exposed on JS bundle requests but **not** on the document request which is expected. This means things like [`crossOriginIsolation`](https://developer.mozilla.org/en-US/docs/Web/API/Window/crossOriginIsolated) don't work.

```ts
console.log("Window Cross Origin Isolation", window.crossOriginIsolated); // Logs `false` since the header is not set on the document
```
