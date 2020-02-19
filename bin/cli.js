#!/usr/bin/env node

process.title = "wsu-cli";

const cp = require("child_process");
const semver = require("semver");
const updateNotifier = require("update-notifier");
const runCli = require("../lib/run");
const logger = require("../lib/utils/logger");

const pkgFile = require("../package.json");

const requireNodeVersion = pkgFile.engines.node;

const currentVersion = process.version;

if (!semver.satisfies(currentVersion, requireNodeVersion)) {
  const rawVersion = requireNodeVersion.replace(/[^\d\.]/, "");

  logger.error(`webpack CLI requires at least Node v ${rawVersion}.  You have ${process.version}.`);
  logger.error('See https://webpack.js.org/ for migration help and similar.');
  process.exit(1);
}

// require.resolve("../bin/run.js");
