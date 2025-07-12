# Simple Node.js App with CI/CD

This is a simple Node.js application with GitHub Actions CI/CD pipeline.

## Features
- Basic Express server
- Unit tests with Jest
- GitHub Actions workflow that:
  - Runs tests on every push/PR
  - Deploys to production when tests pass (main branch only)

## Running Locally
1. Clone the repository
2. Run `npm install`
3. Start the server with `npm start`
4. Access at `http://localhost:3000`

## Testing
Run tests with:
```bash
npm test
