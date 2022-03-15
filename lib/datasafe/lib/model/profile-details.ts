/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The details of a particular profile
 *
 */
export interface ProfileDetails {
  /**
   * The number of users using this profile. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "numUsers"?: number;
  /**
   * The value of the CONNECT_TIME resource parameter.
   */
  "connectTime"?: string;
  /**
   * The value of the FAILED_LOGIN_ATTEMPTS password parameter.
   */
  "failedLoginAttempts"?: string;
  /**
   * The value of the IDLE_TIME resource parameter.
   */
  "idleTime"?: string;
  /**
   * The value of the INACTIVE_ACCOUNT_TIME password parameter.
   */
  "inactiveAccountTime"?: string;
  /**
   * The value of the PASSWORD_GRACE_TIME password parameter.
   */
  "passwordGraceTime"?: string;
  /**
   * The value of the PASSWORD_LIFE_TIME password parameter.
   */
  "passwordLifeTime"?: string;
  /**
   * The value of the PASSWORD_LOCK_TIME password parameter.
   */
  "passwordLockTime"?: string;
  /**
   * The value of the PASSWORD_REUSE_TIME password parameter.
   */
  "passwordReuseTime"?: string;
  /**
   * The value of the PASSWORD_REUSE_MAX resource parameter.
   */
  "passwordReuseMax"?: string;
  /**
   * The value of the PASSWORD_VERIFY_FUNCTION resource.
   */
  "passwordVerifyFunction"?: string;
}

export namespace ProfileDetails {
  export function getJsonObj(obj: ProfileDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ProfileDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}