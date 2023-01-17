/**
 * Fusion Applications Environment Management API
 * Use the Fusion Applications Environment Management API to manage the environments where your Fusion Applications run. For more information, see the [Fusion Applications Environment Management documentation](/iaas/Content/fusion-applications/home.htm).
 * OpenAPI spec version: 20211201
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
 * A description of workrequest status
 */
export interface WorkRequest {
  /**
   * Possible operation types.
   */
  "operationType": WorkRequest.OperationType;
  /**
   * Possible operation status.
   */
  "status": WorkRequest.Status;
  /**
   * The id of the work request.
   */
  "id": string;
  /**
   * The ocid of the compartment that contains the work request. Work requests should be scoped to
   * the same compartment as the resource the work request affects. If the work request affects multiple resources,
   * and those resources are not in the same compartment, it is up to the service team to pick the primary
   * resource whose compartment should be used
   *
   */
  "compartmentId": string;
  /**
   * The resources affected by this work request.
   */
  "resources": Array<model.WorkRequestResource>;
  /**
   * Percentage of the request completed. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "percentComplete": number;
  /**
   * The date and time the request was created, as described in
   * [RFC 3339](https://tools.ietf.org/rfc/rfc3339), section 14.29.
   *
   */
  "timeAccepted": Date;
  /**
   * The date and time the request was started, as described in [RFC 3339](https://tools.ietf.org/rfc/rfc3339),
   * section 14.29.
   *
   */
  "timeStarted"?: Date;
  /**
   * The date and time the object was finished, as described in [RFC 3339](https://tools.ietf.org/rfc/rfc3339).
   *
   */
  "timeFinished"?: Date;
}

export namespace WorkRequest {
  export enum OperationType {
    CreateFusionEnvironment = "CREATE_FUSION_ENVIRONMENT",
    UpdateFusionEnvironment = "UPDATE_FUSION_ENVIRONMENT",
    ResetFusionEnvironmentAdminPassword = "RESET_FUSION_ENVIRONMENT_ADMIN_PASSWORD",
    ScaleFusionEnvironment = "SCALE_FUSION_ENVIRONMENT",
    ArchiveFusionEnvironment = "ARCHIVE_FUSION_ENVIRONMENT",
    RestoreFusionEnvironment = "RESTORE_FUSION_ENVIRONMENT",
    CreateServiceInstance = "CREATE_SERVICE_INSTANCE",
    UpdateServiceInstance = "UPDATE_SERVICE_INSTANCE",
    DetachServiceInstance = "DETACH_SERVICE_INSTANCE",
    AddUser = "ADD_USER",
    RemoveUser = "REMOVE_USER",
    DeleteFusionEnvironment = "DELETE_FUSION_ENVIRONMENT",
    ChangeFusionEnvironmentCompartment = "CHANGE_FUSION_ENVIRONMENT_COMPARTMENT",
    UpgradeFusionEnvironment = "UPGRADE_FUSION_ENVIRONMENT",
    CreateFusionEnvironmentFamily = "CREATE_FUSION_ENVIRONMENT_FAMILY",
    DeleteFusionEnvironmentFamily = "DELETE_FUSION_ENVIRONMENT_FAMILY",
    UpdateFusionEnvironmentFamily = "UPDATE_FUSION_ENVIRONMENT_FAMILY",
    ChangeFusionEnvironmentFamilyCompartment = "CHANGE_FUSION_ENVIRONMENT_FAMILY_COMPARTMENT",
    RefreshFusionEnvironment = "REFRESH_FUSION_ENVIRONMENT",
    ExecuteColdPatch = "EXECUTE_COLD_PATCH",
    DataMaskFusionEnvironment = "DATA_MASK_FUSION_ENVIRONMENT",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Status {
    Accepted = "ACCEPTED",
    InProgress = "IN_PROGRESS",
    Failed = "FAILED",
    Succeeded = "SUCCEEDED",
    Canceling = "CANCELING",
    Canceled = "CANCELED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: WorkRequest): object {
    const jsonObj = {
      ...obj,
      ...{
        "resources": obj.resources
          ? obj.resources.map(item => {
              return model.WorkRequestResource.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WorkRequest): object {
    const jsonObj = {
      ...obj,
      ...{
        "resources": obj.resources
          ? obj.resources.map(item => {
              return model.WorkRequestResource.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
