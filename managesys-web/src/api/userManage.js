import request from '@/utils/request'

export default{
    getUserList(serchModel){
      return request({
        url: '/user/list',
        method: 'get',
        params: {
          pageNo: serchModel.pageNo,
          pageSize: serchModel.pageSize,
          username: serchModel.username,
          phone: serchModel.phone,

        }
      });
    },
    addUser(user){
      return request({
        url: '/user',
        method: 'post',
        data: user
      });
    },
    
    getUserById(id){
      return request({
        //url: '/user/' + id,
        url: `/user/${id}`,
        method: 'get'
      });
    },
    saveUser(user){
      if(user.id == null && user.id == undefined){
        return this.addUser(user);
      }
      return this.updateUser(user);
    },
    updateUser(user){
      return request({
        url: '/user',
        method: 'put',
        data: user
      });
    },
    deleteUserById(id){
      return request({
        url: `/user/${id}`,
        method: `delete`,
      });
    },

}