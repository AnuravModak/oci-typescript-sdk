/**
 * Container Engine for Kubernetes API
 * API for the Container Engine for Kubernetes service. Use this API to build, deploy,
and manage cloud-native applications. For more information, see
[Overview of Container Engine for Kubernetes](/iaas/Content/ContEng/Concepts/contengoverview.htm).

 * OpenAPI spec version: 20180222
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
 * The properties that define a virtual node summary.
 */
export interface VirtualNodeSummary {
  /**
   * The ocid of the virtual node.
   */
  "id": string;
  /**
   * The name of the virtual node.
   */
  "displayName": string;
  /**
   * The version of Kubernetes this virtual node is running.
   */
  "kubernetesVersion"?: string;
  /**
   * The ocid of the virtual node pool this virtual node belongs to.
   */
  "virtualNodePoolId": string;
  /**
   * The name of the availability domain in which this virtual node is placed
   */
  "availabilityDomain"?: string;
  /**
   * The fault domain of this virtual node.
   */
  "faultDomain"?: string;
  /**
   * The OCID of the subnet in which this Virtual Node is placed.
   */
  "subnetId"?: string;
  /**
   * NSG Ids applied to virtual node vnic.
   */
  "nsgIds"?: Array<string>;
  /**
   * The private IP address of this Virtual Node.
   */
  "privateIp"?: string;
  /**
   * An error that may be associated with the virtual node.
   */
  "virtualNodeError"?: string;
  /**
   * The state of the Virtual Node.
   */
  "lifecycleState"?: model.VirtualNodeLifecycleState;
  /**
   * Details about the state of the Virtual Node.
   */
  "lifecycleDetails"?: string;
  /**
   * The time at which the virtual node was created.
   */
  "timeCreated"?: Date;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
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

export namespace VirtualNodeSummary {
  export function getJsonObj(obj: VirtualNodeSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: VirtualNodeSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}