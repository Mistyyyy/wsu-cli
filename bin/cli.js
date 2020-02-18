#!/usr/bin/env node

process.title = "wsu-cli";

const cp = require("child_process");
const semver = require("semver");
const updateNotifier = require("update-notifier");

const pkgFile = require("../package.json");

const requireNodeVersion = pkgFile.engines.node;

const currentVersion = process.version;

if (!semver.satisfies(currentVersion, requireNodeVersion)) {
  const rawVersion = requireNodeVersion.replace(/[^\d\.]/, "");

  
}