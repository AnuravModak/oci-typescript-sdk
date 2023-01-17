/**
 * Work Requests API
 * Many of the API operations that you use to create and configure Compute resources do not take effect
immediately. In these cases, the operation spawns an asynchronous workflow to fulfill the request.
Work requests provide visibility into the status of these in-progress, long-running workflows.

For more information about work requests and the operations that spawn work requests, see
[Viewing the State of a Compute Work Request](/iaas/Content/Compute/Tasks/viewingworkrequestcompute.htm).

 * OpenAPI spec version: 20160918
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
import { paginateRecords, paginateResponses } from "oci-common";
import { WorkRequestWaiter } from "./workrequest-waiter";
import { composeResponse, composeRequest, GenericRetrier } from "oci-common";

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum WorkRequestApiKeys {}
/**
 * This service client uses {@link common.CircuitBreaker.DefaultConfiguration} for all the operations by default if no circuit breaker configuration is defined by the user.
 */
export class WorkRequestClient {
  protected static serviceEndpointTemplate = "https://iaas.{region}.{secondLevelDomain}";
  protected static endpointServiceName = "";
  protected "_endpoint": string = "";
  protected "_defaultHeaders": any = {};
  protected "_waiters": WorkRequestWaiter;
  protected "_clientConfiguration": common.ClientConfiguration;
  protected _circuitBreaker = null;
  protected _httpOptions: any = undefined;
  public targetService = "WorkRequest";

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
    this._endpoint = this._endpoint + "/20160918";
    if (this.logger) this.logger.info(`WorkRequestClient endpoint set to ${this._endpoint}`);
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
      WorkRequestClient.serviceEndpointTemplate,
      region,
      WorkRequestClient.endpointServiceName
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
      WorkRequestClient.serviceEndpointTemplate,
      regionId,
      WorkRequestClient.endpointServiceName
    );
  }

  /**
   * Creates a new WorkRequestWaiter for resources for this service.
   *
   * @param config The waiter configuration for termination and delay strategy
   * @return The service waiters.
   */
  public createWaiters(config?: common.WaiterConfiguration): WorkRequestWaiter {
    this._waiters = new WorkRequestWaiter(this, config);
    return this._waiters;
  }

  /**
   * Gets the waiters available for resources for this service.
   *
   * @return The service waiters.
   */
  public getWaiters(): WorkRequestWaiter {
    if (this._waiters) {
      return this._waiters;
    }
    throw Error("Waiters do not exist. Please create waiters.");
  }

  /**
   * Gets the details of a work request.
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param GetWorkRequestRequest
   * @return GetWorkRequestResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/workrequests/GetWorkRequest.ts.html |here} to see how to use GetWorkRequest API.
   */
  public async getWorkRequest(
    getWorkRequestRequest: requests.GetWorkRequestRequest
  ): Promise<responses.GetWorkRequestResponse> {
    if (this.logger) this.logger.debug("Calling operation WorkRequestClient#getWorkRequest.");
    const operationName = "getWorkRequest";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/workrequests/20160918/WorkRequest/GetWorkRequest";
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
   * Gets the errors for a work request.
   *
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param ListWorkRequestErrorsRequest
   * @return ListWorkRequestErrorsResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/workrequests/ListWorkRequestErrors.ts.html |here} to see how to use ListWorkRequestErrors API.
   */
  public async listWorkRequestErrors(
    listWorkRequestErrorsRequest: requests.ListWorkRequestErrorsRequest
  ): Promise<responses.ListWorkRequestErrorsResponse> {
    if (this.logger)
      this.logger.debug("Calling operation WorkRequestClient#listWorkRequestErrors.");
    const operationName = "listWorkRequestErrors";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/workrequests/20160918/WorkRequestError/ListWorkRequestErrors";
    const pathParams = {
      "{workRequestId}": listWorkRequestErrorsRequest.workRequestId
    };

    const queryParams = {
      "limit": listWorkRequestErrorsRequest.limit,
      "page": listWorkRequestErrorsRequest.page,
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
        bodyKey: "items",
        bodyModel: model.WorkRequestError,
        type: "Array<model.WorkRequestError>",
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
   * NOTE: This function is deprecated in favor of listWorkRequestErrorsRecordIterator function.
   * Creates a new async iterator which will iterate over the models.WorkRequestError objects
   * contained in responses from the listWorkRequestErrors operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllWorkRequestErrors(
    request: requests.ListWorkRequestErrorsRequest
  ): AsyncIterableIterator<model.WorkRequestError> {
    return paginateRecords(request, req => this.listWorkRequestErrors(req));
  }

  /**
   * NOTE: This function is deprecated in favor of listWorkRequestErrorsResponseIterator function.
   * Creates a new async iterator which will iterate over the responses received from the listWorkRequestErrors operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllWorkRequestErrorsResponses(
    request: requests.ListWorkRequestErrorsRequest
  ): AsyncIterableIterator<responses.ListWorkRequestErrorsResponse> {
    return paginateResponses(request, req => this.listWorkRequestErrors(req));
  }

  /**
   * Creates a new async iterator which will iterate over the models.WorkRequestError objects
   * contained in responses from the listWorkRequestErrors operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listWorkRequestErrorsRecordIterator(
    request: requests.ListWorkRequestErrorsRequest
  ): AsyncIterableIterator<model.WorkRequestError> {
    return paginateRecords(request, req => this.listWorkRequestErrors(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listWorkRequestErrors operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listWorkRequestErrorsResponseIterator(
    request: requests.ListWorkRequestErrorsRequest
  ): AsyncIterableIterator<responses.ListWorkRequestErrorsResponse> {
    return paginateResponses(request, req => this.listWorkRequestErrors(req));
  }

  /**
   * Gets the logs for a work request.
   *
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param ListWorkRequestLogsRequest
   * @return ListWorkRequestLogsResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/workrequests/ListWorkRequestLogs.ts.html |here} to see how to use ListWorkRequestLogs API.
   */
  public async listWorkRequestLogs(
    listWorkRequestLogsRequest: requests.ListWorkRequestLogsRequest
  ): Promise<responses.ListWorkRequestLogsResponse> {
    if (this.logger) this.logger.debug("Calling operation WorkRequestClient#listWorkRequestLogs.");
    const operationName = "listWorkRequestLogs";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/workrequests/20160918/WorkRequestLogEntry/ListWorkRequestLogs";
    const pathParams = {
      "{workRequestId}": listWorkRequestLogsRequest.workRequestId
    };

    const queryParams = {
      "limit": listWorkRequestLogsRequest.limit,
      "page": listWorkRequestLogsRequest.page,
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
        bodyKey: "items",
        bodyModel: model.WorkRequestLogEntry,
        type: "Array<model.WorkRequestLogEntry>",
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
   * NOTE: This function is deprecated in favor of listWorkRequestLogsRecordIterator function.
   * Creates a new async iterator which will iterate over the models.WorkRequestLogEntry objects
   * contained in responses from the listWorkRequestLogs operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllWorkRequestLogs(
    request: requests.ListWorkRequestLogsRequest
  ): AsyncIterableIterator<model.WorkRequestLogEntry> {
    return paginateRecords(request, req => this.listWorkRequestLogs(req));
  }

  /**
   * NOTE: This function is deprecated in favor of listWorkRequestLogsResponseIterator function.
   * Creates a new async iterator which will iterate over the responses received from the listWorkRequestLogs operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllWorkRequestLogsResponses(
    request: requests.ListWorkRequestLogsRequest
  ): AsyncIterableIterator<responses.ListWorkRequestLogsResponse> {
    return paginateResponses(request, req => this.listWorkRequestLogs(req));
  }

  /**
   * Creates a new async iterator which will iterate over the models.WorkRequestLogEntry objects
   * contained in responses from the listWorkRequestLogs operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listWorkRequestLogsRecordIterator(
    request: requests.ListWorkRequestLogsRequest
  ): AsyncIterableIterator<model.WorkRequestLogEntry> {
    return paginateRecords(request, req => this.listWorkRequestLogs(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listWorkRequestLogs operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listWorkRequestLogsResponseIterator(
    request: requests.ListWorkRequestLogsRequest
  ): AsyncIterableIterator<responses.ListWorkRequestLogsResponse> {
    return paginateResponses(request, req => this.listWorkRequestLogs(req));
  }

  /**
   * Lists the work requests in a compartment or for a specified resource.
   *
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param ListWorkRequestsRequest
   * @return ListWorkRequestsResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/workrequests/ListWorkRequests.ts.html |here} to see how to use ListWorkRequests API.
   */
  public async listWorkRequests(
    listWorkRequestsRequest: requests.ListWorkRequestsRequest
  ): Promise<responses.ListWorkRequestsResponse> {
    if (this.logger) this.logger.debug("Calling operation WorkRequestClient#listWorkRequests.");
    const operationName = "listWorkRequests";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/workrequests/20160918/WorkRequestSummary/ListWorkRequests";
    const pathParams = {};

    const queryParams = {
      "compartmentId": listWorkRequestsRequest.compartmentId,
      "resourceId": listWorkRequestsRequest.resourceId,
      "limit": listWorkRequestsRequest.limit,
      "page": listWorkRequestsRequest.page
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
        bodyKey: "items",
        bodyModel: model.WorkRequestSummary,
        type: "Array<model.WorkRequestSummary>",
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
   * NOTE: This function is deprecated in favor of listWorkRequestsRecordIterator function.
   * Creates a new async iterator which will iterate over the models.WorkRequestSummary objects
   * contained in responses from the listWorkRequests operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllWorkRequests(
    request: requests.ListWorkRequestsRequest
  ): AsyncIterableIterator<model.WorkRequestSummary> {
    return paginateRecords(request, req => this.listWorkRequests(req));
  }

  /**
   * NOTE: This function is deprecated in favor of listWorkRequestsResponseIterator function.
   * Creates a new async iterator which will iterate over the responses received from the listWorkRequests operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllWorkRequestsResponses(
    request: requests.ListWorkRequestsRequest
  ): AsyncIterableIterator<responses.ListWorkRequestsResponse> {
    return paginateResponses(request, req => this.listWorkRequests(req));
  }

  /**
   * Creates a new async iterator which will iterate over the models.WorkRequestSummary objects
   * contained in responses from the listWorkRequests operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listWorkRequestsRecordIterator(
    request: requests.ListWorkRequestsRequest
  ): AsyncIterableIterator<model.WorkRequestSummary> {
    return paginateRecords(request, req => this.listWorkRequests(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listWorkRequests operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listWorkRequestsResponseIterator(
    request: requests.ListWorkRequestsRequest
  ): AsyncIterableIterator<responses.ListWorkRequestsResponse> {
    return paginateResponses(request, req => this.listWorkRequests(req));
  }
}
