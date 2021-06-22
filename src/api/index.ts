import request from '../axios/index'

export const testServiceInterface = {
    /**
     * @param params 获取字典的参数
     * @returns Array
    */
    getDictData(params: Object) {
        return request({
          url: "/common/dict",
          method: "GET",
          params
        });
    }
}