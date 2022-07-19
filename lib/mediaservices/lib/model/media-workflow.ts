/**
 * Media Services
 * Media Services (includes Media Flow and Media Streams) is a fully managed service for processing media (video) source content. Use Media Flow and Media Streams to transcode and package digital video using configurable workflows and stream video outputs.

Use the Media Services API to configure media workflows and run Media Flow jobs, create distribution channels, ingest assets, create Preview URLs and play assets. For more information, see [Media Flow](/iaas/Content/dms-mediaflow/home.htm) and Media Streams [Media Streams](/iaas/Content/dms-mediastream/home.htm).

Use the table of contents and search tool to explore the Media Flow API and Media Streams API.

 * OpenAPI spec version: 20211101
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
 * Configurable workflows that define the series of tasks that will be used to process video files.
 */
export interface MediaWorkflow {
  /**
   * Unique identifier that is immutable on creation.
   */
  "id": string;
  /**
   * Name of the Media Workflow. Does not have to be unique, and it's changeable. Avoid entering confidential information.
   */
  "displayName": string;
  /**
   * Compartment Identifier.
   */
  "compartmentId": string;
  /**
   * The processing to be done in this workflow. Each key of the MediaWorkflowTasks in this array is unique
   * within the array.  The order of the items is preserved from the order of the tasks array in
   * CreateMediaWorkflowDetails or UpdateMediaWorkflowDetails.
   *
   */
  "tasks"?: Array<model.MediaWorkflowTask>;
  /**
   * Configurations to be applied to all the runs of this workflow. Parameters in these configurations are
   * overridden by parameters in the MediaWorkflowConfigurations of the MediaWorkflowJob and the
   * parameters of the MediaWorkflowJob. If the same parameter appears in multiple configurations, the values that
   * appear in the configuration at the highest index will be used.
   *
   */
  "mediaWorkflowConfigurationIds"?: Array<string>;
  /**
   * JSON object representing named parameters and their default values that can be referenced throughout this workflow.
   * The values declared here can be overridden by the MediaWorkflowConfigurations or parameters supplied when creating
   * MediaWorkflowJobs from this MediaWorkflow.
   *
   */
  "parameters"?: { [key: string]: string };
  /**
   * The time when the MediaWorkflow was created. An RFC3339 formatted datetime string.
   */
  "timeCreated"?: Date;
  /**
   * The time when the MediaWorkflow was updated. An RFC3339 formatted datetime string.
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the MediaWorkflow.
   */
  "lifecycleState"?: MediaWorkflow.LifecycleState;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "lifecyleDetails"?: string;
  /**
   * The version of the MediaWorkflow. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "version"?: number;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace MediaWorkflow {
  export enum LifecycleState {
    Active = "ACTIVE",
    NeedsAttention = "NEEDS_ATTENTION",
    Deleted = "DELETED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: MediaWorkflow): object {
    const jsonObj = {
      ...obj,
      ...{
        "tasks": obj.tasks
          ? obj.tasks.map(item => {
              return model.MediaWorkflowTask.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MediaWorkflow): object {
    const jsonObj = {
      ...obj,
      ...{
        "tasks": obj.tasks
          ? obj.tasks.map(item => {
              return model.MediaWorkflowTask.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
