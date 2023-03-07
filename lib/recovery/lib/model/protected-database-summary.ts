/**
 * Oracle Database Autonomous Recovery Service API
 * Use Oracle Database Autonomous Recovery Service API to manage Protected Databases.
 * OpenAPI spec version: 20210216
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
* A protected database is an Oracle Cloud Database whose backups are managed by Oracle Database Autonomous Recovery Service.
* Each protected database requires a recovery service subnet and a protection policy to use Recovery Service as the backup destination for centralized backup and recovery.
* <p>
To use any of the API operations, you must be authorized in an IAM policy. If you are not authorized, talk to an administrator.
* If you are an administrator who needs to write policies to give users access, see [Getting Started with Policies](https://docs.oracle.com/iaas/Content/Identity/Concepts/policygetstarted.htm).
* <p>
For information about access control and compartments, see [Overview of the Identity Service](https://docs.oracle.com/iaas/Content/Identity/Concepts/overview.htm).
* 
*/
export interface ProtectedDatabaseSummary {
  /**
   * The OCID of the protected database.
   */
  "id": string;
  /**
   * The protected database name. You can change the displayName. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
   * The OCID of the compartment that contains the protected database.
   */
  "compartmentId": string;
  /**
   * The dbUniqueName for the protected database in Recovery Service. You cannot change the unique name.
   */
  "dbUniqueName": string;
  /**
   * The virtual private catalog (VPC) user credentials that authenticates the protected database to access Recovery Service.
   */
  "vpcUserName": string;
  /**
   * The size of the protected database. XS - Less than 5GB, S - 5GB to 50GB, M - 50GB to 500GB, L - 500GB to 1TB, XL - 1TB to 5TB, XXL - Greater than 5TB.
   */
  "databaseSize": model.DatabaseSizes;
  /**
   * The OCID of the protection policy associated with the protected database.
   */
  "protectionPolicyId": string;
  /**
   * List of recovery service subnet resources associated with the protected database.
   */
  "recoveryServiceSubnets"?: Array<model.RecoveryServiceSubnetDetails>;
  /**
   * The OCID of the protected database.
   */
  "databaseId"?: string;
  /**
   * An RFC3339 formatted datetime string that indicates the created time for a protected database. For example: '2020-05-22T21:10:29.600Z'
   *
   */
  "timeCreated"?: Date;
  /**
   * An RFC3339 formatted datetime string that indicates the last updated time for a protected database. For example: '2020-05-22T21:10:29.600Z'
   *
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the Protected Database.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * The health of the Protected Database.
   */
  "health"?: model.Health;
  /**
   * Detailed description about the current lifecycle state of the protected database. For example, it can be used to provide actionable information for a resource in a Failed state.
   */
  "lifecycleDetails"?: string;
  /**
   * A message describing the current health of the protected database.
   */
  "healthDetails"?: string;
  /**
   * Indicates whether the protected database is created by Recovery Service or created manually.
   * Set to <b>TRUE</b> for a service-defined protected database. When you enable the OCI-managed automatic backups option for a database and set Recovery Service as the backup destination, then Recovery Service creates the associated protected database resource.
   * Set to <b>FALSE</b> for a user-defined protected database.
   *
   */
  "isReadOnlyResource"?: boolean;
  "metrics"?: model.MetricsSummary;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`. For more information, see [Resource Tags](https://docs.oracle.com/en-us/iaas/Content/General/Concepts/resourcetags.htm)
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`. For more information, see [Resource Tags](https://docs.oracle.com/en-us/iaas/Content/General/Concepts/resourcetags.htm)
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace ProtectedDatabaseSummary {
  export function getJsonObj(obj: ProtectedDatabaseSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "recoveryServiceSubnets": obj.recoveryServiceSubnets
          ? obj.recoveryServiceSubnets.map(item => {
              return model.RecoveryServiceSubnetDetails.getJsonObj(item);
            })
          : undefined,

        "metrics": obj.metrics ? model.MetricsSummary.getJsonObj(obj.metrics) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ProtectedDatabaseSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "recoveryServiceSubnets": obj.recoveryServiceSubnets
          ? obj.recoveryServiceSubnets.map(item => {
              return model.RecoveryServiceSubnetDetails.getDeserializedJsonObj(item);
            })
          : undefined,

        "metrics": obj.metrics
          ? model.MetricsSummary.getDeserializedJsonObj(obj.metrics)
          : undefined
      }
    };

    return jsonObj;
  }
}