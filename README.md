
#### TestWrite(channelId,channelName,textData)

Summary: Tests whether a file can be written to the specified directory.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| channelName | The name of the channel. | Yes |
| textData | string | 'Yes' |  |
---

#### TestWrite_1(channelId,channelName,fileDispatcherProperties)

Summary: Tests whether a file can be written to the specified directory.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| channelName | The name of the channel. | Yes |
| fileDispatcherProperties | object | 'Yes' | {"pluginProperties":{"uniqueItems":true,"type":"array","items":{"$ref":"#/components/schemas/ConnectorPluginProperties"}},"destinationConnectorProperties":{"$ref":"#/components/schemas/DestinationConnectorProperties"},"scheme":{"type":"string","enum":["file","ftp","sftp","Amazon S3","smb","webdav"]},"schemeProperties":{"$ref":"#/components/schemas/SchemeProperties"},"host":{"type":"string"},"outputPattern":{"type":"string"},"anonymous":{"type":"boolean"},"username":{"type":"string"},"password":{"type":"string"},"timeout":{"type":"string"},"keepConnectionOpen":{"type":"boolean"},"maxIdleTime":{"type":"string"},"secure":{"type":"boolean"},"passive":{"type":"boolean"},"validateConnection":{"type":"boolean"},"outputAppend":{"type":"boolean"},"errorOnExists":{"type":"boolean"},"temporary":{"type":"boolean"},"binary":{"type":"boolean"},"charsetEncoding":{"type":"string"},"template":{"type":"string"},"name":{"type":"string"},"protocol":{"type":"string"},"purgedProperties":{"type":"object","additionalProperties":{"type":"object"}}} |
---

#### TestRead(channelId,channelName,fileReceiverProperties)

Summary: Tests whether a file can be read from the specified directory.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| channelName | The name of the channel. | Yes |
| fileReceiverProperties | object | 'Yes' | {"pluginProperties":{"uniqueItems":true,"type":"array","items":{"$ref":"#/components/schemas/ConnectorPluginProperties"}},"pollConnectorProperties":{"$ref":"#/components/schemas/PollConnectorProperties"},"sourceConnectorProperties":{"$ref":"#/components/schemas/SourceConnectorProperties"},"scheme":{"type":"string","enum":["file","ftp","sftp","Amazon S3","smb","webdav"]},"schemeProperties":{"$ref":"#/components/schemas/SchemeProperties"},"host":{"type":"string"},"fileFilter":{"type":"string"},"regex":{"type":"boolean"},"directoryRecursion":{"type":"boolean"},"ignoreDot":{"type":"boolean"},"anonymous":{"type":"boolean"},"username":{"type":"string"},"password":{"type":"string"},"timeout":{"type":"string"},"secure":{"type":"boolean"},"passive":{"type":"boolean"},"validateConnection":{"type":"boolean"},"afterProcessingAction":{"type":"string","enum":["None","Move","Delete","After Processing Action"]},"moveToDirectory":{"type":"string"},"moveToFileName":{"type":"string"},"errorReadingAction":{"type":"string","enum":["None","Move","Delete","After Processing Action"]},"errorResponseAction":{"type":"string","enum":["None","Move","Delete","After Processing Action"]},"errorMoveToDirectory":{"type":"string"},"errorMoveToFileName":{"type":"string"},"checkFileAge":{"type":"boolean"},"fileAge":{"type":"string"},"fileSizeMinimum":{"type":"string"},"fileSizeMaximum":{"type":"string"},"ignoreFileSizeMaximum":{"type":"boolean"},"sortBy":{"type":"string"},"binary":{"type":"boolean"},"charsetEncoding":{"type":"string"},"name":{"type":"string"},"protocol":{"type":"string"},"purgedProperties":{"type":"object","additionalProperties":{"type":"object"}}} |
---

#### TestConnection(channelId,channelName,httpDispatcherProperties)

Summary: Tests whether a connection can be successfully established to the destination endpoint.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| channelName | The name of the channel. | Yes |
| httpDispatcherProperties | object | 'Yes' | {"pluginProperties":{"uniqueItems":true,"type":"array","items":{"$ref":"#/components/schemas/ConnectorPluginProperties"}},"destinationConnectorProperties":{"$ref":"#/components/schemas/DestinationConnectorProperties"},"host":{"type":"string"},"useProxyServer":{"type":"boolean"},"proxyAddress":{"type":"string"},"proxyPort":{"type":"string"},"method":{"type":"string"},"useHeadersVariable":{"type":"boolean"},"headersVariable":{"type":"string"},"useParametersVariable":{"type":"boolean"},"parametersVariable":{"type":"string"},"responseXmlBody":{"type":"boolean"},"responseParseMultipart":{"type":"boolean"},"responseIncludeMetadata":{"type":"boolean"},"responseBinaryMimeTypes":{"type":"string"},"responseBinaryMimeTypesRegex":{"type":"boolean"},"multipart":{"type":"boolean"},"useAuthentication":{"type":"boolean"},"authenticationType":{"type":"string"},"usePreemptiveAuthentication":{"type":"boolean"},"username":{"type":"string"},"password":{"type":"string"},"content":{"type":"string"},"contentType":{"type":"string"},"dataTypeBinary":{"type":"boolean"},"charset":{"type":"string"},"socketTimeout":{"type":"string"},"name":{"type":"string"},"protocol":{"type":"string"},"parametersMap":{"type":"object","additionalProperties":{"type":"array","items":{"type":"string"}}},"headersMap":{"type":"object","additionalProperties":{"type":"array","items":{"type":"string"}}},"purgedProperties":{"type":"object","additionalProperties":{"type":"object"}}} |
---

#### GetTables( {channelId,channelName,driver,username,password,tableNamePattern,selectLimit,resourceId})

Summary: Executes a query to retrieve database table metadata.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| channelName | The name of the channel. | Yes |
| driver | The JDBC driver class to use. (ex: org.postgresql.Driver) | Yes |
| url | The JDBC connection URL to use. (ex: jdbc:postgresql://localhost:5432/mirthdb) | Yes |
| username | The username to authenticate with. | No |
| password | The password to authenticate with. | No |
| tableNamePattern | If specified, filters by table name. Wildcards (* or %) are allowed. | No |
| selectLimit | A simple query to use to retrieve database metadata information. | No |
| resourceId | Library resource IDs to use, if a custom driver is necessary. | No |
---

#### GetTemplate(templateName)

Summary: Retrieves a single JMS connector settings template.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| templateName | The name of the template. | Yes |
---

#### SaveTemplate(templateName,jmsConnectorProperties)

Summary: Creates or updates a JMS connector settings template.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| templateName | The name of the template. | Yes |
| jmsConnectorProperties | object | 'Yes' | {"pluginProperties":{"uniqueItems":true,"type":"array","items":{"$ref":"#/components/schemas/ConnectorPluginProperties"}},"useJndi":{"type":"boolean"},"jndiProviderUrl":{"type":"string"},"jndiInitialContextFactory":{"type":"string"},"jndiConnectionFactoryName":{"type":"string"},"connectionFactoryClass":{"type":"string"},"connectionProperties":{"type":"object","additionalProperties":{"type":"string"}},"username":{"type":"string"},"password":{"type":"string"},"destinationName":{"type":"string"},"topic":{"type":"boolean"},"clientId":{"type":"string"},"name":{"type":"string"},"protocol":{"type":"string"},"purgedProperties":{"type":"object","additionalProperties":{"type":"object"}}} |
---

#### DeleteTemplate(templateName)

Summary: Creates or updates a JMS connector settings template.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| templateName | The name of the template. | Yes |
---

#### GetTemplates()

Summary: Retrieves JMS connector settings templates.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### SendTestEmail(channelId,channelName,smtpDispatcherProperties)

Summary: Sends a test e-mail, replacing any connector properties first.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| channelName | The name of the channel. | Yes |
| smtpDispatcherProperties | object | 'Yes' | {"pluginProperties":{"uniqueItems":true,"type":"array","items":{"$ref":"#/components/schemas/ConnectorPluginProperties"}},"destinationConnectorProperties":{"$ref":"#/components/schemas/DestinationConnectorProperties"},"smtpHost":{"type":"string"},"smtpPort":{"type":"string"},"overrideLocalBinding":{"type":"boolean"},"localAddress":{"type":"string"},"localPort":{"type":"string"},"timeout":{"type":"string"},"encryption":{"type":"string"},"authentication":{"type":"boolean"},"username":{"type":"string"},"password":{"type":"string"},"to":{"type":"string"},"from":{"type":"string"},"cc":{"type":"string"},"bcc":{"type":"string"},"replyTo":{"type":"string"},"headersVariable":{"type":"string"},"subject":{"type":"string"},"charsetEncoding":{"type":"string"},"html":{"type":"boolean"},"body":{"type":"string"},"attachmentsVariable":{"type":"string"},"name":{"type":"string"},"protocol":{"type":"string"},"useAttachmentsVariable":{"type":"boolean"},"useHeadersVariable":{"type":"boolean"},"headersMap":{"type":"object","additionalProperties":{"type":"string"}},"attachmentsList":{"type":"array","items":{"$ref":"#/components/schemas/Attachment"}},"purgedProperties":{"type":"object","additionalProperties":{"type":"object"}}} |
---

#### TestConnection_1(channelId,channelName,tcpDispatcherProperties)

Summary: Tests whether a connection can be successfully established to the destination endpoint.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| channelName | The name of the channel. | Yes |
| tcpDispatcherProperties | object | 'Yes' | {"pluginProperties":{"uniqueItems":true,"type":"array","items":{"$ref":"#/components/schemas/ConnectorPluginProperties"}},"destinationConnectorProperties":{"$ref":"#/components/schemas/DestinationConnectorProperties"},"transmissionModeProperties":{"$ref":"#/components/schemas/TransmissionModeProperties"},"serverMode":{"type":"boolean"},"remoteAddress":{"type":"string"},"remotePort":{"type":"string"},"overrideLocalBinding":{"type":"boolean"},"localAddress":{"type":"string"},"localPort":{"type":"string"},"sendTimeout":{"type":"string"},"bufferSize":{"type":"string"},"maxConnections":{"type":"string"},"keepConnectionOpen":{"type":"boolean"},"checkRemoteHost":{"type":"boolean"},"responseTimeout":{"type":"string"},"ignoreResponse":{"type":"boolean"},"queueOnResponseTimeout":{"type":"boolean"},"dataTypeBinary":{"type":"boolean"},"charsetEncoding":{"type":"string"},"template":{"type":"string"},"name":{"type":"string"},"protocol":{"type":"string"},"purgedProperties":{"type":"object","additionalProperties":{"type":"object"}}} |
---

#### GetDefinition(channelId,channelName,wsdlUrl)

Summary: Retrieves the definition service map corresponding to the specified WSDL.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### TestConnection_2(channelId,channelName,webServiceDispatcherProperties)

Summary: Tests whether a connection can be successfully established to the destination endpoint.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| channelName | The name of the channel. | Yes |
| webServiceDispatcherProperties | object | 'Yes' | {"pluginProperties":{"uniqueItems":true,"type":"array","items":{"$ref":"#/components/schemas/ConnectorPluginProperties"}},"destinationConnectorProperties":{"$ref":"#/components/schemas/DestinationConnectorProperties"},"wsdlUrl":{"type":"string"},"service":{"type":"string"},"port":{"type":"string"},"operation":{"type":"string"},"locationURI":{"type":"string"},"socketTimeout":{"type":"string"},"useAuthentication":{"type":"boolean"},"username":{"type":"string"},"password":{"type":"string"},"envelope":{"type":"string"},"oneWay":{"type":"boolean"},"headersVariable":{"type":"string"},"useMtom":{"type":"boolean"},"attachmentNames":{"type":"array","items":{"type":"string"}},"attachmentContents":{"type":"array","items":{"type":"string"}},"attachmentTypes":{"type":"array","items":{"type":"string"}},"attachmentsVariable":{"type":"string"},"soapAction":{"type":"string"},"wsdlDefinitionMap":{"$ref":"#/components/schemas/DefinitionServiceMap"},"name":{"type":"string"},"protocol":{"type":"string"},"useAttachmentsVariable":{"type":"boolean"},"useHeadersVariable":{"type":"boolean"},"headersMap":{"type":"object","additionalProperties":{"type":"array","items":{"type":"string"}}},"purgedProperties":{"type":"object","additionalProperties":{"type":"object"}}} |
---

#### CacheWsdlFromUrl(channelId,channelName,webServiceDispatcherProperties)

Summary: Downloads the WSDL at the specified URL and caches the web service definition tree.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| channelName | The name of the channel. | Yes |
| webServiceDispatcherProperties | object | 'Yes' | {"pluginProperties":{"uniqueItems":true,"type":"array","items":{"$ref":"#/components/schemas/ConnectorPluginProperties"}},"destinationConnectorProperties":{"$ref":"#/components/schemas/DestinationConnectorProperties"},"wsdlUrl":{"type":"string"},"service":{"type":"string"},"port":{"type":"string"},"operation":{"type":"string"},"locationURI":{"type":"string"},"socketTimeout":{"type":"string"},"useAuthentication":{"type":"boolean"},"username":{"type":"string"},"password":{"type":"string"},"envelope":{"type":"string"},"oneWay":{"type":"boolean"},"headersVariable":{"type":"string"},"useMtom":{"type":"boolean"},"attachmentNames":{"type":"array","items":{"type":"string"}},"attachmentContents":{"type":"array","items":{"type":"string"}},"attachmentTypes":{"type":"array","items":{"type":"string"}},"attachmentsVariable":{"type":"string"},"soapAction":{"type":"string"},"wsdlDefinitionMap":{"$ref":"#/components/schemas/DefinitionServiceMap"},"name":{"type":"string"},"protocol":{"type":"string"},"useAttachmentsVariable":{"type":"boolean"},"useHeadersVariable":{"type":"boolean"},"headersMap":{"type":"object","additionalProperties":{"type":"array","items":{"type":"string"}}},"purgedProperties":{"type":"object","additionalProperties":{"type":"object"}}} |
---

#### IsWsdlCached(channelId,channelName,wsdlUrl)

Summary: Returns true if the definition tree for the WSDL is cached by the server.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### GenerateEnvelope(channelId,channelName,wsdlUrl)

Summary: Generate SOAP envelope for a given WSDL operation.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### GetSoapAction(channelId,channelName,wsdlUrl)

Summary: Retrieves the default SOAP Action for a given WSDL operation.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### GetChannelLog(serverId,fetchSize,lastLogId,channelId)

Summary: Retrieves connection logs for a specific channel.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| serverId | The server ID to retrieve logs for. Logs for all servers are retrieved is this parameter is not specified. | No |
| channelId | The channel ID to retrieve logs for. | Yes |
| fetchSize | Specifies the maximum number of log items to return. | Yes |
| lastLogId | The last log ID the client retrieved. Only log items with a greater ID will be returned. | No |
---

#### GetConnectorStateMap(serverId)

Summary: Retrieves all dashboard connector states.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| serverId | The server ID to retrieve connector statuses for. Connector Statuses across all servers are retrieved is this parameter is not specified. | No |
---

#### GetChannelStates()

Summary: Retrieves all dashboard channel states.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### GetChannelState(channelId)

Summary: Retrieves a single dashboard channel state.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The channel ID to return a dashboard status for. | Yes |
---

#### GetAllChannelLogs(serverId,fetchSize,lastLogId)

Summary: Retrieves connection logs for all channels.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| serverId | The server ID to retrieve logs for. Logs for all servers are retrieved is this parameter is not specified. | No |
| fetchSize | Specifies the maximum number of log items to return. | Yes |
| lastLogId | The last log ID the client retrieved. Only log items with a greater ID will be returned. | No |
---

#### Start()

Summary: Starts the data pruner on-demand.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### Stop()

Summary: Stops the data pruner if currently running.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### GetStatusMap()

Summary: Retrieves the current data pruner status.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### GetLibraries(resourceId)

Summary: Retrieves all library URLs for the given directory resource.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| resourceId | The ID of the directory resource. | Yes |
---

#### GetAllMapsPost(includeGlobalMap)

Summary: Retrieves global and/or global channel map information. This is a POST request alternative to GET /maps/all that may be used when there are too many channel IDs to include in the query parameters.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| includeGlobalMap | If true, the global map will be returned. | No |
---

#### GetGlobalChannelMap(channelId)

Summary: Retrieves global channel map information for a single channel.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The ID of the channel to retrieve global channel map information for. | Yes |
---

#### GetAllMaps(channelId,includeGlobalMap)

Summary: Retrieves global and/or global channel map information.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The ID of the channel to retrieve global channel map information for. | No |
| includeGlobalMap | If true, the global map will be returned. | No |
---

#### GetGlobalMap()

Summary: Retrieves global map information.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### GetServerLogs(fetchSize,lastLogId)

Summary: Retrieves server log entries.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| fetchSize | Specifies the maximum number of log items to return. | Yes |
| lastLogId | The last log ID the client retrieved. Only log items with a greater ID will be returned. | No |
---

#### GetAlerts(alertId)

Summary: Retrieves multiple alerts by ID, or all alerts if not specified.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| alertId | The ID of the alert(s). If absent, all alerts will be returned. | No |
---

#### CreateAlert(alertModel)

Summary: Creates a new alert.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| alertModel | object | 'Yes' | {"id":{"type":"string"},"name":{"type":"string"},"enabled":{"type":"boolean"},"trigger":{"$ref":"#/components/schemas/AlertTrigger"},"actionGroups":{"type":"array","items":{"$ref":"#/components/schemas/AlertActionGroup"}},"properties":{"type":"object","additionalProperties":{"type":"object"}},"purgedProperties":{"type":"object","additionalProperties":{"type":"object"}}} |
---

#### GetAlertsPost()

Summary: Retrieves multiple alerts by ID, or all alerts if not specified. This is a POST request alternative to GET /alerts that may be used when there are too many alert IDs to include in the query parameters.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### GetAlertInfo(alertId)

Summary: Returns an AlertInfo object containing the alert model, alert protocol options, and any updated channel summaries.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| alertId | The ID of the alert. | Yes |
---

#### GetAlertInfo_1()

Summary: Returns an AlertInfo object containing alert protocol options and any updated channel summaries.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### GetAlertProtocolOptions()

Summary: Returns all alert protocol options.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### GetAlertStatusList()

Summary: Returns all alert dashboard statuses.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### GetAlert(alertId)

Summary: Retrieves an alert by ID.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| alertId | The ID of the alert. | Yes |
---

#### UpdateAlert(alertId,alertModel)

Summary: Updates the specified alert.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| alertId | The ID of the alert. | Yes |
| alertModel | object | 'Yes' | {"id":{"type":"string"},"name":{"type":"string"},"enabled":{"type":"boolean"},"trigger":{"$ref":"#/components/schemas/AlertTrigger"},"actionGroups":{"type":"array","items":{"$ref":"#/components/schemas/AlertActionGroup"}},"properties":{"type":"object","additionalProperties":{"type":"object"}},"purgedProperties":{"type":"object","additionalProperties":{"type":"object"}}} |
---

#### RemoveAlert(alertId)

Summary: Removes the specified alert.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| alertId | The ID of the alert. | Yes |
---

#### EnableAlert(alertId)

Summary: Enables the specified alert.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| alertId | The ID of the alert. | Yes |
---

#### DisableAlert(alertId)

Summary: Disables the specified alert.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| alertId | The ID of the alert. | Yes |
---

#### GetChannelGroupsPost()

Summary: Retrieve a list of all channel groups, or multiple channel groups by ID. This is a POST request alternative to GET /channelgroups that may be used when there are too many channel group IDs to include in the query parameters.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### GetChannelGroups(channelGroupId)

Summary: Retrieve a list of all channel groups, or multiple channel groups by ID.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelGroupId | The IDs of the channel groups to retrieve. If absent, all groups will be retrieved. | No |
---

#### UpdateChannelGroups(override)

Summary: Updates all channel groups in one request. ("Try it out" doesn't work for this endpoint, but the descriptions are valid. Please use another tool for testing.)

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| override | If true, the channel groups will be updated even if different revisions exist on the server. | No |
---

#### GetChannel(includeCodeTemplateLibraries,channelId)

Summary: Retrieve a single channel by ID.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The ID of the channel to retrieve. | Yes |
| includeCodeTemplateLibraries | If true, code template libraries will be included in the channel. | No |
---

#### UpdateChannel(override,channelId,channel)

Summary: Updates the specified channel.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The ID of the channel to update. | Yes |
| override | If true, the channel will be updated even if a different revision exists on the server. | No |
| channel | object | 'Yes' | {"id":{"type":"string"},"nextMetaDataId":{"type":"integer","format":"int32"},"name":{"type":"string"},"description":{"type":"string"},"revision":{"type":"integer","format":"int32"},"sourceConnector":{"$ref":"#/components/schemas/Connector"},"destinationConnectors":{"type":"array","items":{"$ref":"#/components/schemas/Connector"}},"preprocessingScript":{"type":"string"},"postprocessingScript":{"type":"string"},"deployScript":{"type":"string"},"undeployScript":{"type":"string"},"properties":{"$ref":"#/components/schemas/ChannelProperties"},"exportData":{"$ref":"#/components/schemas/ChannelExportData"},"purgedProperties":{"type":"object","additionalProperties":{"type":"object"}},"enabledDestinationConnectors":{"type":"array","items":{"$ref":"#/components/schemas/Connector"}}} |
---

#### RemoveChannel(channelId)

Summary: Removes the channel with the specified ID.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The ID of the channel to remove. | Yes |
---

#### RemoveChannelsPost()

Summary: Removes the channels with the specified IDs. This is a POST request alternative to DELETE /channels that may be used when there are too many channel IDs to include in the query parameters.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### GetChannelsPost(pollingOnly,includeCodeTemplateLibraries)

Summary: Retrieve a list of all channels, or multiple channels by ID. This is a POST request alternative to GET /channels that may be used when there are too many channel IDs to include in the query parameters.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| pollingOnly | If true, only channels with polling source connectors will be returned. | No |
| includeCodeTemplateLibraries | If true, code template libraries will be included in the channel. | No |
---

#### GetChannelIdsAndNames()

Summary: Returns a map of all channel IDs and names.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### GetChannels(channelId,pollingOnly,includeCodeTemplateLibraries)

Summary: Retrieve a list of all channels, or multiple channels by ID.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The IDs of the channels to retrieve. If absent, all channels will be retrieved. | No |
| pollingOnly | If true, only channels with polling source connectors will be returned. | No |
| includeCodeTemplateLibraries | If true, code template libraries will be included in the channel. | No |
---

#### CreateChannel(channel)

Summary: Creates a new channel.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channel | object | 'Yes' | {"id":{"type":"string"},"nextMetaDataId":{"type":"integer","format":"int32"},"name":{"type":"string"},"description":{"type":"string"},"revision":{"type":"integer","format":"int32"},"sourceConnector":{"$ref":"#/components/schemas/Connector"},"destinationConnectors":{"type":"array","items":{"$ref":"#/components/schemas/Connector"}},"preprocessingScript":{"type":"string"},"postprocessingScript":{"type":"string"},"deployScript":{"type":"string"},"undeployScript":{"type":"string"},"properties":{"$ref":"#/components/schemas/ChannelProperties"},"exportData":{"$ref":"#/components/schemas/ChannelExportData"},"purgedProperties":{"type":"object","additionalProperties":{"type":"object"}},"enabledDestinationConnectors":{"type":"array","items":{"$ref":"#/components/schemas/Connector"}}} |
---

#### RemoveChannels(channelId)

Summary: Removes the channels with the specified IDs.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The IDs of the channels to remove. | Yes |
---

#### GetMetaDataColumns(channelId)

Summary: Returns all metadata columns for a channel.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
---

#### GetChannelSummary(ignoreNewChannels)

Summary: Returns a list of channel summaries, indicating to a client which channels have changed (been updated, deleted, undeployed, etc.). If a channel was modified, the entire Channel object will be returned.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| ignoreNewChannels | If true, summaries will only be returned for channels in the map's entry set. | Yes |
---

#### SetChannelEnabled(enabled)

Summary: Enables/disables the specified channels. ("Try it Out" only works when submitting an array containing one element for this endpoint, but the descriptions are valid. If you want to modify multiple items at once, please use another tool for testing.)

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### SetChannelEnabled_1(channelId,enabled)

Summary: Enables/disables the specified channel.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| enabled | The enabled flag (true/false) to set. | Yes |
---

#### SetChannelInitialState(initialState)

Summary: Sets the initial state for the specified channels. ("Try it Out" only works when submitting an array containing one element for this endpoint, but the descriptions are valid. If you want to modify multiple items at once, please use another tool for testing.)

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### SetChannelInitialState_1(channelId,initialState)

Summary: Sets the initial state for a single channel.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| initialState | The initial state of the channel. | Yes |
---

#### GetConnectorNames(channelId)

Summary: Returns all connector names for a channel.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
---

#### ClearAllStatistics()

Summary: Clears all statistics (including lifetime) for all channels/connectors.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### GetStatisticsPost()

Summary: Returns the Statistics for all channels. This is a POST request alternative to GET /statistics that may be used when there are too many channel IDs to include in the query parameters.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### ClearStatistics(received,filtered,sent,error)

Summary: Clears the statistics for the given channels and/or connectors.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| received | If true, received stats will be cleared. | No |
| filtered | If true, filtered stats will be cleared. | No |
| sent | If true, sent stats will be cleared. | No |
| error | If true, error stats will be cleared. | No |
---

#### GetStatistics(channelId,includeUndeployed,includeMetadataId,excludeMetadataId,aggregateStats)

Summary: Returns the Statistics for all channels.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The IDs of the channels to retrieve. If absent, all channels will be retrieved. | No |
| includeUndeployed | If true, statistics for undeployed channels will also be included. | No |
| includeMetadataId | The ids of connectors to include. Cannot include and exclude connectors. | No |
| excludeMetadataId | The ids of connectors to exclude. Cannot include and exclude connectors. | No |
| aggregateStats | If true, statistics will be aggregated into one result | No |
---

#### GetStatistics_1(channelId)

Summary: Returns the Statistics for the channel with the specified id.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The ID of the channel to retrieve statistics for. | Yes |
---

#### StopChannel(returnErrors,channelId)

Summary: Stops the channel with the specified ID.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The channel ID to stop. | Yes |
| returnErrors | If true, an error response code and the exception will be returned. | No |
---

#### HaltChannel(returnErrors,channelId)

Summary: Halts the channel with the specified ID.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The channel ID to halt. | Yes |
| returnErrors | If true, an error response code and the exception will be returned. | No |
---

#### PauseChannel(returnErrors,channelId)

Summary: Pauses the channel with the specified ID.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The channel ID to pause. | Yes |
| returnErrors | If true, an error response code and the exception will be returned. | No |
---

#### ResumeChannel(returnErrors,channelId)

Summary: Resumes the channel with the specified ID.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The channel ID to resume. | Yes |
| returnErrors | If true, an error response code and the exception will be returned. | No |
---

#### StartConnectors(returnErrors)

Summary: Starts the connectors with the specified channel and metadata IDs.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| returnErrors | If true, an error response code and the exception will be returned. | No |
---

#### GetChannelStatusListPost(filter,includeUndeployed)

Summary: Returns all channel dashboard statuses, or multiple statuses by channel ID. This is a POST request alternative to GET /statuses that may be used when there are too many channel IDs to include in the query parameters.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| filter | The filter string to limit dashboard statuses with. | No |
| includeUndeployed | If true, statuses for undeployed channels will also be included. | No |
---

#### GetDashboardChannelInfo(fetchSize,filter)

Summary: Returns a DashboardChannelInfo object containing a partial channel status list and a set of remaining channel IDs.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| fetchSize | Specifies the maximum number of statuses to return. | Yes |
| filter | The filter string to limit dashboard statuses with. | No |
---

#### StartChannel(returnErrors,channelId)

Summary: Starts the channel with the specified ID.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The channel ID to start. | Yes |
| returnErrors | If true, an error response code and the exception will be returned. | No |
---

#### StopConnectors(returnErrors)

Summary: Stops the connectors with the specified channel and metadata IDs.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| returnErrors | If true, an error response code and the exception will be returned. | No |
---

#### StartChannels(returnErrors,channelId)

Summary: Starts the channels with the specified IDs. ("Try it Out" only works when submitting an array containing one element for this endpoint, but the descriptions are valid. If you want to modify multiple items at once, please use another tool for testing.)

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| returnErrors | If true, an error response code and the exception will be returned. | No |
---

#### StopChannels(returnErrors,channelId)

Summary: Stops the channels with the specified IDs. ("Try it Out" only works when submitting an array containing one element for this endpoint, but the descriptions are valid. If you want to modify multiple items at once, please use another tool for testing.)

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| returnErrors | If true, an error response code and the exception will be returned. | No |
---

#### PauseChannels(returnErrors,channelId)

Summary: Pauses the channels with the specified IDs. ("Try it Out" only works when submitting an array containing one element for this endpoint, but the descriptions are valid. If you want to modify multiple items at once, please use another tool for testing.)

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| returnErrors | If true, an error response code and the exception will be returned. | No |
---

#### ResumeChannels(returnErrors,channelId)

Summary: Resume the channels with the specified IDs. ("Try it Out" only works when submitting an array containing one element for this endpoint, but the descriptions are valid. If you want to modify multiple items at once, please use another tool for testing.)

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| returnErrors | If true, an error response code and the exception will be returned. | No |
---

#### StartConnector(returnErrors,channelId,metaDataId)

Summary: Starts the connector with the specified channel and metadata ID.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The channel ID to start a connector for. | Yes |
| metaDataId | The connector metadata ID to start. | Yes |
| returnErrors | If true, an error response code and the exception will be returned. | No |
---

#### StopConnector(returnErrors,channelId,metaDataId)

Summary: Stops the connector with the specified channel and metadata ID.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The channel ID to stop a connector for. | Yes |
| metaDataId | The connector metadata ID to stop. | Yes |
| returnErrors | If true, an error response code and the exception will be returned. | No |
---

#### HaltChannels(returnErrors,channelId)

Summary: Halts the channels with the specified IDs. ("Try it Out" only works when submitting an array containing one element for this endpoint, but the descriptions are valid. If you want to modify multiple items at once, please use another tool for testing.)

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| returnErrors | If true, an error response code and the exception will be returned. | No |
---

#### GetChannelStatus(channelId)

Summary: Returns the dashboard status for a single channel ID.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The channel ID to return a dashboard status for. | Yes |
---

#### GetChannelStatusList(channelId,filter,includeUndeployed)

Summary: Returns all channel dashboard statuses, or multiple statuses by channel ID.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The channel IDs to return dashboard statuses for. If absent, all statuses will be returned. | No |
| filter | The filter string to limit dashboard statuses with. | No |
| includeUndeployed | If true, statuses for undeployed channels will also be included. | No |
---

#### GetCodeTemplateLibrary(includeCodeTemplates,libraryId)

Summary: Retrieves a single code template library.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| libraryId | The ID of the library to retrieve. | Yes |
| includeCodeTemplates | If true, full code templates will be included inside each library. | No |
---

#### GetCodeTemplateLibraries(libraryId,includeCodeTemplates)

Summary: Retrieves multiple code template libraries by ID, or all libraries if not specified.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| libraryId | The ID of the library(s) to retrieve. | No |
| includeCodeTemplates | If true, full code templates will be included inside each library. | No |
---

#### UpdateCodeTemplateLibraries(override)

Summary: Replaces all code template libraries.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| override | If true, the code template library will be updated even if a different revision exists on the server. | No |
---

#### GetCodeTemplateLibrariesPost(includeCodeTemplates)

Summary: Retrieves multiple code template libraries by ID, or all libraries if not specified. This is a POST request alternative to GET /codeTemplateLibraries that may be used when there are too many library IDs to include in the query parameters.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| includeCodeTemplates | If true, full code templates will be included inside each library. | No |
---

#### GetCodeTemplatesPost()

Summary: Retrieves multiple code templates by ID, or all templates if not specified. This is a POST request alternative to GET /codeTemplates that may be used when there are too many code template IDs to include in the query parameters.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### GetCodeTemplate(codeTemplateId)

Summary: Retrieves a single code template.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| codeTemplateId | The ID of the code template to retrieve. | Yes |
---

#### UpdateCodeTemplate(override,codeTemplateId,codeTemplate)

Summary: Updates a single code template.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| codeTemplateId | The ID of the code template. | Yes |
| override | If true, the code template will be updated even if a different revision exists on the server. | No |
| codeTemplate | object | 'Yes' | {"id":{"type":"string"},"name":{"type":"string"},"revision":{"type":"integer","format":"int32"},"lastModified":{"type":"string","format":"date-time"},"contextSet":{"uniqueItems":true,"type":"array","properties":{"empty":{"type":"boolean"}},"items":{"type":"string","enum":["Global Deploy","Global Undeploy","Global Preprocessor","Global Postprocessor","Channel Deploy","Channel Undeploy","Channel Preprocessor","Channel Postprocessor","Channel Attachment","Channel Batch","Source Receiver","Source Filter Transformer","Destination Filter Transformer","Destination Dispatcher","Destination Response Transformer"]}},"properties":{"$ref":"#/components/schemas/CodeTemplateProperties"},"type":{"type":"string","enum":["Function","Drag-and-Drop Code Block","Compiled Code Block"]},"description":{"type":"string"},"code":{"type":"string"},"purgedProperties":{"type":"object","additionalProperties":{"type":"object"}},"addToScripts":{"type":"boolean"},"functionDefinition":{"$ref":"#/components/schemas/CodeTemplateFunctionDefinition"}} |
---

#### RemoveCodeTemplate(codeTemplateId)

Summary: Removes a single code template.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| codeTemplateId | The ID of the code template. | Yes |
---

#### GetCodeTemplates(codeTemplateId)

Summary: Retrieves multiple code templates by ID, or all templates if not specified.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| codeTemplateId | The ID of the code template(s) to retrieve. | No |
---

#### GetCodeTemplateSummary()

Summary: Returns a list of code template summaries, indicating to a client which code templates have changed. If a code template was modified, the entire CodeTemplate object will be returned.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### UpdateLibrariesAndTemplates(override)

Summary: Updates all libraries and updates/removes selected code templates in one request. ("Try it out" doesn't work for this endpoint, but the descriptions are valid. Please use another tool for testing.)

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| override | If true, the libraries and code templates will be updated even if different revisions exist on the server. | No |
---

#### GetResources()

Summary: Returns all resources for the server.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### SetResources()

Summary: Updates all resources for the server.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### GetVersion()

Summary: Returns the version of the Mirth Connect server.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### GetJVMName()

Summary: Returns the name of the JVM running Mirth Connect.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### GetAbout()

Summary: Returns a map of common information about the Mirth Connect server.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### GetLicenseInfo()

Summary: Returns a LicenseInfo object with the expiration date and other information.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### GetGuid()

Summary: Returns a globally unique id.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### GetProtocolsAndCipherSuites()

Summary: Returns a map containing all supported and enabled TLS protocols and cipher suites.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### GetStatus()

Summary: Returns the status of the Mirth Connect server.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### GetServerId()

Summary: Returns the server id.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### GetUpdateSettings()

Summary: Returns an UpdateSettings object with all update settings.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### SetUpdateSettings(updateSettings)

Summary: Updates the update settings.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| updateSettings | object | 'Yes' | {"statsEnabled":{"type":"boolean"},"lastStatsTime":{"type":"integer","format":"int64"},"properties":{"type":"object","additionalProperties":{"type":"string"}},"purgedProperties":{"type":"object","additionalProperties":{"type":"object"}}} |
---

#### GetConfigurationMap()

Summary: Returns all entries in the configuration map.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### SetConfigurationMap()

Summary: Updates all entries in the configuration map.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### GetServerSettings()

Summary: Returns a ServerSettings object with all server settings.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### SetServerSettings(serverSettings)

Summary: Updates the server configuration settings.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| serverSettings | object | 'Yes' | {"environmentName":{"type":"string"},"serverName":{"type":"string"},"clearGlobalMap":{"type":"boolean"},"queueBufferSize":{"type":"integer","format":"int32"},"defaultMetaDataColumns":{"type":"array","items":{"$ref":"#/components/schemas/MetaDataColumn"}},"defaultAdministratorBackgroundColor":{"type":"object","properties":{"red":{"type":"integer","format":"int32"},"green":{"type":"integer","format":"int32"},"blue":{"type":"integer","format":"int32"},"alpha":{"type":"integer","format":"int32"},"rgb":{"type":"integer","format":"int32"},"colorSpace":{"type":"object","properties":{"type":{"type":"integer","format":"int32"},"numComponents":{"type":"integer","format":"int32"},"cs_sRGB":{"type":"boolean"}}},"transparency":{"type":"integer","format":"int32"}}},"smtpHost":{"type":"string"},"smtpPort":{"type":"string"},"smtpTimeout":{"type":"string"},"smtpFrom":{"type":"string"},"smtpSecure":{"type":"string"},"smtpAuth":{"type":"boolean"},"smtpUsername":{"type":"string"},"smtpPassword":{"type":"string"},"loginNotificationEnabled":{"type":"boolean"},"loginNotificationMessage":{"type":"string"},"administratorAutoLogoutIntervalEnabled":{"type":"boolean"},"administratorAutoLogoutIntervalField":{"type":"integer","format":"int32"},"properties":{"type":"object","additionalProperties":{"type":"string"}},"purgedProperties":{"type":"object","additionalProperties":{"type":"object"}}} |
---

#### GetChannelMetadata()

Summary: Returns all channel metadata for the server.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### SetChannelMetadata()

Summary: Updates all channel metadata for the server.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### GetChannelTags()

Summary: Returns a set containing all channel tags for the server.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### SetChannelTags()

Summary: Updates all channel tags.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### GetGlobalScripts()

Summary: Returns a map containing all of the global scripts.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### SetGlobalScripts()

Summary: Updates all of the global scripts.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### GetChannelDependencies()

Summary: Returns all channel dependencies for the server.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### SetChannelDependencies()

Summary: Updates all channel dependencies for the server.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### GetRhinoLanguageVersion()

Summary: Returns the language version that the Rhino engine should use.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### GetServerTimezone()

Summary: Returns the time zone of the server.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### GetServerTime()

Summary: Returns the time of the server.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### GetAvailableCharsetEncodings()

Summary: Returns a List of all of the charset encodings supported by the server.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### GetPublicServerSettings()

Summary: Returns a PublicServerSettings object containing server settings available to all users.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### GetEncryptionSettings()

Summary: Returns an EncryptionSettings object with all encryption settings.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### GetDatabaseDrivers()

Summary: Returns the database driver list.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### SetDatabaseDrivers()

Summary: Updates the list of database drivers.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### GetBuildDate()

Summary: Returns the build date of the Mirth Connect server.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### GetServerConfiguration(initialState,pollingOnly,disableAlerts)

Summary: Returns a ServerConfiguration object which contains all of the channels, alerts, configuration map, and properties stored on the Mirth Connect server.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| initialState | The initial state to set all channels in the configuration to. | No |
| pollingOnly | If true, and the initialState parameter is set, only channels with polling source connectors will have their initial states overwritten in the returned server configuration. | No |
| disableAlerts | If true, all alerts returned in the server configuration will be disabled. | No |
---

#### SetServerConfiguration(deploy,overwriteConfigMap,serverConfiguration)

Summary: Updates all of the channels, alerts and properties stored on the Mirth Connect server.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| deploy | If true, all enabled channels will be deployed after the configuration is restored. | No |
| overwriteConfigMap | If true, overwrite the Configuration Map | No |
| serverConfiguration | object | 'Yes' | {"date":{"type":"string"},"channelGroups":{"type":"array","items":{"$ref":"#/components/schemas/ChannelGroup"}},"channels":{"type":"array","items":{"$ref":"#/components/schemas/Channel"}},"channelTags":{"uniqueItems":true,"type":"array","items":{"$ref":"#/components/schemas/ChannelTag"}},"users":{"type":"array","items":{"$ref":"#/components/schemas/User"}},"alerts":{"type":"array","items":{"$ref":"#/components/schemas/AlertModel"}},"codeTemplateLibraries":{"type":"array","items":{"$ref":"#/components/schemas/CodeTemplateLibrary"}},"serverSettings":{"$ref":"#/components/schemas/ServerSettings"},"updateSettings":{"$ref":"#/components/schemas/UpdateSettings"},"globalScripts":{"type":"object","additionalProperties":{"type":"string"}},"pluginProperties":{"type":"object","additionalProperties":{"type":"object","additionalProperties":{"type":"string"}}},"resourceProperties":{"$ref":"#/components/schemas/ResourcePropertiesList"},"channelDependencies":{"uniqueItems":true,"type":"array","items":{"$ref":"#/components/schemas/ChannelDependency"}},"configurationMap":{"type":"object","additionalProperties":{"$ref":"#/components/schemas/ConfigurationProperty"}}} |
---

#### GetPasswordRequirements()

Summary: Returns all password requirements for the server.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### SendTestEmail_1()

Summary: Sends a test e-mail.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### ReloadResource(resourceId)

Summary: Reloads a resource and all libraries associated with it.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| resourceId | The unique ID of the resource to reload. | Yes |
---

#### GetDatabaseTasks()

Summary: Retrieves all current database tasks.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### GetDatabaseTask(databaseTaskId)

Summary: Retrieves a single database task.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| databaseTaskId | The ID of the database task. | Yes |
---

#### RunDatabaseTask(databaseTaskId)

Summary: Executes the specified database task.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| databaseTaskId | The ID of the database task. | Yes |
---

#### CancelDatabaseTask(databaseTaskId)

Summary: Cancels execution of the specified database task.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| databaseTaskId | The ID of the database task. | Yes |
---

#### DeployChannel(returnErrors,debugOptions,channelId)

Summary: Deploys (or redeploys) a single channel.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The ID of the channel to deploy. | Yes |
| returnErrors | If true, an error response code and the exception will be returned. | No |
| debugOptions | If present, the channel will deploy in debug mode and use these options. The input should be a comma-separated list of 't' and 'f' values that indicate whether to debug Deploy/Undeploy/Preprocessor/Postprocessor scripts, Attachment/Batch scripts, Source Connectors scripts, Source Filter/Transformer scripts, Destination Filter/Transformer scripts, Destination Connector scripts, and Destination Response Transformer scripts, in that order. Example: "f,f,f,f,f,f,f") | No |
---

#### UndeployChannel(returnErrors,channelId)

Summary: Undeploys a single channel.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The ID of the channel to undeploy. | Yes |
| returnErrors | If true, an error response code and the exception will be returned. | No |
---

#### DeployChannels(returnErrors)

Summary: Deploys (or redeploys) selected channels.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| returnErrors | If true, an error response code and the exception will be returned. | No |
---

#### UndeployChannels(returnErrors)

Summary: Undeploys selected channels.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| returnErrors | If true, an error response code and the exception will be returned. | No |
---

#### RedeployAllChannels(returnErrors)

Summary: Redeploys all channels.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| returnErrors | If true, an error response code and the exception will be returned. | No |
---

#### GetEvent(eventId)

Summary: Retrieves an event by ID.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| eventId | The ID of the event. | Yes |
---

#### GetMaxEventId()

Summary: Returns the maximum event ID currently in the database.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### GetEvents( {maxEventId,minEventId,level,startDate,endDate,name,outcome,userId,attributeSearch,ipAddress,serverId,offset,limit})

Summary: Search for events by specific filter criteria.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| maxEventId | The maximum event ID to query. | No |
| minEventId | The minimum event ID to query. | No |
| level | The type of events to query. | No |
| startDate | The earliest event date to query by. Example: 1985-10-26T09:00:00.000-0700 | No |
| endDate | The latest event date to query by. Example: 2015-10-21T07:28:00.000-0700 | No |
| name | Searches the event name for this string. | No |
| outcome | Searches on whether the event outcome was successful or not. | No |
| userId | The user ID to query events by. | No |
| attributeSearch | Searches the attributes for this string. | No |
| ipAddress | The IP address that originated the event. | No |
| serverId | The ID of the server that the event was created from. | No |
| offset | Used for pagination, determines where to start in the search results. | No |
| limit | Used for pagination, determines the maximum number of results to return. | No |
---

#### RemoveAllEvents()

Summary: Remove all events.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| export | If true, messages will be exported into the application data directory on the server before being removed. | No |
---

#### GetEvents_1(offset,limit,eventFilter)

Summary: Search for events by specific filter criteria.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| offset | Used for pagination, determines where to start in the search results. | No |
| limit | Used for pagination, determines the maximum number of results to return. | No |
| eventFilter | object | 'Yes' | {"maxEventId":{"type":"integer","format":"int32"},"minEventId":{"type":"integer","format":"int32"},"id":{"type":"integer","format":"int32"},"levels":{"uniqueItems":true,"type":"array","items":{"type":"string","enum":["INFORMATION","WARNING","ERROR"]}},"startDate":{"type":"string","format":"date-time"},"endDate":{"type":"string","format":"date-time"},"name":{"type":"string"},"outcome":{"type":"string","enum":["SUCCESS","FAILURE"]},"userId":{"type":"integer","format":"int32"},"attributeSearch":{"type":"string"},"ipAddress":{"type":"string"},"serverId":{"type":"string"}} |
---

#### GetEventCount(eventFilter)

Summary: Count number for events by specific filter criteria.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| eventFilter | object | 'Yes' | {"maxEventId":{"type":"integer","format":"int32"},"minEventId":{"type":"integer","format":"int32"},"id":{"type":"integer","format":"int32"},"levels":{"uniqueItems":true,"type":"array","items":{"type":"string","enum":["INFORMATION","WARNING","ERROR"]}},"startDate":{"type":"string","format":"date-time"},"endDate":{"type":"string","format":"date-time"},"name":{"type":"string"},"outcome":{"type":"string","enum":["SUCCESS","FAILURE"]},"userId":{"type":"integer","format":"int32"},"attributeSearch":{"type":"string"},"ipAddress":{"type":"string"},"serverId":{"type":"string"}} |
---

#### GetEventCount_1( {maxEventId,minEventId,level,startDate,endDate,name,outcome,userId,attributeSearch,ipAddress,serverId})

Summary: Count number for events by specific filter criteria.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| maxEventId | The maximum event ID to query. | No |
| minEventId | The minimum event ID to query. | No |
| level | The type of events to query. | No |
| startDate | The earliest event date to query by. Example: 1985-10-26T09:00:00.000-0700 | No |
| endDate | The latest event date to query by. Example: 2015-10-21T07:28:00.000-0700 | No |
| name | Searches the event name for this string. | No |
| outcome | Searches on whether the event outcome was successful or not. | No |
| userId | The user ID to query events by. | No |
| attributeSearch | Searches the attributes for this string. | No |
| ipAddress | The IP address that originated the event. | No |
| serverId | The ID of the server that the event was created from. | No |
---

#### ExportAllEvents()

Summary: Exports all events to the application data directory on the server.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### InstallExtension()

Summary: Installs an extension.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### UninstallExtension()

Summary: Uninstalls an extension.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### GetExtensionMetaData(extensionName)

Summary: Returns extension metadata by name.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| extensionName | The name of the extension to retrieve. | Yes |
---

#### GetPluginMetaData()

Summary: Returns all active plugin metadata.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### GetConnectorMetaData()

Summary: Returns all active connector metadata.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### GetPluginProperties(propertyKeys,extensionName)

Summary: Returns filtered properties for a specified extension.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| extensionName | The name of the extension to retrieve. | Yes |
| propertyKeys | The set of properties to retrieve. | No |
---

#### SetPluginProperties(mergeProperties,extensionName)

Summary: Sets properties for a specified extension.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| extensionName | undefined | Yes |
| mergeProperties | Merge or replace properties. Defaults to replace. | No |
---

#### IsExtensionEnabled(extensionName)

Summary: Returns the enabled status of an extension.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| extensionName | The name of the extension to retrieve. | Yes |
---

#### SetExtensionEnabled(enabled,extensionName)

Summary: Enables or disables an extension.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| extensionName | The name of the extension to retrieve. | Yes |
| enabled | The new enabled status to set. | Yes |
---

#### GetMessages(includeContent,offset,limit,channelId,messageFilter)

Summary: Search for messages by specific filter criteria.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| includeContent | If true, message content will be returned with the results. | No |
| offset | Used for pagination, determines where to start in the search results. | No |
| limit | Used for pagination, determines the maximum number of results to return. | No |
| messageFilter | object | 'Yes' | {"maxMessageId":{"type":"integer","format":"int64"},"minMessageId":{"type":"integer","format":"int64"},"originalIdUpper":{"type":"integer","format":"int64"},"originalIdLower":{"type":"integer","format":"int64"},"importIdUpper":{"type":"integer","format":"int64"},"importIdLower":{"type":"integer","format":"int64"},"startDate":{"type":"string","format":"date-time"},"endDate":{"type":"string","format":"date-time"},"textSearch":{"type":"string"},"textSearchRegex":{"type":"boolean"},"statuses":{"uniqueItems":true,"type":"array","items":{"type":"string","enum":["RECEIVED","FILTERED","TRANSFORMED","SENT","QUEUED","ERROR","PENDING"]}},"includedMetaDataIds":{"type":"array","items":{"type":"integer","format":"int32"}},"excludedMetaDataIds":{"type":"array","items":{"type":"integer","format":"int32"}},"serverId":{"type":"string"},"contentSearch":{"type":"array","items":{"$ref":"#/components/schemas/ContentSearchElement"}},"metaDataSearch":{"type":"array","items":{"$ref":"#/components/schemas/MetaDataSearchElement"}},"textSearchMetaDataColumns":{"type":"array","items":{"type":"string"}},"sendAttemptsLower":{"type":"integer","format":"int32"},"sendAttemptsUpper":{"type":"integer","format":"int32"},"attachment":{"type":"boolean"},"error":{"type":"boolean"}} |
---

#### GetMessagesByChannelId( {minMessageId,maxMessageId,minOriginalId,maxOriginalId,minImportId,maxImportId,startDate,endDate,textSearch,textSearchRegex,status,includedMetaDataId,excludedMetaDataId,serverId,rawContentSearch,processedRawContentSearch,transformedContentSearch,encodedContentSearch,sentContentSearch,responseContentSearch,responseTransformedContentSearch,processedResponseContentSearch,connectorMapContentSearch,channelMapContentSearch,sourceMapContentSearch,responseMapContentSearch,processingErrorContentSearch,postprocessorErrorContentSearch,responseErrorContentSearch,metaDataSearch,metaDataCaseInsensitiveSearch,textSearchMetaDataColumn,minSendAttempts,maxSendAttempts,attachment,error,includeContent,offset,limit,channelId})

Summary: Search for messages by specific filter criteria.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| minMessageId | The minimum message ID to query. | No |
| maxMessageId | The maximum message ID to query. | No |
| minOriginalId | The minimum original message ID to query. Messages that have been reprocessed will retain their original message ID. | No |
| maxOriginalId | The maximum original message ID to query. Messages that have been reprocessed will retain their original message ID. | No |
| minImportId | The minimum import message ID to query. Messages that have been imported will retain their original message ID under this value. | No |
| maxImportId | The maximum import message ID to query. Messages that have been imported will retain their original message ID under this value. | No |
| startDate | The earliest original received date to query by. Example: 1985-10-26T09:00:00.000-0700 | No |
| endDate | The latest original received date to query by. Example: 2015-10-21T07:28:00.000-0700 | No |
| textSearch | Searches all message content for this string. This process could take a long time depending on the amount of message content currently stored. Any message content that was encrypted by this channel will not be searchable. | No |
| textSearchRegex | If true, text search input will be considered a regular expression pattern to be matched. Only supported by PostgreSQL, MySQL and Oracle databases. | No |
| status | Determines which message statuses to query by. | No |
| includedMetaDataId | If present, only connector metadata IDs in this list will be queried. | No |
| excludedMetaDataId | If present, connector metadata IDs in this list will not be queried. | No |
| serverId | The server ID associated with messages. | No |
| rawContentSearch | Searches the raw content of messages. | No |
| processedRawContentSearch | Searches the processed raw content of messages. | No |
| transformedContentSearch | Searches the transformed content of messages. | No |
| encodedContentSearch | Searches the encoded content of messages. | No |
| sentContentSearch | Searches the sent content of messages. | No |
| responseContentSearch | Searches the response content of messages. | No |
| responseTransformedContentSearch | Searches the response transformed content of messages. | No |
| processedResponseContentSearch | Searches the processed response content of messages. | No |
| connectorMapContentSearch | Searches the connector map content of messages. | No |
| channelMapContentSearch | Searches the channel map content of messages. | No |
| sourceMapContentSearch | Searches the source map content of messages. | No |
| responseMapContentSearch | Searches the response map content of messages. | No |
| processingErrorContentSearch | Searches the processing error content of messages. | No |
| postprocessorErrorContentSearch | Searches the postprocessor error content of messages. | No |
| responseErrorContentSearch | Searches the response error content of messages. | No |
| metaDataSearch | Searches a custom metadata column. Value should be in the form: COLUMN_NAME &lt;operator&gt; value, where operator is one of the following: =, !=, <, <=, >, >=, CONTAINS, DOES NOT CONTAIN, STARTS WITH, DOES NOT START WITH, ENDS WITH, DOES NOT END WITH | No |
| metaDataCaseInsensitiveSearch | Searches a custom metadata column, ignoring case. Value should be in the form: COLUMN_NAME &lt;operator&gt; value. | No |
| textSearchMetaDataColumn | When using a text search, these custom metadata columns will also be searched. | No |
| minSendAttempts | The minimum number of send attempts for connector messages. | No |
| maxSendAttempts | The maximum number of send attempts for connector messages. | No |
| attachment | If true, only messages with attachments are included in the results. | No |
| error | If true, only messages with errors are included in the results. | No |
| includeContent | If true, message content will be returned with the results. | No |
| offset | Used for pagination, determines where to start in the search results. | No |
| limit | Used for pagination, determines the maximum number of results to return. | No |
---

#### ProcessMessage( {destinationMetaDataId,sourceMapEntry,overwrite,imported,originalMessageId,channelId,textData})

Summary: Processes a new message through a channel.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| destinationMetaDataId | Indicates which destinations to send the message to. | No |
| sourceMapEntry | These entries will be injected into the source map for the message. Value should be in the format: key=value | No |
| overwrite | If true and a valid original message ID is given, this message will overwrite the existing one. | No |
| imported | If true, marks this message as being imported. If the message is overwriting an existing one, then statistics will not be decremented. | No |
| originalMessageId | The original message ID this message is associated with. | No |
| textData | string | 'Yes' |  |
---

#### RemoveMessages( {minMessageId,maxMessageId,minOriginalId,maxOriginalId,minImportId,maxImportId,startDate,endDate,textSearch,textSearchRegex,status,includedMetaDataId,excludedMetaDataId,serverId,rawContentSearch,processedRawContentSearch,transformedContentSearch,encodedContentSearch,sentContentSearch,responseContentSearch,responseTransformedContentSearch,processedResponseContentSearch,connectorMapContentSearch,channelMapContentSearch,sourceMapContentSearch,responseMapContentSearch,processingErrorContentSearch,postprocessorErrorContentSearch,responseErrorContentSearch,metaDataSearch,metaDataCaseInsensitiveSearch,textSearchMetaDataColumn,minSendAttempts,maxSendAttempts,attachment,error,channelId})

Summary: Remove messages by specific filter criteria.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| minMessageId | The minimum message ID to query. | No |
| maxMessageId | The maximum message ID to query. | No |
| minOriginalId | The minimum original message ID to query. Messages that have been reprocessed will retain their original message ID. | No |
| maxOriginalId | The maximum original message ID to query. Messages that have been reprocessed will retain their original message ID. | No |
| minImportId | The minimum import message ID to query. Messages that have been imported will retain their original message ID under this value. | No |
| maxImportId | The maximum import message ID to query. Messages that have been imported will retain their original message ID under this value. | No |
| startDate | The earliest original received date to query by. Example: 1985-10-26T09:00:00.000-0700 | No |
| endDate | The latest original received date to query by. Example: 2015-10-21T07:28:00.000-0700 | No |
| textSearch | Searches all message content for this string. This process could take a long time depending on the amount of message content currently stored. Any message content that was encrypted by this channel will not be searchable. | No |
| textSearchRegex | If true, text search input will be considered a regular expression pattern to be matched. Only supported by PostgreSQL, MySQL and Oracle databases. | No |
| status | Determines which message statuses to query by. | No |
| includedMetaDataId | If present, only connector metadata IDs in this list will be queried. | No |
| excludedMetaDataId | If present, connector metadata IDs in this list will not be queried. | No |
| serverId | The server ID associated with messages. | No |
| rawContentSearch | Searches the raw content of messages. | No |
| processedRawContentSearch | Searches the processed raw content of messages. | No |
| transformedContentSearch | Searches the transformed content of messages. | No |
| encodedContentSearch | Searches the encoded content of messages. | No |
| sentContentSearch | Searches the sent content of messages. | No |
| responseContentSearch | Searches the response content of messages. | No |
| responseTransformedContentSearch | Searches the response transformed content of messages. | No |
| processedResponseContentSearch | Searches the processed response content of messages. | No |
| connectorMapContentSearch | Searches the connector map content of messages. | No |
| channelMapContentSearch | Searches the channel map content of messages. | No |
| sourceMapContentSearch | Searches the source map content of messages. | No |
| responseMapContentSearch | Searches the response map content of messages. | No |
| processingErrorContentSearch | Searches the processing error content of messages. | No |
| postprocessorErrorContentSearch | Searches the postprocessor error content of messages. | No |
| responseErrorContentSearch | Searches the response error content of messages. | No |
| metaDataSearch | Searches a custom metadata column. Value should be in the form: COLUMN_NAME &lt;operator&gt; value, where operator is one of the following: =, !=, <, <=, >, >=, CONTAINS, DOES NOT CONTAIN, STARTS WITH, DOES NOT START WITH, ENDS WITH, DOES NOT END WITH | No |
| metaDataCaseInsensitiveSearch | Searches a custom metadata column, ignoring case. Value should be in the form: COLUMN_NAME &lt;operator&gt; value. | No |
| textSearchMetaDataColumn | When using a text search, these custom metadata columns will also be searched. | No |
| minSendAttempts | The minimum number of send attempts for connector messages. | No |
| maxSendAttempts | The maximum number of send attempts for connector messages. | No |
| attachment | If true, only messages with attachments are included in the results. | No |
| error | If true, only messages with errors are included in the results. | No |
---

#### ProcessMessage_1(channelId,rawMessage)

Summary: Processes a new message through a channel, using the RawMessage object.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| rawMessage | object | 'Yes' | {"overwrite":{"type":"boolean"},"imported":{"type":"boolean"},"originalMessageId":{"type":"integer","format":"int64"},"rawData":{"type":"string"},"rawBytes":{"type":"array","items":{"type":"string","format":"byte"}},"destinationMetaDataIds":{"type":"array","items":{"type":"integer","format":"int32"}},"sourceMap":{"type":"object","additionalProperties":{"type":"object"}},"binary":{"type":"boolean"},"attachments":{"type":"array","items":{"$ref":"#/components/schemas/Attachment"}}} |
---

#### GetAttachmentsByMessageId(includeContent,channelId,messageId)

Summary: Retrieve a list of attachments by message ID.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| messageId | The ID of the message. | Yes |
| includeContent | If false, only the attachment ID and type will be returned. | No |
---

#### GetDICOMMessage(channelId,messageId,connectorMessage)

Summary: Given a ConnectorMessage object, reattaches any DICOM attachment data and returns the raw Base64 encoded message data.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| messageId | The ID of the message. | Yes |
| connectorMessage | object | 'Yes' | {"messageId":{"type":"integer","format":"int64"},"metaDataId":{"type":"integer","format":"int32"},"channelId":{"type":"string"},"channelName":{"type":"string"},"connectorName":{"type":"string"},"serverId":{"type":"string"},"receivedDate":{"type":"string","format":"date-time"},"status":{"type":"string","enum":["RECEIVED","FILTERED","TRANSFORMED","SENT","QUEUED","ERROR","PENDING"]},"raw":{"$ref":"#/components/schemas/MessageContent"},"processedRaw":{"$ref":"#/components/schemas/MessageContent"},"transformed":{"$ref":"#/components/schemas/MessageContent"},"encoded":{"$ref":"#/components/schemas/MessageContent"},"sent":{"$ref":"#/components/schemas/MessageContent"},"response":{"$ref":"#/components/schemas/MessageContent"},"responseTransformed":{"$ref":"#/components/schemas/MessageContent"},"processedResponse":{"$ref":"#/components/schemas/MessageContent"},"sourceMapContent":{"$ref":"#/components/schemas/MapContent"},"connectorMapContent":{"$ref":"#/components/schemas/MapContent"},"channelMapContent":{"$ref":"#/components/schemas/MapContent"},"responseMapContent":{"$ref":"#/components/schemas/MapContent"},"metaDataMap":{"type":"object","additionalProperties":{"type":"object"}},"processingErrorContent":{"$ref":"#/components/schemas/ErrorContent"},"postProcessorErrorContent":{"$ref":"#/components/schemas/ErrorContent"},"responseErrorContent":{"$ref":"#/components/schemas/ErrorContent"},"errorCode":{"type":"integer","format":"int32"},"sendAttempts":{"type":"integer","format":"int32"},"sendDate":{"type":"string","format":"date-time"},"responseDate":{"type":"string","format":"date-time"},"chainId":{"type":"integer","format":"int32"},"orderId":{"type":"integer","format":"int32"},"sentProperties":{"$ref":"#/components/schemas/ConnectorProperties"},"queueBucket":{"type":"integer","format":"int32"},"attemptedFirst":{"type":"boolean"},"dispatcherId":{"type":"integer","format":"int64"},"responseMap":{"type":"object","additionalProperties":{"type":"object"}},"connectorMap":{"type":"object","additionalProperties":{"type":"object"}},"channelMap":{"type":"object","additionalProperties":{"type":"object"}},"responseError":{"type":"string"},"processingError":{"type":"string"},"sourceMap":{"type":"object","additionalProperties":{"type":"object"}},"messageContent":{"$ref":"#/components/schemas/MessageContent"},"postProcessorError":{"type":"string"}} |
---

#### GetMessageCount(channelId,messageFilter)

Summary: Count number for messages by specific filter criteria.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| messageFilter | object | 'Yes' | {"maxMessageId":{"type":"integer","format":"int64"},"minMessageId":{"type":"integer","format":"int64"},"originalIdUpper":{"type":"integer","format":"int64"},"originalIdLower":{"type":"integer","format":"int64"},"importIdUpper":{"type":"integer","format":"int64"},"importIdLower":{"type":"integer","format":"int64"},"startDate":{"type":"string","format":"date-time"},"endDate":{"type":"string","format":"date-time"},"textSearch":{"type":"string"},"textSearchRegex":{"type":"boolean"},"statuses":{"uniqueItems":true,"type":"array","items":{"type":"string","enum":["RECEIVED","FILTERED","TRANSFORMED","SENT","QUEUED","ERROR","PENDING"]}},"includedMetaDataIds":{"type":"array","items":{"type":"integer","format":"int32"}},"excludedMetaDataIds":{"type":"array","items":{"type":"integer","format":"int32"}},"serverId":{"type":"string"},"contentSearch":{"type":"array","items":{"$ref":"#/components/schemas/ContentSearchElement"}},"metaDataSearch":{"type":"array","items":{"$ref":"#/components/schemas/MetaDataSearchElement"}},"textSearchMetaDataColumns":{"type":"array","items":{"type":"string"}},"sendAttemptsLower":{"type":"integer","format":"int32"},"sendAttemptsUpper":{"type":"integer","format":"int32"},"attachment":{"type":"boolean"},"error":{"type":"boolean"}} |
---

#### GetMessageCount_1( {minMessageId,maxMessageId,minOriginalId,maxOriginalId,minImportId,maxImportId,startDate,endDate,textSearch,textSearchRegex,status,includedMetaDataId,excludedMetaDataId,serverId,rawContentSearch,processedRawContentSearch,transformedContentSearch,encodedContentSearch,sentContentSearch,responseContentSearch,responseTransformedContentSearch,processedResponseContentSearch,connectorMapContentSearch,channelMapContentSearch,sourceMapContentSearch,responseMapContentSearch,processingErrorContentSearch,postprocessorErrorContentSearch,responseErrorContentSearch,metaDataSearch,metaDataCaseInsensitiveSearch,textSearchMetaDataColumn,minSendAttempts,maxSendAttempts,attachment,error,channelId})

Summary: Count number for messages by specific filter criteria.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| minMessageId | The minimum message ID to query. | No |
| maxMessageId | The maximum message ID to query. | No |
| minOriginalId | The minimum original message ID to query. Messages that have been reprocessed will retain their original message ID. | No |
| maxOriginalId | The maximum original message ID to query. Messages that have been reprocessed will retain their original message ID. | No |
| minImportId | The minimum import message ID to query. Messages that have been imported will retain their original message ID under this value. | No |
| maxImportId | The maximum import message ID to query. Messages that have been imported will retain their original message ID under this value. | No |
| startDate | The earliest original received date to query by. Example: 1985-10-26T09:00:00.000-0700 | No |
| endDate | The latest original received date to query by. Example: 2015-10-21T07:28:00.000-0700 | No |
| textSearch | Searches all message content for this string. This process could take a long time depending on the amount of message content currently stored. Any message content that was encrypted by this channel will not be searchable. | No |
| textSearchRegex | If true, text search input will be considered a regular expression pattern to be matched. Only supported by PostgreSQL, MySQL and Oracle databases. | No |
| status | Determines which message statuses to query by. | No |
| includedMetaDataId | If present, only connector metadata IDs in this list will be queried. | No |
| excludedMetaDataId | If present, connector metadata IDs in this list will not be queried. | No |
| serverId | The server ID associated with messages. | No |
| rawContentSearch | Searches the raw content of messages. | No |
| processedRawContentSearch | Searches the processed raw content of messages. | No |
| transformedContentSearch | Searches the transformed content of messages. | No |
| encodedContentSearch | Searches the encoded content of messages. | No |
| sentContentSearch | Searches the sent content of messages. | No |
| responseContentSearch | Searches the response content of messages. | No |
| responseTransformedContentSearch | Searches the response transformed content of messages. | No |
| processedResponseContentSearch | Searches the processed response content of messages. | No |
| connectorMapContentSearch | Searches the connector map content of messages. | No |
| channelMapContentSearch | Searches the channel map content of messages. | No |
| sourceMapContentSearch | Searches the source map content of messages. | No |
| responseMapContentSearch | Searches the response map content of messages. | No |
| processingErrorContentSearch | Searches the processing error content of messages. | No |
| postprocessorErrorContentSearch | Searches the postprocessor error content of messages. | No |
| responseErrorContentSearch | Searches the response error content of messages. | No |
| metaDataSearch | Searches a custom metadata column. Value should be in the form: COLUMN_NAME &lt;operator&gt; value, where operator is one of the following: =, !=, <, <=, >, >=, CONTAINS, DOES NOT CONTAIN, STARTS WITH, DOES NOT START WITH, ENDS WITH, DOES NOT END WITH | No |
| metaDataCaseInsensitiveSearch | Searches a custom metadata column, ignoring case. Value should be in the form: COLUMN_NAME &lt;operator&gt; value. | No |
| textSearchMetaDataColumn | When using a text search, these custom metadata columns will also be searched. | No |
| minSendAttempts | The minimum number of send attempts for connector messages. | No |
| maxSendAttempts | The maximum number of send attempts for connector messages. | No |
| attachment | If true, only messages with attachments are included in the results. | No |
| error | If true, only messages with errors are included in the results. | No |
---

#### ReprocessMessages(replace,filterDestinations,metaDataId,channelId,messageFilter)

Summary: Reprocesses messages through a channel filtering with a MessageFilter.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| replace | If true, the message will overwrite the current one | No |
| filterDestinations | If true, the metaDataId parameter will be used to determine which destinations to reprocess the message through. | No |
| metaDataId | Indicates which destinations to send the message to. | No |
| messageFilter | object | 'Yes' | {"maxMessageId":{"type":"integer","format":"int64"},"minMessageId":{"type":"integer","format":"int64"},"originalIdUpper":{"type":"integer","format":"int64"},"originalIdLower":{"type":"integer","format":"int64"},"importIdUpper":{"type":"integer","format":"int64"},"importIdLower":{"type":"integer","format":"int64"},"startDate":{"type":"string","format":"date-time"},"endDate":{"type":"string","format":"date-time"},"textSearch":{"type":"string"},"textSearchRegex":{"type":"boolean"},"statuses":{"uniqueItems":true,"type":"array","items":{"type":"string","enum":["RECEIVED","FILTERED","TRANSFORMED","SENT","QUEUED","ERROR","PENDING"]}},"includedMetaDataIds":{"type":"array","items":{"type":"integer","format":"int32"}},"excludedMetaDataIds":{"type":"array","items":{"type":"integer","format":"int32"}},"serverId":{"type":"string"},"contentSearch":{"type":"array","items":{"$ref":"#/components/schemas/ContentSearchElement"}},"metaDataSearch":{"type":"array","items":{"$ref":"#/components/schemas/MetaDataSearchElement"}},"textSearchMetaDataColumns":{"type":"array","items":{"type":"string"}},"sendAttemptsLower":{"type":"integer","format":"int32"},"sendAttemptsUpper":{"type":"integer","format":"int32"},"attachment":{"type":"boolean"},"error":{"type":"boolean"}} |
---

#### ReprocessMessages_1( {minMessageId,maxMessageId,minOriginalId,maxOriginalId,minImportId,maxImportId,startDate,endDate,textSearch,textSearchRegex,status,includedMetaDataId,excludedMetaDataId,serverId,rawContentSearch,processedRawContentSearch,transformedContentSearch,encodedContentSearch,sentContentSearch,responseContentSearch,responseTransformedContentSearch,processedResponseContentSearch,connectorMapContentSearch,channelMapContentSearch,sourceMapContentSearch,responseMapContentSearch,processingErrorContentSearch,postprocessorErrorContentSearch,responseErrorContentSearch,metaDataSearch,metaDataCaseInsensitiveSearch,textSearchMetaDataColumn,minSendAttempts,maxSendAttempts,attachment,error,replace,filterDestinations,metaDataId,channelId})

Summary: Reprocesses messages through a channel by specific filter criteria.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| minMessageId | The minimum message ID to query. | No |
| maxMessageId | The maximum message ID to query. | No |
| minOriginalId | The minimum original message ID to query. Messages that have been reprocessed will retain their original message ID. | No |
| maxOriginalId | The maximum original message ID to query. Messages that have been reprocessed will retain their original message ID. | No |
| minImportId | The minimum import message ID to query. Messages that have been imported will retain their original message ID under this value. | No |
| maxImportId | The maximum import message ID to query. Messages that have been imported will retain their original message ID under this value. | No |
| startDate | The earliest original received date to query by. Example: 1985-10-26T09:00:00.000-0700 | No |
| endDate | The latest original received date to query by. Example: 2015-10-21T07:28:00.000-0700 | No |
| textSearch | Searches all message content for this string. This process could take a long time depending on the amount of message content currently stored. Any message content that was encrypted by this channel will not be searchable. | No |
| textSearchRegex | If true, text search input will be considered a regular expression pattern to be matched. Only supported by PostgreSQL, MySQL and Oracle databases. | No |
| status | Determines which message statuses to query by. | No |
| includedMetaDataId | If present, only connector metadata IDs in this list will be queried. | No |
| excludedMetaDataId | If present, connector metadata IDs in this list will not be queried. | No |
| serverId | The server ID associated with messages. | No |
| rawContentSearch | Searches the raw content of messages. | No |
| processedRawContentSearch | Searches the processed raw content of messages. | No |
| transformedContentSearch | Searches the transformed content of messages. | No |
| encodedContentSearch | Searches the encoded content of messages. | No |
| sentContentSearch | Searches the sent content of messages. | No |
| responseContentSearch | Searches the response content of messages. | No |
| responseTransformedContentSearch | Searches the response transformed content of messages. | No |
| processedResponseContentSearch | Searches the processed response content of messages. | No |
| connectorMapContentSearch | Searches the connector map content of messages. | No |
| channelMapContentSearch | Searches the channel map content of messages. | No |
| sourceMapContentSearch | Searches the source map content of messages. | No |
| responseMapContentSearch | Searches the response map content of messages. | No |
| processingErrorContentSearch | Searches the processing error content of messages. | No |
| postprocessorErrorContentSearch | Searches the postprocessor error content of messages. | No |
| responseErrorContentSearch | Searches the response error content of messages. | No |
| metaDataSearch | Searches a custom metadata column. Value should be in the form: COLUMN_NAME &lt;operator&gt; value, where operator is one of the following: =, !=, <, <=, >, >=, CONTAINS, DOES NOT CONTAIN, STARTS WITH, DOES NOT START WITH, ENDS WITH, DOES NOT END WITH | No |
| metaDataCaseInsensitiveSearch | Searches a custom metadata column, ignoring case. Value should be in the form: COLUMN_NAME &lt;operator&gt; value. | No |
| textSearchMetaDataColumn | When using a text search, these custom metadata columns will also be searched. | No |
| minSendAttempts | The minimum number of send attempts for connector messages. | No |
| maxSendAttempts | The maximum number of send attempts for connector messages. | No |
| attachment | If true, only messages with attachments are included in the results. | No |
| error | If true, only messages with errors are included in the results. | No |
| replace | If true, the message will overwrite the current one | No |
| filterDestinations | If true, the metaDataId parameter will be used to determine which destinations to reprocess the message through. | No |
| metaDataId | Indicates which destinations to send the message to. | No |
---

#### ReprocessMessage(replace,filterDestinations,metaDataId,channelId,messageId)

Summary: Reprocesses and overwrites a single message.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| messageId | The ID of the message. | Yes |
| replace | If true, the message will overwrite the current one | No |
| filterDestinations | If true, the metaDataId parameter will be used to determine which destinations to reprocess the message through. | No |
| metaDataId | Indicates which destinations to send the message to. | No |
---

#### GetMessageContent(metaDataId,channelId,messageId)

Summary: Retrieve a message by ID.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| messageId | The ID of the message. | Yes |
| metaDataId | The metadata IDs of the connectors. | No |
---

#### RemoveMessage(metaDataId,patient_id,channelId,messageId)

Summary: Remove a single message by ID.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| messageId | The ID of the message. | Yes |
| metaDataId | If present, only the specific connector message will be removed. If the metadata ID is 0, the entire message will be removed. | No |
| patient_id | The patient ID of the channel message. | No |
---

#### RemoveAllMessagesPost(restartRunningChannels,clearStatistics)

Summary: Removes all messages for multiple specified channels. This is a POST request alternative to DELETE /_removeAllMessages that may be used when there are too many channel IDs to include in the query parameters.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| restartRunningChannels | If true, currently running channels will be stopped and restarted as part of the remove process. Otherwise, currently running channels will not be included. | No |
| clearStatistics | If true, message statistics will also be cleared. | No |
---

#### ImportMessage(channelId,message)

Summary: Imports a Message object into a channel. The message will not actually be processed through the channel, only imported.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| message | object | 'Yes' | {"messageId":{"type":"integer","format":"int64"},"serverId":{"type":"string"},"channelId":{"type":"string"},"receivedDate":{"type":"string","format":"date-time"},"processed":{"type":"boolean"},"originalId":{"type":"integer","format":"int64"},"importId":{"type":"integer","format":"int64"},"importChannelId":{"type":"string"},"attachments":{"type":"array","items":{"$ref":"#/components/schemas/Attachment"}},"connectorMessages":{"type":"object","additionalProperties":{"$ref":"#/components/schemas/ConnectorMessage"}},"mergedConnectorMessage":{"$ref":"#/components/schemas/ConnectorMessage"}} |
---

#### ImportMessagesServer(includeSubfolders,channelId,textData)

Summary: Imports messages into a channel from a path accessible by the server. The messages will not actually be processed through the channel, only imported.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| includeSubfolders | If true, sub-folders will also be scanned recursively for messages. | No |
| textData | string | 'Yes' |  |
---

#### ExportMessagesServer(pageSize,channelId)

Summary: Exports messages into a specific directory path accessible by the server. ("Try it out" doesn't work for this endpoint, but the descriptions are valid. Please use another tool for testing.)

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| pageSize | The maximum number of messages that will be queried at a time. | No |
---

#### ExportMessagesServer_1( {minMessageId,maxMessageId,minOriginalId,maxOriginalId,minImportId,maxImportId,startDate,endDate,textSearch,textSearchRegex,status,includedMetaDataId,excludedMetaDataId,serverId,rawContentSearch,processedRawContentSearch,transformedContentSearch,encodedContentSearch,sentContentSearch,responseContentSearch,responseTransformedContentSearch,processedResponseContentSearch,connectorMapContentSearch,channelMapContentSearch,sourceMapContentSearch,responseMapContentSearch,processingErrorContentSearch,postprocessorErrorContentSearch,responseErrorContentSearch,metaDataSearch,metaDataCaseInsensitiveSearch,textSearchMetaDataColumn,minSendAttempts,maxSendAttempts,attachment,error,pageSize,contentType,destinationContent,encrypt,includeAttachments,baseFolder,rootFolder,filePattern,archiveFileName,archiveFormat,compressFormat,password,encryptionType,channelId})

Summary: Exports messages into a specific directory path accessible by the server.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| minMessageId | The minimum message ID to query. | No |
| maxMessageId | The maximum message ID to query. | No |
| minOriginalId | The minimum original message ID to query. Messages that have been reprocessed will retain their original message ID. | No |
| maxOriginalId | The maximum original message ID to query. Messages that have been reprocessed will retain their original message ID. | No |
| minImportId | The minimum import message ID to query. Messages that have been imported will retain their original message ID under this value. | No |
| maxImportId | The maximum import message ID to query. Messages that have been imported will retain their original message ID under this value. | No |
| startDate | The earliest original received date to query by. Example: 1985-10-26T09:00:00.000-0700 | No |
| endDate | The latest original received date to query by. Example: 2015-10-21T07:28:00.000-0700 | No |
| textSearch | Searches all message content for this string. This process could take a long time depending on the amount of message content currently stored. Any message content that was encrypted by this channel will not be searchable. | No |
| textSearchRegex | If true, text search input will be considered a regular expression pattern to be matched. Only supported by PostgreSQL, MySQL and Oracle databases. | No |
| status | Determines which message statuses to query by. | No |
| includedMetaDataId | If present, only connector metadata IDs in this list will be queried. | No |
| excludedMetaDataId | If present, connector metadata IDs in this list will not be queried. | No |
| serverId | The server ID associated with messages. | No |
| rawContentSearch | Searches the raw content of messages. | No |
| processedRawContentSearch | Searches the processed raw content of messages. | No |
| transformedContentSearch | Searches the transformed content of messages. | No |
| encodedContentSearch | Searches the encoded content of messages. | No |
| sentContentSearch | Searches the sent content of messages. | No |
| responseContentSearch | Searches the response content of messages. | No |
| responseTransformedContentSearch | Searches the response transformed content of messages. | No |
| processedResponseContentSearch | Searches the processed response content of messages. | No |
| connectorMapContentSearch | Searches the connector map content of messages. | No |
| channelMapContentSearch | Searches the channel map content of messages. | No |
| sourceMapContentSearch | Searches the source map content of messages. | No |
| responseMapContentSearch | Searches the response map content of messages. | No |
| processingErrorContentSearch | Searches the processing error content of messages. | No |
| postprocessorErrorContentSearch | Searches the postprocessor error content of messages. | No |
| responseErrorContentSearch | Searches the response error content of messages. | No |
| metaDataSearch | Searches a custom metadata column. Value should be in the form: COLUMN_NAME &lt;operator&gt; value, where operator is one of the following: =, !=, <, <=, >, >=, CONTAINS, DOES NOT CONTAIN, STARTS WITH, DOES NOT START WITH, ENDS WITH, DOES NOT END WITH | No |
| metaDataCaseInsensitiveSearch | Searches a custom metadata column, ignoring case. Value should be in the form: COLUMN_NAME &lt;operator&gt; value. | No |
| textSearchMetaDataColumn | When using a text search, these custom metadata columns will also be searched. | No |
| minSendAttempts | The minimum number of send attempts for connector messages. | No |
| maxSendAttempts | The maximum number of send attempts for connector messages. | No |
| attachment | If true, only messages with attachments are included in the results. | No |
| error | If true, only messages with errors are included in the results. | No |
| pageSize | The maximum number of messages that will be queried at a time. | No |
| contentType | The ContentType that will be extracted from the message for writing. If null or not provided, the entire message will be written in serialized format. | No |
| destinationContent | If true, the content to write will be extracted from the destination message(s), rather than the source message. | No |
| encrypt | If true, message content will be encrypted before writing. | No |
| includeAttachments | Determines whether attachments will be included with messages. | No |
| baseFolder | The base directory to use when resolving relative paths in the root folder. | No |
| rootFolder | The root folder to contain the written messages/sub-folders. | No |
| filePattern | A string defining the folder/filename(s) for writing messages. It may contain variables to be replaced. | No |
| archiveFileName | The file name to use for archive exports. | No |
| archiveFormat | The archiver format to use to archive messages/folders that are written to the root folder. Valid values: zip, tar | No |
| compressFormat | The compressor format to use to compress the archive file. Only valid when using the TAR archive format. Valid values: gz, bzip2 | No |
| password | The password used to protect the archive file. Only valid when using the ZIP archive format. | No |
| encryptionType | The algorithm used to encrypt the password-protected archive file. Only valid when using the ZIP archive format. Valid values: STANDARD, AES128, AES256 | No |
---

#### ExportAttachmentServer(binary,channelId,messageId,attachmentId)

Summary: Exports a message attachment into a specific file path accessible by the server.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| messageId | The ID of the message. | Yes |
| attachmentId | The ID of the attachment. | Yes |
| binary | Indicates that the attachment is binary and should be Base64 decoded before writing to file. | No |
---

#### AuditAccessedPHIMessage()

Summary: Audit that the user has accessed a channel message that contains PHI.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### AuditQueriedPHIMessage()

Summary: Audit that the user has queried the channel messages panel that contains PHI.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### RemoveMessages_1(channelId,messageFilter)

Summary: Remove messages by specific filter criteria.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| messageFilter | object | 'Yes' | {"maxMessageId":{"type":"integer","format":"int64"},"minMessageId":{"type":"integer","format":"int64"},"originalIdUpper":{"type":"integer","format":"int64"},"originalIdLower":{"type":"integer","format":"int64"},"importIdUpper":{"type":"integer","format":"int64"},"importIdLower":{"type":"integer","format":"int64"},"startDate":{"type":"string","format":"date-time"},"endDate":{"type":"string","format":"date-time"},"textSearch":{"type":"string"},"textSearchRegex":{"type":"boolean"},"statuses":{"uniqueItems":true,"type":"array","items":{"type":"string","enum":["RECEIVED","FILTERED","TRANSFORMED","SENT","QUEUED","ERROR","PENDING"]}},"includedMetaDataIds":{"type":"array","items":{"type":"integer","format":"int32"}},"excludedMetaDataIds":{"type":"array","items":{"type":"integer","format":"int32"}},"serverId":{"type":"string"},"contentSearch":{"type":"array","items":{"$ref":"#/components/schemas/ContentSearchElement"}},"metaDataSearch":{"type":"array","items":{"$ref":"#/components/schemas/MetaDataSearchElement"}},"textSearchMetaDataColumns":{"type":"array","items":{"type":"string"}},"sendAttemptsLower":{"type":"integer","format":"int32"},"sendAttemptsUpper":{"type":"integer","format":"int32"},"attachment":{"type":"boolean"},"error":{"type":"boolean"}} |
---

#### RemoveAllMessages(restartRunningChannels,clearStatistics,channelId)

Summary: Removes all messages for the specified channel.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| restartRunningChannels | If true, currently running channels will be stopped and restarted as part of the remove process. Otherwise, currently running channels will not be included. | No |
| clearStatistics | If true, message statistics will also be cleared. | No |
---

#### RemoveAllMessages_1(channelId,restartRunningChannels,clearStatistics)

Summary: Removes all messages for multiple specified channels.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The IDs of the channels. | Yes |
| restartRunningChannels | If true, currently running channels will be stopped and restarted as part of the remove process. Otherwise, currently running channels will not be included. | No |
| clearStatistics | If true, message statistics will also be cleared. | No |
---

#### GetMaxMessageId(channelId)

Summary: Returns the maximum message ID for the given channel.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
---

#### GetAttachment(channelId,messageId,attachmentId)

Summary: Retrieve a message attachment by ID.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| messageId | The ID of the message. | Yes |
| attachmentId | The ID of the attachment. | Yes |
---

#### GetStats()

Summary: Returns statistics for the underlying system.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### GetInfo()

Summary: Returns information about the underlying system.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### GetUsageData()

Summary: Generates usage document using data from both the client and server.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### Login(password,username)

Summary: Logs in to the Mirth Connect server using the specified name and password.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### Logout()

Summary: Logs out of the server.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### GetCurrentUser()

Summary: Returns the current logged in user.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### SetUserNotificationAcknowledged(userId)

Summary: User notification has been acknowledged.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| userId | The unique ID of the user. | Yes |
---

#### CheckUserPassword(textData)

Summary: Checks the password against the configured password policies.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| textData | string | 'Yes' |  |
---

#### UpdateUserPassword(userId,textData)

Summary: Updates a user's password.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| userId | The unique ID of the user to update the password for. | Yes |
| textData | string | 'Yes' |  |
---

#### InactivityLogout()

Summary: User has been inactive and automatically logged out.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### GetAllUsers()

Summary: Returns a List of all users.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
---

#### CreateUser(user)

Summary: Creates a new user.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| user | object | 'Yes' | {"id":{"type":"integer","format":"int32"},"username":{"type":"string"},"email":{"type":"string"},"firstName":{"type":"string"},"lastName":{"type":"string"},"organization":{"type":"string"},"description":{"type":"string"},"phoneNumber":{"type":"string"},"industry":{"type":"string"},"lastLogin":{"type":"string","format":"date-time"},"gracePeriodStart":{"type":"string","format":"date-time"},"strikeCount":{"type":"integer","format":"int32"},"lastStrikeTime":{"type":"string","format":"date-time"},"country":{"type":"string"},"stateTerritory":{"type":"string"},"role":{"type":"string"},"userConsent":{"type":"boolean"}} |
---

#### GetUser(userIdOrName)

Summary: Returns a specific user by ID or username.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| userIdOrName | The unique ID or username of the user to retrieve. | Yes |
---

#### UpdateUser(userId,user)

Summary: Updates a specified user.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| userId | The unique ID of the user to update. | Yes |
| user | object | 'Yes' | {"id":{"type":"integer","format":"int32"},"username":{"type":"string"},"email":{"type":"string"},"firstName":{"type":"string"},"lastName":{"type":"string"},"organization":{"type":"string"},"description":{"type":"string"},"phoneNumber":{"type":"string"},"industry":{"type":"string"},"lastLogin":{"type":"string","format":"date-time"},"gracePeriodStart":{"type":"string","format":"date-time"},"strikeCount":{"type":"integer","format":"int32"},"lastStrikeTime":{"type":"string","format":"date-time"},"country":{"type":"string"},"stateTerritory":{"type":"string"},"role":{"type":"string"},"userConsent":{"type":"boolean"}} |
---

#### RemoveUser(userId)

Summary: Removes a specific user.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| userId | The unique ID of the user to remove. | Yes |
---

#### IsUserLoggedIn(userId)

Summary: Returns a true if the specified user is logged in to the server.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| userId | The unique ID of the user. | Yes |
---

#### GetUserPreferences(name,userId)

Summary: Returns a Map of user preferences, optionally filtered by a set of property names.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| userId | The unique ID of the user. | Yes |
| name | An optional set of property names to filter by. | No |
---

#### SetUserPreferences(userId)

Summary: Updates multiple user preferences.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| userId | The unique ID of the user. | Yes |
---

#### GetUserPreference(userId,name)

Summary: Returns a specific user preference.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| userId | The unique ID of the user. | Yes |
| name | The name of the user property to retrieve. | Yes |
---

#### SetUserPreference(userId,name,textData)

Summary: Updates a user preference.

Parameters:

| Name | Description | Required | Properties |
| ------ | ------ | ------ | ------ |
| userId | The unique ID of the user. | Yes |
| name | The name of the user property to update. | Yes |
| textData | string | 'Yes' |  |
---
