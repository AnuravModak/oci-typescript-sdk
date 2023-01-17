/**
 * Vault Service Key Management API
 * API for managing and performing operations with keys and vaults. (For the API for managing secrets, see the Vault Service 
Secret Management API. For the API for retrieving secrets, see the Vault Service Secret Retrieval API.)

 * OpenAPI spec version: release
 * Contact: sparta_kms_us_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

export interface Key {
  /**
   * The OCID of the compartment that contains this master encryption key.
   */
  "compartmentId": string;
  /**
   * The OCID of the key version used in cryptographic operations. During key rotation, the service might be
   * in a transitional state where this or a newer key version are used intermittently. The `currentKeyVersion`
   * property is updated when the service is guaranteed to use the new key version for all subsequent encryption operations.
   *
   */
  "currentKeyVersion": string;
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A user-friendly name for the key. It does not have to be unique, and it is changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName": string;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * The OCID of the key.
   */
  "id": string;
  "keyShape": model.KeyShape;
  /**
   * The key's protection mode indicates how the key persists and where cryptographic operations that use the key are performed.
   * A protection mode of `HSM` means that the key persists on a hardware security module (HSM) and all cryptographic operations are performed inside
   * the HSM. A protection mode of `SOFTWARE` means that the key persists on the server, protected by the vault's RSA wrapping key which persists
   * on the HSM. All cryptographic operations that use a key with a protection mode of `SOFTWARE` are performed on the server. By default,
   * a key's protection mode is set to `HSM`. You can't change a key's protection mode after the key is created or imported.
   *
   */
  "protectionMode"?: Key.ProtectionMode;
  /**
    * The key's current lifecycle state.
* <p>
Example: `ENABLED`
* 
    */
  "lifecycleState": Key.LifecycleState;
  /**
    * The date and time the key was created, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.
* <p>
Example: `2018-04-03T21:10:29.600Z`
* 
    */
  "timeCreated": Date;
  /**
   * An optional property indicating when to delete the key, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.
   * Example: `2019-04-03T21:10:29.600Z`
   *
   */
  "timeOfDeletion"?: Date;
  /**
   * The OCID of the vault that contains this key.
   */
  "vaultId": string;
  /**
   * The OCID of the key from which this key was restored.
   */
  "restoredFromKeyId"?: string;
  "replicaDetails"?: model.KeyReplicaDetails;
  "isPrimary"?: boolean;
}

export namespace Key {
  export enum ProtectionMode {
    Hsm = "HSM",
    Software = "SOFTWARE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LifecycleState {
    Creating = "CREATING",
    Enabling = "ENABLING",
    Enabled = "ENABLED",
    Disabling = "DISABLING",
    Disabled = "DISABLED",
    Deleting = "DELETING",
    Deleted = "DELETED",
    PendingDeletion = "PENDING_DELETION",
    SchedulingDeletion = "SCHEDULING_DELETION",
    CancellingDeletion = "CANCELLING_DELETION",
    Updating = "UPDATING",
    BackupInProgress = "BACKUP_IN_PROGRESS",
    Restoring = "RESTORING",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Key): object {
    const jsonObj = {
      ...obj,
      ...{
        "keyShape": obj.keyShape ? model.KeyShape.getJsonObj(obj.keyShape) : undefined,

        "replicaDetails": obj.replicaDetails
          ? model.KeyReplicaDetails.getJsonObj(obj.replicaDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Key): object {
    const jsonObj = {
      ...obj,
      ...{
        "keyShape": obj.keyShape ? model.KeyShape.getDeserializedJsonObj(obj.keyShape) : undefined,

        "replicaDetails": obj.replicaDetails
          ? model.KeyReplicaDetails.getDeserializedJsonObj(obj.replicaDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
