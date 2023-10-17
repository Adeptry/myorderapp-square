/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.5.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ErrorResponse } from '../myorderapp-square-models';
// @ts-ignore
import { UserEntity } from '../myorderapp-square-models';
// @ts-ignore
import { UserPatchBody } from '../myorderapp-square-models';
/**
 * UsersApi - axios parameter creator
 * @export
 */
export const UsersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteUserMe: async (xCustomLang?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/users/me`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            // authentication Api-Key required
            await setApiKeyToObject(localVarHeaderParameter, "Api-Key", configuration)

            if (xCustomLang != null) {
                localVarHeaderParameter['x-custom-lang'] = String(xCustomLang);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 
         * @param {boolean} [customers] 
         * @param {boolean} [merchants] 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserMe: async (customers?: boolean, merchants?: boolean, xCustomLang?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/users/me`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            // authentication Api-Key required
            await setApiKeyToObject(localVarHeaderParameter, "Api-Key", configuration)

            if (customers !== undefined) {
                localVarQueryParameter['customers'] = customers;
            }

            if (merchants !== undefined) {
                localVarQueryParameter['merchants'] = merchants;
            }

            if (xCustomLang != null) {
                localVarHeaderParameter['x-custom-lang'] = String(xCustomLang);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 
         * @param {UserPatchBody} userPatchBody 
         * @param {boolean} [customers] 
         * @param {boolean} [merchants] 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchUserMe: async (userPatchBody: UserPatchBody, customers?: boolean, merchants?: boolean, xCustomLang?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userPatchBody' is not null or undefined
            assertParamExists('patchUserMe', 'userPatchBody', userPatchBody)
            const localVarPath = `/v2/users/me`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            // authentication Api-Key required
            await setApiKeyToObject(localVarHeaderParameter, "Api-Key", configuration)

            if (customers !== undefined) {
                localVarQueryParameter['customers'] = customers;
            }

            if (merchants !== undefined) {
                localVarQueryParameter['merchants'] = merchants;
            }

            if (xCustomLang != null) {
                localVarHeaderParameter['x-custom-lang'] = String(xCustomLang);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(userPatchBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UsersApi - functional programming interface
 * @export
 */
export const UsersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UsersApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteUserMe(xCustomLang?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserEntity>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteUserMe(xCustomLang, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary 
         * @param {boolean} [customers] 
         * @param {boolean} [merchants] 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserMe(customers?: boolean, merchants?: boolean, xCustomLang?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserEntity>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserMe(customers, merchants, xCustomLang, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary 
         * @param {UserPatchBody} userPatchBody 
         * @param {boolean} [customers] 
         * @param {boolean} [merchants] 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchUserMe(userPatchBody: UserPatchBody, customers?: boolean, merchants?: boolean, xCustomLang?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserEntity>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchUserMe(userPatchBody, customers, merchants, xCustomLang, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UsersApi - factory interface
 * @export
 */
export const UsersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UsersApiFp(configuration)
    return {
        /**
         * 
         * @summary 
         * @param {UsersApiDeleteUserMeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteUserMe(requestParameters: UsersApiDeleteUserMeRequest = {}, options?: AxiosRequestConfig): AxiosPromise<UserEntity> {
            return localVarFp.deleteUserMe(requestParameters.xCustomLang, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 
         * @param {UsersApiGetUserMeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserMe(requestParameters: UsersApiGetUserMeRequest = {}, options?: AxiosRequestConfig): AxiosPromise<UserEntity> {
            return localVarFp.getUserMe(requestParameters.customers, requestParameters.merchants, requestParameters.xCustomLang, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 
         * @param {UsersApiPatchUserMeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchUserMe(requestParameters: UsersApiPatchUserMeRequest, options?: AxiosRequestConfig): AxiosPromise<UserEntity> {
            return localVarFp.patchUserMe(requestParameters.userPatchBody, requestParameters.customers, requestParameters.merchants, requestParameters.xCustomLang, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for deleteUserMe operation in UsersApi.
 * @export
 * @interface UsersApiDeleteUserMeRequest
 */
export interface UsersApiDeleteUserMeRequest {
    /**
     * 
     * @type {string}
     * @memberof UsersApiDeleteUserMe
     */
    readonly xCustomLang?: string
}

/**
 * Request parameters for getUserMe operation in UsersApi.
 * @export
 * @interface UsersApiGetUserMeRequest
 */
export interface UsersApiGetUserMeRequest {
    /**
     * 
     * @type {boolean}
     * @memberof UsersApiGetUserMe
     */
    readonly customers?: boolean

    /**
     * 
     * @type {boolean}
     * @memberof UsersApiGetUserMe
     */
    readonly merchants?: boolean

    /**
     * 
     * @type {string}
     * @memberof UsersApiGetUserMe
     */
    readonly xCustomLang?: string
}

/**
 * Request parameters for patchUserMe operation in UsersApi.
 * @export
 * @interface UsersApiPatchUserMeRequest
 */
export interface UsersApiPatchUserMeRequest {
    /**
     * 
     * @type {UserPatchBody}
     * @memberof UsersApiPatchUserMe
     */
    readonly userPatchBody: UserPatchBody

    /**
     * 
     * @type {boolean}
     * @memberof UsersApiPatchUserMe
     */
    readonly customers?: boolean

    /**
     * 
     * @type {boolean}
     * @memberof UsersApiPatchUserMe
     */
    readonly merchants?: boolean

    /**
     * 
     * @type {string}
     * @memberof UsersApiPatchUserMe
     */
    readonly xCustomLang?: string
}

/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export class UsersApi extends BaseAPI {
    /**
     * 
     * @summary 
     * @param {UsersApiDeleteUserMeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public deleteUserMe(requestParameters: UsersApiDeleteUserMeRequest = {}, options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).deleteUserMe(requestParameters.xCustomLang, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary 
     * @param {UsersApiGetUserMeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public getUserMe(requestParameters: UsersApiGetUserMeRequest = {}, options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).getUserMe(requestParameters.customers, requestParameters.merchants, requestParameters.xCustomLang, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary 
     * @param {UsersApiPatchUserMeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public patchUserMe(requestParameters: UsersApiPatchUserMeRequest, options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).patchUserMe(requestParameters.userPatchBody, requestParameters.customers, requestParameters.merchants, requestParameters.xCustomLang, options).then((request) => request(this.axios, this.basePath));
    }
}

