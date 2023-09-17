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


// May contain unused imports in some cases
// @ts-ignore
import { LineItemModifier } from './line-item-modifier';

/**
 * 
 * @export
 * @interface LineItem
 */
export interface LineItem {
    /**
     * 
     * @type {number}
     * @memberof LineItem
     */
    'basePriceMoney'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof LineItem
     */
    'currency'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof LineItem
     */
    'grossSalesMoneyAmount'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof LineItem
     */
    'id'?: string | null;
    /**
     * 
     * @type {Array<LineItemModifier>}
     * @memberof LineItem
     */
    'modifiers'?: Array<LineItemModifier> | null;
    /**
     * 
     * @type {string}
     * @memberof LineItem
     */
    'name'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LineItem
     */
    'note'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LineItem
     */
    'quantity'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof LineItem
     */
    'totalDiscountMoneyAmount'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof LineItem
     */
    'totalMoneyAmount'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof LineItem
     */
    'totalServiceChargeMoneyAmount'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof LineItem
     */
    'totalTaxMoneyAmount'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof LineItem
     */
    'variationName'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof LineItem
     */
    'variationTotalMoneyAmount'?: number | null;
}

