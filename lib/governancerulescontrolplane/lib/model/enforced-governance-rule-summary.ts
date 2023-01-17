/**
 * GovernanceRulesControlPlane API
 * A description of the GovernanceRulesControlPlane API
 * OpenAPI spec version: 20220504
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
 * A summary of the enforced governance rule.
 */
export interface EnforcedGovernanceRuleSummary {
  /**
   * The Oracle ID ([OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm)) of the enforced governance rule.
   */
  "id": string;
  /**
   * The Oracle ID ([OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm)) of the child's root compartment to which the governance rule is attached.
   */
  "compartmentId": string;
  /**
   * Display name of the governance rule.
   */
  "governanceRuleDisplayName": string;
  /**
    * Type of the governance rule, can be one of QUOTA, TAG, ALLOWED_REGIONS.
* <p>
Example: `QUOTA`
* 
    */
  "type": model.GovernanceRuleType;
  /**
   * The current state of the governance rule.
   */
  "lifecycleState": model.GovernanceRuleLifecycleState;
  /**
    * Date and time the governance rule was created. An RFC3339 formatted datetime string.
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated": Date;
  /**
    * Date and time the governance rule was updated. An RFC3339 formatted datetime string.
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeUpdated": Date;
}

export namespace EnforcedGovernanceRuleSummary {
  export function getJsonObj(obj: EnforcedGovernanceRuleSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: EnforcedGovernanceRuleSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
