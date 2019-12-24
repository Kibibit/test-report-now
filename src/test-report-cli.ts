#!/usr/bin/env node
import { kbTestReporter } from './report-deployer';

// add console colors
// tslint:disable:no-var-requires
// tslint:disable:no-unused-expression
require('manakin').global;
// tslint:enable

kbTestReporter();
