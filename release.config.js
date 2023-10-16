module.exports = {
    branches: "main",
    repositoryUrl: "https://github.com/bestDevOps11/ticket-action.git",
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/npm',
        '@semantic-release/git',
         "assets": [
            { "path": "dist/asset.min.css", "label": "CSS distribution" },
            { "path": "dist/asset.min.js", "label": "JS distribution" }]
        "@semantic-release/github",
        }
