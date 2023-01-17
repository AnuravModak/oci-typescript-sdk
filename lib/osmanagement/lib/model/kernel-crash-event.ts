/**
 * OS Management API
 * API for the OS Management service. Use these API operations for working
with Managed instances and Managed instance groups.

 * OpenAPI spec version: 20190801
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
 * Information about a Kernel Crash.
 */
export interface KernelCrashEvent extends model.Event {
  /**
   * reason of the crash
   */
  "reason"?: string;
  /**
   * First occurrence time of the event
   */
  "timeFirstOccurred"?: Date;
  "vmcore"?: model.KernelVmCoreInformation;
  "content"?: model.EventContent;
  "system"?: model.CrashEventSystemInformation;

  "eventType": string;
}

export namespace KernelCrashEvent {
  export function getJsonObj(obj: KernelCrashEvent, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Event.getJsonObj(obj) as KernelCrashEvent)),
      ...{
        "vmcore": obj.vmcore ? model.KernelVmCoreInformation.getJsonObj(obj.vmcore) : undefined,
        "content": obj.content ? model.EventContent.getJsonObj(obj.content) : undefined,
        "system": obj.system ? model.CrashEventSystemInformation.getJsonObj(obj.system) : undefined
      }
    };

    return jsonObj;
  }
  export const eventType = "KERNEL_CRASH";
  export function getDeserializedJsonObj(obj: KernelCrashEvent, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Event.getDeserializedJsonObj(obj) as KernelCrashEvent)),
      ...{
        "vmcore": obj.vmcore
          ? model.KernelVmCoreInformation.getDeserializedJsonObj(obj.vmcore)
          : undefined,
        "content": obj.content ? model.EventContent.getDeserializedJsonObj(obj.content) : undefined,
        "system": obj.system
          ? model.CrashEventSystemInformation.getDeserializedJsonObj(obj.system)
          : undefined
      }
    };

    return jsonObj;
  }
}
