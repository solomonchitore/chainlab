# Development Environment

## Required Versions

| Tool | Required Version |
|---|---|
| Node.js | v24.19.0 |
| npm | 11.7.0 |
| Git | 2.55.0 |
| Next.js | 16.3.1 |

## Verify Your Environment

Run the following commands:

```bash
node --version
npm --version
git --version
npx next --version
```

The versions should match the versions listed above.

## Project Build

To verify that the project builds successfully:

```bash
npm run build
```

The build should complete successfully before changes are submitted through a Pull Request.

## Development Workflow

1. Create a new branch for your changes.
2. Make and test your changes locally.
3. Run the project build to verify that it succeeds.
4. Commit your changes.
5. Push the branch to the remote repository.
6. Open a Pull Request targeting the `main` branch.
7. Wait for the required CI checks to pass.
8. Have the Pull Request reviewed before merging.

## CI/CD Requirements

All changes submitted through a Pull Request must pass the ChainLab CI build workflow.

The CI workflow verifies that the project can be built successfully before changes are merged into the `main` branch.

## Main Branch Protection

The `main` branch is protected by repository rules.

The following protections are enabled:

- Pull Request required before merging
- Required CI status check
- Force pushes blocked
- Branch deletion restricted
- Required review before merging

Changes should not be pushed directly to the protected `main` branch.