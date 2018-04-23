'use strict'

import serviceBase from './serviceBase'

const loginService = {

  /**
   * Gets current user
   * @returns {*}
   */
  authCheck:  (credentials) =>  serviceBase.post('/login',credentials),
  toolKitDetails:  (data) =>  serviceBase.post('/login/toolKitDetails',data),
  userToolkits:  (data) =>  serviceBase.post('/login/userToolkits',data),
  getPassword:(userId) =>   serviceBase.post(`/login/toolKitDetails/password/${userId}`),
  newUserPassword:  (data) =>  serviceBase.post('/login/toolKitDetails/password/newpassword/newUserPassword',data),
  newUserPasswordSet:  (data) =>  serviceBase.post('/login/toolKitDetails/password/newpassword/newUserPassword/set/email/password',data),
  updatePassword:(newPassword,userId) => serviceBase.post(`/login/toolKitDetails/password/newpassword/${newPassword}/${userId}`),
  updateMetrics:  (data) =>  serviceBase.post('/login/toolKitDetails/password/newpassword/newUserPassword/metrics/browers',data),


}
export default loginService
