/**
 * Identity and Access Management Service API
 * APIs for managing users, groups, compartments, policies, and identity domains.
 * OpenAPI spec version: 20160918
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
 * Totp token for MFA
 *
 */
export interface MfaTotpToken {
  /**
   * The Totp token for MFA.
   *
   */
  "totpToken"?: string;
}

export namespace MfaTotpToken {
  export function getJsonObj(obj: MfaTotpToken): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MfaTotpToken): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
