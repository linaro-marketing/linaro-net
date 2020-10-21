const core = require('@actions/core');
const github = require('@actions/github');
import { execSync } from 'child_process';

try {
    const incoming_owner = github.context.payload.pull_request.head.repo.owner.login;
    const incoming_branch = github.context.payload.pull_request.head.ref;
    const incoming_repo = github.context.payload.pull_request.head.repo.clone_url;
    execSync("cd $GITHUB_WORKSPACE");
    console.log(`git checkout -b ${incoming_owner}-${incoming_branch} $GITHUB_BASE_REF`);
    console.log(execSync(`git checkout -b ${incoming_owner}-${incoming_branch} $GITHUB_BASE_REF`, { encoding: 'utf-8' }));
    console.log(`git pull ${incoming_repo} ${incoming_branch}`);
    console.log(execSync(`git pull ${incoming_repo} ${incoming_branch}`, { encoding: 'utf-8' }));
} catch (error) {
    core.setFailed(error.message);
}