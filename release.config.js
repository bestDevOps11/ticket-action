module.exports = {
    branches: "main",
    repositoryUrl: "https://github.com/bestDevOps11/ticket-action.git",
    "plugins": [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/git", {
          "assets": ["dist/**/*.{js,css}", "docs", "package.json"],
          "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
        }]


