/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Merchants API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.21
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'email'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'firstName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'lastName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'provider'?: UserProviderEnum;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'socialId'?: string | null;
}

export const UserProviderEnum = {
    Email: 'email',
    Facebook: 'facebook',
    Google: 'google',
    Twitter: 'twitter',
    Apple: 'apple'
} as const;

export type UserProviderEnum = typeof UserProviderEnum[keyof typeof UserProviderEnum];


