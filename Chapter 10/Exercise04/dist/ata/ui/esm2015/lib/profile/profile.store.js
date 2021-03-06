/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Store } from '../store';
import { ProfileState } from './profile.state';
export class ProfileStore extends Store {
    constructor() {
        super(new ProfileState());
    }
    /**
     * @param {?} first_name
     * @param {?} last_name
     * @param {?} prefeered_location
     * @return {?}
     */
    updateUser(first_name, last_name, prefeered_location) {
        this.setState(Object.assign({}, this.state, { profile_data: Object.assign({}, this.state.profile_data, { first_name: first_name, last_name: last_name, prefeered_location: prefeered_location }) }));
    }
}
ProfileStore.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ProfileStore.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    ProfileStore.prototype.state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhdGEvdWkvIiwic291cmNlcyI6WyJsaWIvcHJvZmlsZS9wcm9maWxlLnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDakMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBSS9DLE1BQU0sT0FBTyxZQUFhLFNBQVEsS0FBbUI7SUFFbkQ7UUFDRSxLQUFLLENBQUMsSUFBSSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7Ozs7SUFDRCxVQUFVLENBQUMsVUFBa0IsRUFBQyxTQUFnQixFQUFDLGtCQUF5QjtRQUN0RSxJQUFJLENBQUMsUUFBUSxtQkFDUixJQUFJLENBQUMsS0FBSyxJQUNiLFlBQVksb0JBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLElBQUMsVUFBVSxFQUFFLFVBQVUsRUFBQyxTQUFTLEVBQUUsU0FBUyxFQUFDLGtCQUFrQixFQUFFLGtCQUFrQixPQUM1SCxDQUFDO0lBQ0wsQ0FBQzs7O1lBWEYsVUFBVTs7Ozs7O0lBRVQsNkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQgeyBQcm9maWxlU3RhdGUgfSBmcm9tICcuL3Byb2ZpbGUuc3RhdGUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZmlsZVN0b3JlIGV4dGVuZHMgU3RvcmU8UHJvZmlsZVN0YXRlPiB7XG4gIHB1YmxpYyBzdGF0ZTogUHJvZmlsZVN0YXRlO1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIobmV3IFByb2ZpbGVTdGF0ZSgpKTtcbiAgfVxuICB1cGRhdGVVc2VyKGZpcnN0X25hbWU6IHN0cmluZyxsYXN0X25hbWU6c3RyaW5nLHByZWZlZXJlZF9sb2NhdGlvbjpzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICBwcm9maWxlX2RhdGE6IHsuLi50aGlzLnN0YXRlLnByb2ZpbGVfZGF0YSxmaXJzdF9uYW1lOiBmaXJzdF9uYW1lLGxhc3RfbmFtZTogbGFzdF9uYW1lLHByZWZlZXJlZF9sb2NhdGlvbjogcHJlZmVlcmVkX2xvY2F0aW9ufVxuICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==