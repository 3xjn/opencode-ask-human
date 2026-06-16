# Maintainer Notes

## Development

```bash
npm install
npm run typecheck
npm run build
npm pack --dry-run
```

The package exports an OpenCode plugin server from `./server` and builds to `dist/` with TypeScript.

## Publishing

Publish the first version locally so the package exists on npm:

```bash
npm login
npm run typecheck
npm publish --dry-run
npm publish --access public
```

Then configure npm Trusted Publishing for this repo:

- Package: `opencode-ask-human`
- Provider: GitHub Actions
- Repository: `3xjn/opencode-ask-human`
- Workflow: `publish.yml`

After that, publish from GitHub by creating a release, or run the `Publish to npm` workflow manually.

For later local publishes:

```bash
npm publish --dry-run
npm publish
```
