/**
 * Identity and Access Management Service API
 * APIs for managing users, groups, compartments, policies, and identity domains.
 * OpenAPI spec version: 20160918
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
 * (For tenancies that support identity domains) The identity domain replication log for all identity domains for a given region.
 */
export interface DomainReplicationStates {
  /**
   * The OCID of the identity domain.
   */
  "domainId": string;
  /**
   * The IDCS-replicated region state.
   *
   */
  "state": DomainReplicationStates.State;
  /**
   * The replica region for the identity domain.
   */
  "replicaRegion": string;
}

export namespace DomainReplicationStates {
  export enum State {
    EnablingReplication = "ENABLING_REPLICATION",
    ReplicationEnabled = "REPLICATION_ENABLED",
    DisablingReplication = "DISABLING_REPLICATION",
    ReplicationDisabled = "REPLICATION_DISABLED",
    Deleted = "DELETED"
  }

  export function getJsonObj(obj: DomainReplicationStates): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DomainReplicationStates): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
