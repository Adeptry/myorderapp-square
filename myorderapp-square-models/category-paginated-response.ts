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


// May contain unused imports in some cases
// @ts-ignore
import { CategoryEntity } from './category-entity';

/**
 * 
 * @export
 * @interface CategoryPaginatedResponse
 */
export interface CategoryPaginatedResponse {
    /**
     * 
     * @type {Array<CategoryEntity>}
     * @memberof CategoryPaginatedResponse
     */
    'data'?: Array<CategoryEntity> | null;
    /**
     * 
     * @type {number}
     * @memberof CategoryPaginatedResponse
     */
    'pages': number;
    /**
     * 
     * @type {number}
     * @memberof CategoryPaginatedResponse
     */
    'count': number;
}

