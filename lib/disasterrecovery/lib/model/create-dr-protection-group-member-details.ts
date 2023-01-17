/**
 * Full Stack Disaster Recovery API
 * Use the Full Stack Disaster Recovery (FSDR) API to manage disaster recovery for business applications.
FSDR is an OCI disaster recovery orchestration and management service that provides comprehensive disaster recovery
capabilities for all layers of an application stack, including infrastructure, middleware, database, and application.

 * OpenAPI spec version: 20220125
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
 * Create properties for a member in a DR Protection Group.
 */
export interface CreateDrProtectionGroupMemberDetails {
  /**
    * The OCID of the member.
* <p>
Example: `ocid1.instance.oc1.phx.exampleocid1`
* 
    */
  "memberId": string;

  "memberType": string;
}

export namespace CreateDrProtectionGroupMemberDetails {
  export function getJsonObj(obj: CreateDrProtectionGroupMemberDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "memberType" in obj && obj.memberType) {
      switch (obj.memberType) {
        case "COMPUTE_INSTANCE":
          return model.CreateDrProtectionGroupMemberComputeInstanceDetails.getJsonObj(
            <model.CreateDrProtectionGroupMemberComputeInstanceDetails>(<object>jsonObj),
            true
          );
        case "DATABASE":
          return model.CreateDrProtectionGroupMemberDatabaseDetails.getJsonObj(
            <model.CreateDrProtectionGroupMemberDatabaseDetails>(<object>jsonObj),
            true
          );
        case "AUTONOMOUS_DATABASE":
          return model.CreateDrProtectionGroupMemberAutonomousDatabaseDetails.getJsonObj(
            <model.CreateDrProtectionGroupMemberAutonomousDatabaseDetails>(<object>jsonObj),
            true
          );
        case "VOLUME_GROUP":
          return model.CreateDrProtectionGroupMemberVolumeGroupDetails.getJsonObj(
            <model.CreateDrProtectionGroupMemberVolumeGroupDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.memberType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateDrProtectionGroupMemberDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "memberType" in obj && obj.memberType) {
      switch (obj.memberType) {
        case "COMPUTE_INSTANCE":
          return model.CreateDrProtectionGroupMemberComputeInstanceDetails.getDeserializedJsonObj(
            <model.CreateDrProtectionGroupMemberComputeInstanceDetails>(<object>jsonObj),
            true
          );
        case "DATABASE":
          return model.CreateDrProtectionGroupMemberDatabaseDetails.getDeserializedJsonObj(
            <model.CreateDrProtectionGroupMemberDatabaseDetails>(<object>jsonObj),
            true
          );
        case "AUTONOMOUS_DATABASE":
          return model.CreateDrProtectionGroupMemberAutonomousDatabaseDetails.getDeserializedJsonObj(
            <model.CreateDrProtectionGroupMemberAutonomousDatabaseDetails>(<object>jsonObj),
            true
          );
        case "VOLUME_GROUP":
          return model.CreateDrProtectionGroupMemberVolumeGroupDetails.getDeserializedJsonObj(
            <model.CreateDrProtectionGroupMemberVolumeGroupDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.memberType}`);
      }
    }
    return jsonObj;
  }
}
