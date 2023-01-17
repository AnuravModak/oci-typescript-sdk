/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Cron schedule for a scheduled task.
 */
export interface CronSchedule extends model.Schedule {
  /**
   * Value in cron format.
   */
  "expression": string;
  /**
   * Time zone, by default UTC.
   */
  "timeZone": string;

  "type": string;
}

export namespace CronSchedule {
  export function getJsonObj(obj: CronSchedule, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Schedule.getJsonObj(obj) as CronSchedule)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "CRON";
  export function getDeserializedJsonObj(obj: CronSchedule, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Schedule.getDeserializedJsonObj(obj) as CronSchedule)),
      ...{}
    };

    return jsonObj;
  }
}
