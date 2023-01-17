/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * A pipeline is a logical grouping of tasks that together perform a higher level operation. For example, a pipeline could contain a set of tasks that load and clean data, then execute a dataflow to analyze the data. The pipeline allows you to manage the activities as a unit instead of individually. Users can also schedule the pipeline instead of the tasks independently.
 */
export interface Pipeline {
  /**
   * Generated key that can be used in API calls to identify pipeline. On scenarios where reference to the pipeline is needed, a value can be passed in create.
   */
  "key"?: string;
  /**
   * This is a version number that is used by the service to upgrade objects if needed through releases of the service.
   */
  "modelVersion"?: string;
  "parentRef"?: model.ParentReference;
  /**
   * Free form text without any restriction on permitted characters. Name can have letters, numbers, and special characters. The value is editable and is restricted to 1000 characters.
   */
  "name"?: string;
  /**
   * Detailed description for the object.
   */
  "description"?: string;
  /**
   * The type of the object.
   */
  "modelType"?: string;
  /**
   * This is used by the service for optimistic locking of the object, to prevent multiple users from simultaneously updating the object. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectVersion"?: number;
  /**
   * The status of an object that can be set to value 1 for shallow references across objects, other values reserved. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectStatus"?: number;
  /**
   * Value can only contain upper case letters, underscore, and numbers. It should begin with upper case letter or underscore. The value can be modified.
   */
  "identifier"?: string;
  /**
   * A list of nodes attached to the pipeline.
   */
  "nodes"?: Array<model.FlowNode>;
  /**
   * A list of parameters for the pipeline, this allows certain aspects of the pipeline to be configured when the pipeline is executed.
   */
  "parameters"?: Array<model.Parameter>;
  "flowConfigValues"?: model.ConfigValues;
  /**
   * The list of variables required in pipeline, variables can be used to store values that can be used as inputs to tasks in the pipeline.
   */
  "variables"?: Array<model.Variable>;
  "metadata"?: model.ObjectMetadata;
}

export namespace Pipeline {
  export function getJsonObj(obj: Pipeline): object {
    const jsonObj = {
      ...obj,
      ...{
        "parentRef": obj.parentRef ? model.ParentReference.getJsonObj(obj.parentRef) : undefined,

        "nodes": obj.nodes
          ? obj.nodes.map(item => {
              return model.FlowNode.getJsonObj(item);
            })
          : undefined,
        "parameters": obj.parameters
          ? obj.parameters.map(item => {
              return model.Parameter.getJsonObj(item);
            })
          : undefined,
        "flowConfigValues": obj.flowConfigValues
          ? model.ConfigValues.getJsonObj(obj.flowConfigValues)
          : undefined,
        "variables": obj.variables
          ? obj.variables.map(item => {
              return model.Variable.getJsonObj(item);
            })
          : undefined,
        "metadata": obj.metadata ? model.ObjectMetadata.getJsonObj(obj.metadata) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Pipeline): object {
    const jsonObj = {
      ...obj,
      ...{
        "parentRef": obj.parentRef
          ? model.ParentReference.getDeserializedJsonObj(obj.parentRef)
          : undefined,

        "nodes": obj.nodes
          ? obj.nodes.map(item => {
              return model.FlowNode.getDeserializedJsonObj(item);
            })
          : undefined,
        "parameters": obj.parameters
          ? obj.parameters.map(item => {
              return model.Parameter.getDeserializedJsonObj(item);
            })
          : undefined,
        "flowConfigValues": obj.flowConfigValues
          ? model.ConfigValues.getDeserializedJsonObj(obj.flowConfigValues)
          : undefined,
        "variables": obj.variables
          ? obj.variables.map(item => {
              return model.Variable.getDeserializedJsonObj(item);
            })
          : undefined,
        "metadata": obj.metadata
          ? model.ObjectMetadata.getDeserializedJsonObj(obj.metadata)
          : undefined
      }
    };

    return jsonObj;
  }
}
