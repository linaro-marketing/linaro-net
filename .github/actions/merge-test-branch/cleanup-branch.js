const core = require('@actions/core');
const github = require('@actions/github');
const { exec } = require('child_process');

try {
    const incoming_owner = github.context.payload.pull_request.head.repo.owner.login;
    const incoming_branch = github.context.payload.pull_request.head.ref;
    const execSync = exec.execSync;
    execSync("cd $GITHUB_WORKSPACE");
    console.log(execSync("git reset --merge"));
    console.log("git checkout $GITHUB_BASE_REF");
    console.log(execSync("git checkout $GITHUB_BASE_REF"));
    console.log(`git branch -D ${incoming_owner}-${incoming_branch}`);
    console.log(execSync(`git branch -D ${incoming_owner}-${incoming_branch}`));
} catch (error) {
    core.setFailed(error.message);
}
