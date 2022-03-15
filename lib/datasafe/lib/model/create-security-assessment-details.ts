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
 * The details used to save a security assessment.
 */
export interface CreateSecurityAssessmentDetails {
  /**
   * The OCID of the compartment that contains the security assessment.
   */
  "compartmentId": string;
  /**
   * The display name of the security assessment.
   */
  "displayName"?: string;
  /**
   * Description of the security assessment.
   */
  "description"?: string;
  /**
   * The OCID of the target database on which security assessment is to be run.
   */
  "targetId": string;
  /**
    * To schedule the assessment for running periodically, specify the schedule in this attribute.
* Create or schedule one assessment per compartment. If not defined, the assessment runs immediately.
* Format -
* <version-string>;<version-specific-schedule>
* <p>
Allowed version strings - \"v1\"
* v1's version specific schedule -<ss> <mm> <hh> <day-of-week> <day-of-month>
* Each of the above fields potentially introduce constraints. A workrequest is created only
* when clock time satisfies all the constraints. Constraints introduced:
* 1. seconds = <ss> (So, the allowed range for <ss> is [0, 59])
* 2. minutes = <mm> (So, the allowed range for <mm> is [0, 59])
* 3. hours = <hh> (So, the allowed range for <hh> is [0, 23])
* <day-of-week> can be either '*' (without quotes or a number between 1(Monday) and 7(Sunday))
* 4. No constraint introduced when it is '*'. When not, day of week must equal the given value
* <day-of-month> can be either '*' (without quotes or a number between 1 and 28)
* 5. No constraint introduced when it is '*'. When not, day of month must equal the given value
* 
    */
  "schedule"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm)
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm)
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateSecurityAssessmentDetails {
  export function getJsonObj(obj: CreateSecurityAssessmentDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateSecurityAssessmentDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}