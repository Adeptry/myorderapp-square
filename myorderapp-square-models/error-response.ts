/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.5.16
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface ErrorResponse
 */
export interface ErrorResponse {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ErrorResponse
     */
    'fields'?: { [key: string]: string; } | null;
    /**
     * 
     * @type {string}
     * @memberof ErrorResponse
     */
    'message'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ErrorResponse
     */
    'method'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ErrorResponse
     */
    'statusCode'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ErrorResponse
     */
    'timestamp'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ErrorResponse
     */
    'url'?: string | null;
}

