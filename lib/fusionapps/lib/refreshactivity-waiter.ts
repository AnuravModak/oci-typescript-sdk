/**
 * Fusion Applications Environment Management API
 * Use the Fusion Applications Environment Management API to manage the environments where your Fusion Applications run. For more information, see the [Fusion Applications Environment Management documentation](/iaas/Content/Identity/fusion-applications/home.htm).
 * OpenAPI spec version: 20211201
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as serviceRequests from "./request";
import * as serviceResponses from "./response";
import * as models from "./model";
import { RefreshActivityClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class RefreshActivityWaiter {
  public constructor(
    private client: RefreshActivityClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forRefreshActivity till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetRefreshActivityResponse
   */
  public async forRefreshActivity(
    request: serviceRequests.GetRefreshActivityRequest,
    ...targetStates: models.RefreshActivity.LifecycleState[]
  ): Promise<serviceResponses.GetRefreshActivityResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getRefreshActivity(request),
      response => targetStates.includes(response.refreshActivity.lifecycleState!)
    );
  }
}
