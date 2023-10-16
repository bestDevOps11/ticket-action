# ticket-action

automate your semantic versioning
verify that "npm packages" are installed 
# -for Mac run:
     /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
     brew update
     brew install node
     node -v
     npm -v

# 2- RUN COMMAND
    npm install semantic-release @semantic-release/git @semantic-release/github -D
 
# 3- Create a new file inside your repo called:
     release.config.js

# 4- add an configuration module.exports inside the file created

        module.exports = {
           branches: "main",
           repositoryUrl: "https://github.com/bestDevOps11/ticket-action.git",
           plugins: [
             "@semantic-release/commit-analyzer",
             "@semantic-release/release-notes-generator",
             "@semantic-release/npm",
             "@semantic-release/git"]
        }