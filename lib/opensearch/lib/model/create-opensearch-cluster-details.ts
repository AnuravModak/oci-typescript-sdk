/**
 * OpenSearch Service API
 * The OpenSearch service API provides access to OCI Search Service with OpenSearch.
 * OpenAPI spec version: 20180828
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
 * The configuration details for a new OpenSearch cluster.
 */
export interface CreateOpensearchClusterDetails {
  /**
   * The name of the cluster. Avoid entering confidential information.
   */
  "displayName": string;
  /**
   * The OCID of the compartment to create the cluster in.
   */
  "compartmentId": string;
  /**
   * The version of the software the cluster is running.
   */
  "softwareVersion": string;
  /**
   * The number of master nodes to configure for the cluster. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "masterNodeCount": number;
  /**
   * The instance type for the cluster's master nodes.
   */
  "masterNodeHostType": model.MasterNodeHostType;
  /**
   * The bare metal shape for the cluster's master nodes.
   */
  "masterNodeHostBareMetalShape"?: string;
  /**
   * The number of OCPUs to configure for the cluser's master nodes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "masterNodeHostOcpuCount": number;
  /**
   * The amount of memory in GB, to configure per node for the cluster's master nodes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "masterNodeHostMemoryGB": number;
  /**
   * The number of data nodes to configure for the cluster. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dataNodeCount": number;
  /**
   * TThe instance type for the cluster's data nodes.
   */
  "dataNodeHostType": model.DataNodeHostType;
  /**
   * The bare metal shape for the cluster's data nodes.
   */
  "dataNodeHostBareMetalShape"?: string;
  /**
   * The number of OCPUs to configure for the cluster's data nodes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dataNodeHostOcpuCount": number;
  /**
   * The amount of memory in GB, to configure per node for the cluster's data nodes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dataNodeHostMemoryGB": number;
  /**
   * The amount of storage in GB, to configure per node for the cluster's data nodes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dataNodeStorageGB": number;
  /**
   * The number of OpenSearch Dashboard nodes to configure for the cluster. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "opendashboardNodeCount": number;
  /**
   * The number of OCPUs to configure for the cluster's OpenSearch Dashboard nodes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "opendashboardNodeHostOcpuCount": number;
  /**
   * The amount of memory in GB, to configure for the cluster's OpenSearch Dashboard nodes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "opendashboardNodeHostMemoryGB": number;
  /**
   * The OCID of the cluster's VCN.
   */
  "vcnId": string;
  /**
   * The OCID of the cluster's subnet.
   */
  "subnetId": string;
  /**
   * The OCID for the compartment where the cluster's VCN is located.
   */
  "vcnCompartmentId": string;
  /**
   * The OCID for the compartment where the cluster's subnet is located.
   */
  "subnetCompartmentId": string;
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

export namespace CreateOpensearchClusterDetails {
  export function getJsonObj(obj: CreateOpensearchClusterDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateOpensearchClusterDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
