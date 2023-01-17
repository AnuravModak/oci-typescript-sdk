/**
 * Email Delivery API
 * API for the Email Delivery service. Use this API to send high-volume, application-generated
emails. For more information, see [Overview of the Email Delivery Service](/iaas/Content/Email/Concepts/overview.htm).


**Note:** Write actions (POST, UPDATE, DELETE) may take several minutes to propagate and be reflected by the API.
If a subsequent read request fails to reflect your changes, wait a few minutes and try again.

 * OpenAPI spec version: 20170907
 * Contact: email-dev_us_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as ChangeEmailDomainCompartmentRequest from "./change-email-domain-compartment-request";
export import ChangeEmailDomainCompartmentRequest = ChangeEmailDomainCompartmentRequest.ChangeEmailDomainCompartmentRequest;
import * as ChangeSenderCompartmentRequest from "./change-sender-compartment-request";
export import ChangeSenderCompartmentRequest = ChangeSenderCompartmentRequest.ChangeSenderCompartmentRequest;
import * as CreateDkimRequest from "./create-dkim-request";
export import CreateDkimRequest = CreateDkimRequest.CreateDkimRequest;
import * as CreateEmailDomainRequest from "./create-email-domain-request";
export import CreateEmailDomainRequest = CreateEmailDomainRequest.CreateEmailDomainRequest;
import * as CreateSenderRequest from "./create-sender-request";
export import CreateSenderRequest = CreateSenderRequest.CreateSenderRequest;
import * as CreateSuppressionRequest from "./create-suppression-request";
export import CreateSuppressionRequest = CreateSuppressionRequest.CreateSuppressionRequest;
import * as DeleteDkimRequest from "./delete-dkim-request";
export import DeleteDkimRequest = DeleteDkimRequest.DeleteDkimRequest;
import * as DeleteEmailDomainRequest from "./delete-email-domain-request";
export import DeleteEmailDomainRequest = DeleteEmailDomainRequest.DeleteEmailDomainRequest;
import * as DeleteSenderRequest from "./delete-sender-request";
export import DeleteSenderRequest = DeleteSenderRequest.DeleteSenderRequest;
import * as DeleteSuppressionRequest from "./delete-suppression-request";
export import DeleteSuppressionRequest = DeleteSuppressionRequest.DeleteSuppressionRequest;
import * as GetDkimRequest from "./get-dkim-request";
export import GetDkimRequest = GetDkimRequest.GetDkimRequest;
import * as GetEmailDomainRequest from "./get-email-domain-request";
export import GetEmailDomainRequest = GetEmailDomainRequest.GetEmailDomainRequest;
import * as GetSenderRequest from "./get-sender-request";
export import GetSenderRequest = GetSenderRequest.GetSenderRequest;
import * as GetSuppressionRequest from "./get-suppression-request";
export import GetSuppressionRequest = GetSuppressionRequest.GetSuppressionRequest;
import * as GetWorkRequestRequest from "./get-work-request-request";
export import GetWorkRequestRequest = GetWorkRequestRequest.GetWorkRequestRequest;
import * as ListDkimsRequest from "./list-dkims-request";
export import ListDkimsRequest = ListDkimsRequest.ListDkimsRequest;
import * as ListEmailDomainsRequest from "./list-email-domains-request";
export import ListEmailDomainsRequest = ListEmailDomainsRequest.ListEmailDomainsRequest;
import * as ListSendersRequest from "./list-senders-request";
export import ListSendersRequest = ListSendersRequest.ListSendersRequest;
import * as ListSuppressionsRequest from "./list-suppressions-request";
export import ListSuppressionsRequest = ListSuppressionsRequest.ListSuppressionsRequest;
import * as ListWorkRequestErrorsRequest from "./list-work-request-errors-request";
export import ListWorkRequestErrorsRequest = ListWorkRequestErrorsRequest.ListWorkRequestErrorsRequest;
import * as ListWorkRequestLogsRequest from "./list-work-request-logs-request";
export import ListWorkRequestLogsRequest = ListWorkRequestLogsRequest.ListWorkRequestLogsRequest;
import * as ListWorkRequestsRequest from "./list-work-requests-request";
export import ListWorkRequestsRequest = ListWorkRequestsRequest.ListWorkRequestsRequest;
import * as UpdateDkimRequest from "./update-dkim-request";
export import UpdateDkimRequest = UpdateDkimRequest.UpdateDkimRequest;
import * as UpdateEmailDomainRequest from "./update-email-domain-request";
export import UpdateEmailDomainRequest = UpdateEmailDomainRequest.UpdateEmailDomainRequest;
import * as UpdateSenderRequest from "./update-sender-request";
export import UpdateSenderRequest = UpdateSenderRequest.UpdateSenderRequest;
