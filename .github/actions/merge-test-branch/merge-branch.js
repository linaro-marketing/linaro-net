const core = require('@actions/core');
const github = require('@actions/github');

try {
    // const payload = JSON.stringify(github.context.payload, undefined, 2)
    // console.log(`The event payload: ${payload}`);
    const incoming_owner = github.context.payload.pull_request.head.repo.owner.login;
    const incoming_branch = github.context.payload.pull_request.head.ref;
    const incoming_repo = github.context.payload.pull_request.head.repo.clone_url;
    console.log(incoming_owner);
    console.log(incoming_branch);
    console.log(incoming_repo);
} catch (error) {
    core.setFailed(error.message);
}