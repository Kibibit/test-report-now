import { exec } from 'child_process';

export function kbTestReporter() {
  const travisPullRequest = process.env.TRAVIS_PULL_REQUEST;
  const nowToken = process.env.NOW_TOKEN;
  const isTravis = process.env.TRAVIS;

  if (!isTravis || !travisPullRequest) {
    console.info('not running on a travis pull request job. silently quitting...');
    process.exit(0);
  }

  if (!nowToken) {
    console.error('required environment variable NOW_TOKEN is not set');
    throw new Error('required environment variable NOW_TOKEN is not set');
  }

  const prSlug = process.env.TRAVIS_PULL_REQUEST_SLUG;
  const splitted = prSlug.split('\/');

  exec(`npx now alias --token=${ nowToken } $(now ./test-results --no-clipboard --token=${ nowToken } --public) ${ splitted[ 0 ] }-${ splitted[ 1 ] }-pr-${ travisPullRequest }`,
    async (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        // node couldn't execute the command
        return;
      }

      const Octokit = require('@octokit/rest');
      const auth = process.env.GH_TOKEN;
      const octokit = new Octokit({ auth });

      const testReportUrl = `https://${ splitted[ 0 ] }-${ splitted[ 1 ] }-pr-${ travisPullRequest }.now.sh`;

      const comment = {
        repo: splitted[ 1 ],
        owner: splitted[ 0 ],
        issue_number: travisPullRequest,
        body: ':traffic_light: Test report is available on ' + testReportUrl
      };

      const response = await octokit.issues.createComment(comment);

      // the *entire* stdout and stderr (buffered)
      console.log(`${ stdout }`);
      console.log(`${ stderr }`);
      console.log(`~~ GH PR # ${ travisPullRequest } test report comment ~~`, response.data);
    });
}
