/**
 * Resource Manager API
 * Use the Resource Manager API to automate deployment and operations for all Oracle Cloud Infrastructure resources.
Using the infrastructure-as-code (IaC) model, the service is based on Terraform, an open source industry standard that lets DevOps engineers develop and deploy their infrastructure anywhere.
For more information, see
[the Resource Manager documentation](/iaas/Content/ResourceManager/home.htm).

 * OpenAPI spec version: 20180917
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
 * Job details that are specific to apply operations.
 *
 */
export interface ApplyJobOperationDetailsSummary extends model.JobOperationDetailsSummary {
  /**
   * Specifies the source of the execution plan to apply.
   * Use `AUTO_APPROVED` to run the job without an execution plan.
   *
   */
  "executionPlanStrategy": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the plan job that contains the execution plan used for this job,
   * or `null` if no execution plan was used.
   *
   */
  "executionPlanJobId"?: string;

  "operation": string;
}

export namespace ApplyJobOperationDetailsSummary {
  export function getJsonObj(
    obj: ApplyJobOperationDetailsSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.JobOperationDetailsSummary.getJsonObj(obj) as ApplyJobOperationDetailsSummary)),
      ...{}
    };

    return jsonObj;
  }
  export const operation = "APPLY";
  export function getDeserializedJsonObj(
    obj: ApplyJobOperationDetailsSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.JobOperationDetailsSummary.getDeserializedJsonObj(
            obj
          ) as ApplyJobOperationDetailsSummary)),
      ...{}
    };

    return jsonObj;
  }
}
