/**
* Copyright 2012 Microsoft Corporation
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var should = require('should');

var cli = require('../cli');
var capture = require('../util').capture;

var format = require('util').format;

var fs = require('fs');
var pathUtil = require('path');
if (!fs.existsSync) {
    fs.existsSync = pathUtil.existsSync;
};

var baseTestTempDir = "__temp";
var testDirBase = "test";
var testDirIndex = 0;
var testDir = "";
var testSettings;

suite('cli', function () {
    suite('site deploymentscript', function () {
        setup(function () {
            // Reset site deploymentscript command
            for (var i in cli.categories.site.commands) {
                var command = cli.categories.site.commands[i];
                if (command.name == 'deploymentscript') {
                    delete command.php;
                    delete command.basic;
                    delete command.aspWAP;
                    delete command.aspWebSite;
                    delete command.python;
                    delete command.node;
                    delete command.repositoryRoot;
                    delete command.suppressPrompt;
                    delete command.scriptType;
                    delete command.solutionFile;
                    delete command.sitePath;
                    delete command.dotDeployment;
                }
            }

            testDirIndex++;
            testDir = pathUtil.join(baseTestTempDir, testDirBase + testDirIndex);
            ensurePathExists(testDir);

            testSettings = {};
            testSettings.bash = false;
        });

        teardown(function () {
            removePath(testDir);
        });

        test('generate batch basic deployment script (--basic -t batch -r) should generate deploy.cmd', function (done) {
            testSettings.cmd = ('node cli.js site deploymentscript --basic -t batch -r ' + testDir).split(' ');

            runBasicSiteDeploymentScriptScenario(done, testSettings);
        });

        test('generate bash basic deployment script (--basic -t bash -r) should generate deploy.sh', function (done) {
            testSettings.cmd = ('node cli.js site deploymentscript --basic -t bash -r ' + testDir).split(' ');
            testSettings.bash = true;

            runBasicSiteDeploymentScriptScenario(done, testSettings);
        });

        test('generate batch php deployment script (--php -r) should generate deploy.cmd', function (done) {
            testSettings.cmd = ('node cli.js site deploymentscript --php -r ' + testDir).split(' ');

            runBasicSiteDeploymentScriptScenario(done, testSettings);
        });

        test('generate bash php deployment script (--php -t bash -r) should generate deploy.sh', function (done) {
            testSettings.cmd = ('node cli.js site deploymentscript --php -t bash -r ' + testDir).split(' ');
            testSettings.bash = true;

            runBasicSiteDeploymentScriptScenario(done, testSettings);
        });

        test('generate batch python deployment script (--python -r) should generate deploy.cmd', function (done) {
            testSettings.cmd = ('node cli.js site deploymentscript --python -r ' + testDir).split(' ');

            runBasicSiteDeploymentScriptScenario(done, testSettings);
        });

        test('generate batch python deployment script twice with -y (--python -y -r) should generate deploy.cmd', function (done) {
            testSettings.cmd = ('node cli.js site deploymentscript --python -y -r ' + testDir).split(' ');

            runBasicSiteDeploymentScriptScenario(function () {
                runBasicSiteDeploymentScriptScenario(done, testSettings);
            }, testSettings);
        });

        test('generate bash python deployment script (--python --scriptType bash -r) should generate deploy.sh', function (done) {
            testSettings.cmd = ('node cli.js site deploymentscript --python --scriptType bash -r ' + testDir).split(' ');
            testSettings.bash = true;

            runBasicSiteDeploymentScriptScenario(done, testSettings);
        });

        test('generate batch basic aspWebSite deployment script (--aspWebSite --repositoryRoot) should generate deploy.cmd', function (done) {
            testSettings.cmd = ('node cli.js site deploymentscript --aspWebSite --repositoryRoot ' + testDir).split(' ');

            runBasicSiteDeploymentScriptScenario(done, testSettings);
        });

        test('generate node deployment script (--node -r) should generate deploy.cmd', function (done) {
            testSettings.cmd = ('node cli.js site deploymentscript --node -r ' + testDir).split(' ');

            runNodeSiteDeploymentScriptScenario(done, testSettings);
        });

        test('generate bash node deployment script (--node -t bash -r) should generate deploy.sh', function (done) {
            testSettings.cmd = ('node cli.js site deploymentscript --node -t bash -r ' + testDir).split(' ');
            testSettings.bash = true;

            runNodeSiteDeploymentScriptScenario(done, testSettings);
        });

        test('generate batch aspWebSite with solution file deployment script (--aspWebSite -s solutionFile.sln -p site -r) should generate deploy.cmd', function (done) {
            var solutionFile = 'solutionFile.sln';
            var solutionFilePath = pathUtil.join(testDir, solutionFile);
            var siteDir = 'site';
            var siteDirPath = pathUtil.join(testDir, siteDir);

            testSettings.cmd = format('node cli.js site deploymentscript --aspWebSite -s %s -p %s -r %s', solutionFilePath, siteDirPath, testDir).split(' ');
            testSettings.solutionFile = solutionFile;

            runAspWebSiteDeploymentScriptScenario(done, testSettings);
        });

        test('generate batch aspWAP deployment script (--aspWAP projectFile.csproj -r) should generate deploy.cmd', function (done) {
            var projectFile = 'projectFile.csproj';
            var projectFilePath = pathUtil.join(testDir, projectFile);

            testSettings.cmd = format('node cli.js site deploymentscript --aspWAP %s -r %s', projectFilePath, testDir).split(' ');
            testSettings.projectFile = projectFile;

            runAspWAPDeploymentScriptScenario(done, testSettings);
        });

        test('generate batch aspWAP with solution file deployment script (--aspWAP site\\projectFile.csproj -s solutionFile.sln -r) should generate deploy.cmd', function (done) {
            var projectFile = 'site\\projectFile.csproj';
            var projectFilePath = pathUtil.join(testDir, projectFile);
            var solutionFile = 'solutionFile.sln';
            var solutionFilePath = pathUtil.join(testDir, solutionFile);

            testSettings.cmd = format('node cli.js site deploymentscript --aspWAP %s -s %s -r %s', projectFilePath, solutionFilePath, testDir).split(' ');
            testSettings.solutionFile = solutionFile;
            testSettings.projectFile = projectFile;

            runAspWAPDeploymentScriptScenario(done, testSettings);
        });

        test('generate batch basic site deployment script with sitePath (--basic -p site -r) should generate deploy.cmd', function (done) {
            var siteDir = 'site';
            var siteDirPath = pathUtil.join(testDir, siteDir);

            testSettings.cmd = format('node cli.js site deploymentscript --basic -p %s -r %s', siteDirPath, testDir).split(' ');
            testSettings.siteDir = '%\\site';

            runBasicSiteDeploymentScriptScenario(done, testSettings);
        });

        test('generate batch php site deployment script with sitePath fullpath (--php -p site\\site2 -r) should generate deploy.cmd', function (done) {
            var siteDir = 'site\\site2';
            var siteDirPath = pathUtil.resolve(pathUtil.join(testDir, siteDir));

            testSettings.cmd = format('node cli.js site deploymentscript --php -p %s -r %s', siteDirPath, testDir).split(' ');
            testSettings.siteDir = '%\\site\\site2';

            runBasicSiteDeploymentScriptScenario(done, testSettings);
        });

        test('generate bash python site deployment script with sitePath (--python -t bash --sitePath site -r) should generate deploy.sh', function (done) {
            var siteDir = 'site';
            var siteDirPath = pathUtil.join(testDir, siteDir);

            testSettings.cmd = format('node cli.js site deploymentscript --python -t bash --sitePath %s -r %s', siteDirPath, testDir).split(' ');
            testSettings.bash = true;
            testSettings.siteDir = '$DEPLOYMENT_SOURCE\\site';

            runBasicSiteDeploymentScriptScenario(done, testSettings);
        });

        test('generate batch php site deployment script without .deployment file (--php --no-dot-deployment -r) should generate deploy.cmd', function (done) {
            testSettings.cmd = format('node cli.js site deploymentscript --php --no-dot-deployment -r %s', testDir).split(' ');
            testSettings.noDotDeployment = true;

            runBasicSiteDeploymentScriptScenario(done, testSettings);
        });

        test('generate bash node site deployment script without .deployment file (--node -t bash --no-dot-deployment -r) should generate deploy.sh', function (done) {
            testSettings.cmd = format('node cli.js site deploymentscript --node -t bash --no-dot-deployment -r %s', testDir).split(' ');
            testSettings.bash = true;
            testSettings.noDotDeployment = true;

            runNodeSiteDeploymentScriptScenario(done, testSettings);
        });

        test('using exclusion flags together should fail (--aspWebSite --python ...)', function (done) {
            testSettings.cmd = ('node cli.js site deploymentscript --aspWebSite --python -r ' + testDir).split(' ');
            testSettings.errorMessage = 'specify only one of these flags';

            runErrorScenario(done, testSettings);
        });

        test('using exclusion flags together should fail (--node --php ...)', function (done) {
            testSettings.cmd = ('node cli.js site deploymentscript --node --php -r ' + testDir).split(' ');
            testSettings.errorMessage = 'specify only one of these flags';

            runErrorScenario(done, testSettings);
        });

        test('using exclusion flags together should fail (--aspWAP . --basic ...)', function (done) {
            testSettings.cmd = ('node cli.js site deploymentscript --aspWAP . --basic -r ' + testDir).split(' ');
            testSettings.errorMessage = 'specify only one of these flags';

            runErrorScenario(done, testSettings);
        });

        test('using exclusion flags together should fail (--basic --php ...)', function (done) {
            testSettings.cmd = ('node cli.js site deploymentscript --basic --php -r ' + testDir).split(' ');
            testSettings.errorMessage = 'specify only one of these flags';

            runErrorScenario(done, testSettings);
        });

        test('--aspWAP requires project file path argument', function (done) {
            testSettings.cmd = ('node cli.js site deploymentscript -r ' + testDir + ' --aspWAP').split(' ');
            testSettings.errorMessage = 'argument missing';

            runErrorScenario(done, testSettings);
        });

        test('--node requires directory to contain server.js file (--node)', function (done) {
            testSettings.cmd = ('node cli.js site deploymentscript --node -r ' + testDir).split(' ');
            testSettings.errorMessage = 'Missing server.js/app.js file';

            runErrorScenario(done, testSettings);
        });

        test('--scriptType only accepts batch or bash (--scriptType sh)', function (done) {
            testSettings.cmd = ('node cli.js site deploymentscript --php --scriptType sh -r ' + testDir).split(' ');
            testSettings.errorMessage = 'Script type should be either batch or bash';

            runErrorScenario(done, testSettings);
        });
    });
});

function runAspWebSiteDeploymentScriptScenario(callback, settings) {
    settings.scriptFileName = 'deploy.cmd';
    settings.outputContains = ['Generating deployment script for .NET Web Site', 'Generated deployment script'];
    settings.scriptContains = ['echo Handling .NET Web Site deployment.', settings.solutionFile, 'MSBUILD_PATH'];

    runSiteDeploymentScriptScenario(callback, settings);
}

function runAspWAPDeploymentScriptScenario(callback, settings) {
    settings.scriptFileName = 'deploy.cmd';
    var solutionRelated = settings.solutionFile != null ? 'SolutionDir' : '';

    settings.outputContains = ['Generating deployment script for .NET Web Application', 'Generated deployment script'];
    settings.scriptContains = ['echo Handling .NET Web Application deployment.', settings.projectFile, 'MSBUILD_PATH', solutionRelated];

    runSiteDeploymentScriptScenario(callback, settings);
}

function runBasicSiteDeploymentScriptScenario(callback, settings) {
    settings.scriptFileName = settings.bash ? 'deploy.sh' : 'deploy.cmd';
    settings.scriptExtraInclude = settings.bash ? '#!/bin/bash' : '@echo off';
    settings.expectedSitePath = settings.expectedSitePath || '';
    settings.outputContains = ['Generating deployment script for Web Site', 'Generated deployment script'];
    settings.scriptContains = ['echo Handling Basic Web Site deployment.', settings.scriptExtraInclude, settings.expectedSitePath];

    runSiteDeploymentScriptScenario(callback, settings);
}

function runNodeSiteDeploymentScriptScenario(callback, settings) {
    settings.nodeStartUpFile = settings.nodeStartUpFile || 'server.js';
    settings.scriptFileName = settings.bash ? 'deploy.sh' : 'deploy.cmd';
    settings.scriptExtraInclude = settings.bash ? '#!/bin/bash' : '@echo off';
    settings.outputContains = ['Generating deployment script for node', 'Generated deployment script'];
    settings.scriptContains = ['echo Handling node.js deployment.', settings.scriptExtraInclude];

    generateNodeStartJsFile(settings.nodeStartUpFile);

    runSiteDeploymentScriptScenario(function (err) {
            if (err) {
                callback(err);
                return;
            }

            try {
                var webConfigContent = getFileContent('web.config');
                webConfigContent.should.include(settings.nodeStartUpFile);
                webConfigContent.should.not.include('{NodeStartFile}');

                var iisNodeYmlContent = getFileContent('iisnode.yml');
                iisNodeYmlContent.should.include('node_env: production');

                callback();
            }
            catch (e) {
                callback(e);
            }
        }, settings);
}

function runSiteDeploymentScriptScenario(callback, settings) {
    runCommand(function (result, e) {
        if (e) {
            callback(e);
            return;
        }

        result.exitStatus.should.equal(0, 'Received an error status exit code');

        for (var i = 0; i < settings.outputContains.length; i++) {
            result.text.should.include(settings.outputContains[i]);
        }

        var deployCmdContent = getFileContent(settings.scriptFileName);
        for (var i = 0; i < settings.scriptContains.length; i++) {
            deployCmdContent.should.include(settings.scriptContains[i]);
        }
        deployCmdContent.should.not.include('{MSBuildArguments}');
        deployCmdContent.should.not.include('{SitePath}');

        if (settings.noDotDeployment) {
            var dotDeploymentFilePath = pathUtil.join(testDir, '.deployment');
            fs.existsSync(dotDeploymentFilePath).should.equal(false, "File exist: " + dotDeploymentFilePath);
        }
        else {
            var deploymentFileContent = getFileContent('.deployment');
            deploymentFileContent.should.include(settings.scriptFileName);
        }

        callback();
    }, settings.cmd);
}

function runErrorScenario(callback, settings) {
    runCommand(function (result, e) {
        if (e) {
            callback(e);
            return;
        }

        result.exitStatus.should.equal(1, 'Received success status exit code');
        result.errorText.should.include(settings.errorMessage);
        callback();
    }, settings.cmd);
}

function runCommand(callback, cmd) {
    capture(function () {
        cli.parse(cmd);
    }, function (result) {
        if (result.error) {
            // To avoid calling done twice
            return;
        }

        try {
            console.log('\n' + result.text);
            console.log(result.errorText);
            callback(result);
        }
        catch (e) {
            callback(result, e);
        }
    });
}

function generateNodeStartJsFile(startFile) {
    fs.writeFileSync(pathUtil.join(testDir, startFile), '//do nothing', 'utf8');
}

function getFileContent(path) {
    path = pathUtil.join(testDir, path);
    fs.existsSync(path).should.equal(true, "File doesn't exist: " + path);
    return fs.readFileSync(path, 'utf8');
}

function removePath(path) {
    var stat = tryGetFileStat(path);
    if (stat) {
        if (!stat.isDirectory()) {
            tryRemoveFile(path);
        }
        else {
            var files = fs.readdirSync(path);
            for (var index in files) {
                var file = files[index];
                var filePath = pathUtil.join(path, file);
                removePath(filePath);
            }

            tryRemoveDir(path);
        }
    }
}

function tryGetFileStat(path) {
    try {
        return fs.statSync(path);
    }
    catch (e) {
        if (e.errno == 34) {
            // Return null if path doesn't exist
            return null;
        }

        throw e;
    }
}

function tryRemoveFile(path) {
    try {
        fs.unlinkSync(path);
    }
    catch (e) {
        console.log(e);
    }
}

function tryRemoveDir(path) {
    try {
        fs.rmdirSync(path);
    }
    catch (e) {
    }
}

function ensurePathExists(path) {
    if (!fs.existsSync(path)) {
        ensurePathExists(pathUtil.dirname(path));
        fs.mkdirSync(path);
    }
}
