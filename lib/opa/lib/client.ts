/**
 * OracleProcessAutomation API
 * A description of the OracleProcessAutomation API
 * OpenAPI spec version: 20210621
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import common = require("oci-common");
import * as requests from "./request";
import * as model from "./model";
import * as responses from "./response";
import { OpaInstanceWaiter } from "./opainstance-waiter";
import { composeResponse, composeRequest, GenericRetrier } from "oci-common";

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum OpaInstanceApiKeys {}
/**
 * This service client uses {@link common.CircuitBreaker.DefaultConfiguration} for all the operations by default if no circuit breaker configuration is defined by the user.
 */
export class OpaInstanceClient {
  protected static serviceEndpointTemplate =
    "https://process-automation.{region}.oci.{secondLevelDomain}";
  protected static endpointServiceName = "";
  protected "_endpoint": string = "";
  protected "_defaultHeaders": any = {};
  protected "_waiters": OpaInstanceWaiter;
  protected "_clientConfiguration": common.ClientConfiguration;
  protected _circuitBreaker = null;
  protected _httpOptions: any = undefined;
  public targetService = "OpaInstance";

  protected _httpClient: common.HttpClient;

  constructor(params: common.AuthParams, clientConfiguration?: common.ClientConfiguration) {
    const requestSigner = params.authenticationDetailsProvider
      ? new common.DefaultRequestSigner(params.authenticationDetailsProvider)
      : null;
    if (clientConfiguration) {
      this._clientConfiguration = clientConfiguration;
      this._circuitBreaker = clientConfiguration.circuitBreaker
        ? clientConfiguration.circuitBreaker!.circuit
        : null;
      this._httpOptions = clientConfiguration.httpOptions
        ? clientConfiguration.httpOptions
        : undefined;
    }
    // if circuit breaker is not created, check if circuit breaker system is enabled to use default circuit breaker
    const specCircuitBreakerEnabled = true;
    if (
      !this._circuitBreaker &&
      common.utils.isCircuitBreakerSystemEnabled(clientConfiguration!) &&
      (specCircuitBreakerEnabled || common.CircuitBreaker.DefaultCircuitBreakerOverriden)
    ) {
      this._circuitBreaker = new common.CircuitBreaker().circuit;
    }
    this._httpClient =
      params.httpClient ||
      new common.FetchHttpClient(requestSigner, this._circuitBreaker, this._httpOptions);

    if (
      params.authenticationDetailsProvider &&
      common.isRegionProvider(params.authenticationDetailsProvider)
    ) {
      const provider: common.RegionProvider = params.authenticationDetailsProvider;
      if (provider.getRegion()) {
        this.region = provider.getRegion();
      }
    }
  }

  /**
   * Get the endpoint that is being used to call (ex, https://www.example.com).
   */
  public get endpoint() {
    return this._endpoint;
  }

  /**
   * Sets the endpoint to call (ex, https://www.example.com).
   * @param endpoint The endpoint of the service.
   */
  public set endpoint(endpoint: string) {
    this._endpoint = endpoint;
    this._endpoint = this._endpoint + "/20210621";
    if (this.logger) this.logger.info(`OpaInstanceClient endpoint set to ${this._endpoint}`);
  }

  public get logger() {
    return common.LOG.logger;
  }

  /**
   * Sets the region to call (ex, Region.US_PHOENIX_1).
   * Note, this will call {@link #endpoint(String) endpoint} after resolving the endpoint.
   * @param region The region of the service.
   */
  public set region(region: common.Region) {
    this.endpoint = common.EndpointBuilder.createEndpointFromRegion(
      OpaInstanceClient.serviceEndpointTemplate,
      region,
      OpaInstanceClient.endpointServiceName
    );
  }

  /**
   * Sets the regionId to call (ex, 'us-phoenix-1').
   *
   * Note, this will first try to map the region ID to a known Region and call {@link #region(Region) region}.
   * If no known Region could be determined, it will create an endpoint assuming its in default Realm OC1
   * and then call {@link #endpoint(String) endpoint}.
   * @param regionId The public region ID.
   */
  public set regionId(regionId: string) {
    this.endpoint = common.EndpointBuilder.createEndpointFromRegionId(
      OpaInstanceClient.serviceEndpointTemplate,
      regionId,
      OpaInstanceClient.endpointServiceName
    );
  }

  /**
   * Creates a new OpaInstanceWaiter for resources for this service.
   *
   * @param config The waiter configuration for termination and delay strategy
   * @return The service waiters.
   */
  public createWaiters(config?: common.WaiterConfiguration): OpaInstanceWaiter {
    this._waiters = new OpaInstanceWaiter(this, config);
    return this._waiters;
  }

  /**
   * Gets the waiters available for resources for this service.
   *
   * @return The service waiters.
   */
  public getWaiters(): OpaInstanceWaiter {
    if (this._waiters) {
      return this._waiters;
    }
    throw Error("Waiters do not exist. Please create waiters.");
  }

  /**
   * Cancel work request with the given ID.
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param CancelWorkRequestRequest
   * @return CancelWorkRequestResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/opa/CancelWorkRequest.ts.html |here} to see how to use CancelWorkRequest API.
   */
  public async cancelWorkRequest(
    cancelWorkRequestRequest: requests.CancelWorkRequestRequest
  ): Promise<responses.CancelWorkRequestResponse> {
    if (this.logger) this.logger.debug("Calling operation OpaInstanceClient#cancelWorkRequest.");
    const operationName = "cancelWorkRequest";
    const apiReferenceLink = "";
    const pathParams = {
      "{workRequestId}": cancelWorkRequestRequest.workRequestId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": cancelWorkRequestRequest.ifMatch,
      "opc-request-id": cancelWorkRequestRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      cancelWorkRequestRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/workRequests/{workRequestId}",
      method: "DELETE",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.CancelWorkRequestResponse>{},
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Moves a OpaInstance resource from one compartment identifier to another. When provided, If-Match is checked against ETag values of the resource.
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param ChangeOpaInstanceCompartmentRequest
   * @return ChangeOpaInstanceCompartmentResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/opa/ChangeOpaInstanceCompartment.ts.html |here} to see how to use ChangeOpaInstanceCompartment API.
   */
  public async changeOpaInstanceCompartment(
    changeOpaInstanceCompartmentRequest: requests.ChangeOpaInstanceCompartmentRequest
  ): Promise<responses.ChangeOpaInstanceCompartmentResponse> {
    if (this.logger)
      this.logger.debug("Calling operation OpaInstanceClient#changeOpaInstanceCompartment.");
    const operationName = "changeOpaInstanceCompartment";
    const apiReferenceLink = "";
    const pathParams = {
      "{opaInstanceId}": changeOpaInstanceCompartmentRequest.opaInstanceId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": changeOpaInstanceCompartmentRequest.ifMatch,
      "opc-request-id": changeOpaInstanceCompartmentRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      changeOpaInstanceCompartmentRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/opaInstances/{opaInstanceId}/actions/changeCompartment",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        changeOpaInstanceCompartmentRequest.changeOpaInstanceCompartmentDetails,
        "ChangeOpaInstanceCompartmentDetails",
        model.ChangeOpaInstanceCompartmentDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.ChangeOpaInstanceCompartmentResponse>{},
        responseHeaders: [
          {
            value: response.headers.get("opc-work-request-id"),
            key: "opcWorkRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Creates a new OpaInstance.
   *
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param CreateOpaInstanceRequest
   * @return CreateOpaInstanceResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/opa/CreateOpaInstance.ts.html |here} to see how to use CreateOpaInstance API.
   */
  public async createOpaInstance(
    createOpaInstanceRequest: requests.CreateOpaInstanceRequest
  ): Promise<responses.CreateOpaInstanceResponse> {
    if (this.logger) this.logger.debug("Calling operation OpaInstanceClient#createOpaInstance.");
    const operationName = "createOpaInstance";
    const apiReferenceLink = "";
    const pathParams = {};

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-retry-token": createOpaInstanceRequest.opcRetryToken,
      "opc-request-id": createOpaInstanceRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      createOpaInstanceRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/opaInstances",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        createOpaInstanceRequest.createOpaInstanceDetails,
        "CreateOpaInstanceDetails",
        model.CreateOpaInstanceDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.CreateOpaInstanceResponse>{},
        responseHeaders: [
          {
            value: response.headers.get("opc-work-request-id"),
            key: "opcWorkRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Deletes a OpaInstance resource by identifier
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param DeleteOpaInstanceRequest
   * @return DeleteOpaInstanceResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/opa/DeleteOpaInstance.ts.html |here} to see how to use DeleteOpaInstance API.
   */
  public async deleteOpaInstance(
    deleteOpaInstanceRequest: requests.DeleteOpaInstanceRequest
  ): Promise<responses.DeleteOpaInstanceResponse> {
    if (this.logger) this.logger.debug("Calling operation OpaInstanceClient#deleteOpaInstance.");
    const operationName = "deleteOpaInstance";
    const apiReferenceLink = "";
    const pathParams = {
      "{opaInstanceId}": deleteOpaInstanceRequest.opaInstanceId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": deleteOpaInstanceRequest.ifMatch,
      "opc-request-id": deleteOpaInstanceRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      deleteOpaInstanceRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/opaInstances/{opaInstanceId}",
      method: "DELETE",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.DeleteOpaInstanceResponse>{},
        responseHeaders: [
          {
            value: response.headers.get("opc-work-request-id"),
            key: "opcWorkRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Gets a OpaInstance by identifier
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param GetOpaInstanceRequest
   * @return GetOpaInstanceResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/opa/GetOpaInstance.ts.html |here} to see how to use GetOpaInstance API.
   */
  public async getOpaInstance(
    getOpaInstanceRequest: requests.GetOpaInstanceRequest
  ): Promise<responses.GetOpaInstanceResponse> {
    if (this.logger) this.logger.debug("Calling operation OpaInstanceClient#getOpaInstance.");
    const operationName = "getOpaInstance";
    const apiReferenceLink = "";
    const pathParams = {
      "{opaInstanceId}": getOpaInstanceRequest.opaInstanceId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getOpaInstanceRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      getOpaInstanceRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/opaInstances/{opaInstanceId}",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.GetOpaInstanceResponse>{},
        body: await response.json(),
        bodyKey: "opaInstance",
        bodyModel: model.OpaInstance,
        type: "model.OpaInstance",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Gets the status of the work request with the given ID.
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param GetWorkRequestRequest
   * @return GetWorkRequestResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/opa/GetWorkRequest.ts.html |here} to see how to use GetWorkRequest API.
   */
  public async getWorkRequest(
    getWorkRequestRequest: requests.GetWorkRequestRequest
  ): Promise<responses.GetWorkRequestResponse> {
    if (this.logger) this.logger.debug("Calling operation OpaInstanceClient#getWorkRequest.");
    const operationName = "getWorkRequest";
    const apiReferenceLink = "";
    const pathParams = {
      "{workRequestId}": getWorkRequestRequest.workRequestId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getWorkRequestRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      getWorkRequestRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/workRequests/{workRequestId}",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.GetWorkRequestResponse>{},
        body: await response.json(),
        bodyKey: "workRequest",
        bodyModel: model.WorkRequest,
        type: "model.WorkRequest",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("retry-after"),
            key: "retryAfter",
            dataType: "number"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Returns a list of OpaInstances.
   *
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param ListOpaInstancesRequest
   * @return ListOpaInstancesResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/opa/ListOpaInstances.ts.html |here} to see how to use ListOpaInstances API.
   */
  public async listOpaInstances(
    listOpaInstancesRequest: requests.ListOpaInstancesRequest
  ): Promise<responses.ListOpaInstancesResponse> {
    if (this.logger) this.logger.debug("Calling operation OpaInstanceClient#listOpaInstances.");
    const operationName = "listOpaInstances";
    const apiReferenceLink = "";
    const pathParams = {};

    const queryParams = {
      "compartmentId": listOpaInstancesRequest.compartmentId,
      "lifecycleState": listOpaInstancesRequest.lifecycleState,
      "displayName": listOpaInstancesRequest.displayName,
      "id": listOpaInstancesRequest.id,
      "limit": listOpaInstancesRequest.limit,
      "page": listOpaInstancesRequest.page,
      "sortOrder": listOpaInstancesRequest.sortOrder,
      "sortBy": listOpaInstancesRequest.sortBy
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listOpaInstancesRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      listOpaInstancesRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/opaInstances",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.ListOpaInstancesResponse>{},
        body: await response.json(),
        bodyKey: "opaInstanceCollection",
        bodyModel: model.OpaInstanceCollection,
        type: "model.OpaInstanceCollection",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Return a (paginated) list of errors for a given work request.
   *
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param ListWorkRequestErrorsRequest
   * @return ListWorkRequestErrorsResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/opa/ListWorkRequestErrors.ts.html |here} to see how to use ListWorkRequestErrors API.
   */
  public async listWorkRequestErrors(
    listWorkRequestErrorsRequest: requests.ListWorkRequestErrorsRequest
  ): Promise<responses.ListWorkRequestErrorsResponse> {
    if (this.logger)
      this.logger.debug("Calling operation OpaInstanceClient#listWorkRequestErrors.");
    const operationName = "listWorkRequestErrors";
    const apiReferenceLink = "";
    const pathParams = {
      "{workRequestId}": listWorkRequestErrorsRequest.workRequestId
    };

    const queryParams = {
      "page": listWorkRequestErrorsRequest.page,
      "limit": listWorkRequestErrorsRequest.limit,
      "sortBy": listWorkRequestErrorsRequest.sortBy,
      "sortOrder": listWorkRequestErrorsRequest.sortOrder
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listWorkRequestErrorsRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      listWorkRequestErrorsRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/workRequests/{workRequestId}/errors",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.ListWorkRequestErrorsResponse>{},
        body: await response.json(),
        bodyKey: "workRequestErrorCollection",
        bodyModel: model.WorkRequestErrorCollection,
        type: "model.WorkRequestErrorCollection",
        responseHeaders: [
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Return a (paginated) list of logs for a given work request.
   *
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param ListWorkRequestLogsRequest
   * @return ListWorkRequestLogsResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/opa/ListWorkRequestLogs.ts.html |here} to see how to use ListWorkRequestLogs API.
   */
  public async listWorkRequestLogs(
    listWorkRequestLogsRequest: requests.ListWorkRequestLogsRequest
  ): Promise<responses.ListWorkRequestLogsResponse> {
    if (this.logger) this.logger.debug("Calling operation OpaInstanceClient#listWorkRequestLogs.");
    const operationName = "listWorkRequestLogs";
    const apiReferenceLink = "";
    const pathParams = {
      "{workRequestId}": listWorkRequestLogsRequest.workRequestId
    };

    const queryParams = {
      "page": listWorkRequestLogsRequest.page,
      "limit": listWorkRequestLogsRequest.limit,
      "sortBy": listWorkRequestLogsRequest.sortBy,
      "sortOrder": listWorkRequestLogsRequest.sortOrder
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listWorkRequestLogsRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      listWorkRequestLogsRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/workRequests/{workRequestId}/logs",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.ListWorkRequestLogsResponse>{},
        body: await response.json(),
        bodyKey: "workRequestLogEntryCollection",
        bodyModel: model.WorkRequestLogEntryCollection,
        type: "model.WorkRequestLogEntryCollection",
        responseHeaders: [
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Lists the work requests in a compartment.
   *
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param ListWorkRequestsRequest
   * @return ListWorkRequestsResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/opa/ListWorkRequests.ts.html |here} to see how to use ListWorkRequests API.
   */
  public async listWorkRequests(
    listWorkRequestsRequest: requests.ListWorkRequestsRequest
  ): Promise<responses.ListWorkRequestsResponse> {
    if (this.logger) this.logger.debug("Calling operation OpaInstanceClient#listWorkRequests.");
    const operationName = "listWorkRequests";
    const apiReferenceLink = "";
    const pathParams = {};

    const queryParams = {
      "compartmentId": listWorkRequestsRequest.compartmentId,
      "workRequestId": listWorkRequestsRequest.workRequestId,
      "status": listWorkRequestsRequest.status,
      "resourceId": listWorkRequestsRequest.resourceId,
      "page": listWorkRequestsRequest.page,
      "limit": listWorkRequestsRequest.limit,
      "sortOrder": listWorkRequestsRequest.sortOrder,
      "sortBy": listWorkRequestsRequest.sortBy
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listWorkRequestsRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      listWorkRequestsRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/workRequests",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.ListWorkRequestsResponse>{},
        body: await response.json(),
        bodyKey: "workRequestSummaryCollection",
        bodyModel: model.WorkRequestSummaryCollection,
        type: "model.WorkRequestSummaryCollection",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Updates the OpaInstance
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param UpdateOpaInstanceRequest
   * @return UpdateOpaInstanceResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/opa/UpdateOpaInstance.ts.html |here} to see how to use UpdateOpaInstance API.
   */
  public async updateOpaInstance(
    updateOpaInstanceRequest: requests.UpdateOpaInstanceRequest
  ): Promise<responses.UpdateOpaInstanceResponse> {
    if (this.logger) this.logger.debug("Calling operation OpaInstanceClient#updateOpaInstance.");
    const operationName = "updateOpaInstance";
    const apiReferenceLink = "";
    const pathParams = {
      "{opaInstanceId}": updateOpaInstanceRequest.opaInstanceId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": updateOpaInstanceRequest.ifMatch,
      "opc-request-id": updateOpaInstanceRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      updateOpaInstanceRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/opaInstances/{opaInstanceId}",
      method: "PUT",
      bodyContent: common.ObjectSerializer.serialize(
        updateOpaInstanceRequest.updateOpaInstanceDetails,
        "UpdateOpaInstanceDetails",
        model.UpdateOpaInstanceDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.UpdateOpaInstanceResponse>{},
        responseHeaders: [
          {
            value: response.headers.get("opc-work-request-id"),
            key: "opcWorkRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }
}
